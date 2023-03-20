terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "us-west-2"

  default_tags {
  tags = {
  environment = var.environment
  bucket_name = var.bucket_name
  project = var.project
  }
}
}

module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  vpc_tags = {
    Name = "goose-vpc"
  }
  name = "goose-vpc"
  cidr = "172.0.0.0/16"

  azs             = ["us-west-2a", "us-west-2b", "us-west-2c"]
  private_subnets = ["172.0.1.0/24", "172.0.2.0/24", "172.0.3.0/24"]
  public_subnets  = ["172.0.101.0/24", "172.0.102.0/24", "172.0.103.0/24"]

  enable_nat_gateway = true
  enable_vpn_gateway = true

  tags = {
    Terraform = "true"
    Environment = "prod"
  }
}

resource "aws_s3_bucket" "goose_static_site" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_public_access_block" "static_site_policy" {
  bucket = var.bucket_name

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

data "aws_canonical_user_id" "current" {}

resource "aws_s3_bucket_acl" "goose_static_acl" {
  bucket = aws_s3_bucket.goose_static_site.id
  access_control_policy {
    grant {
      grantee {
        type = "Group"
        uri  = "http://acs.amazonaws.com/groups/global/AllUsers"
      }
      permission = "READ_ACP"
    }
    owner {
      id = data.aws_canonical_user_id.current.id
    }
  }

}

resource "aws_s3_bucket_policy" "static_site_policy" {
  bucket = aws_s3_bucket.goose_static_site.id

  policy = data.aws_iam_policy_document.allow_complete_access_to_everyone.json

}

data "aws_iam_policy_document" "allow_complete_access_to_everyone"{
  statement {
    sid = "1"

    actions = [
      "s3:*",
    ]
    resources = [
      "arn:aws:s3:::goose-social-terraform/*",
    ]
  }
}

resource "aws_s3_bucket_website_configuration" "static_site_configuration" {
  bucket = aws_s3_bucket.goose_static_site.id

  index_document {
    suffix = "index.html"
  }
}