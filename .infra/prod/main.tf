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

module "main_site" {
  source = "/"

  base_dir = "${path.module}/dist"
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

resource "aws_s3_bucket_acl" "goose_static_acl" {
  bucket = aws_s3_bucket.goose_static_site.id
  acl = "public-read"

}

resource "aws_s3_bucket_policy" "static_site_policy" {
  bucket = aws_s3_bucket.goose_static_site.id

  policy = (public-access-policy.json)

}

resource "aws_s3_bucket_website_configuration" "static_site_configuration" {
  bucket = aws_s3_bucket.goose_static_site.id

  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_object" "static_site_files" {
  bucket = aws_s3_bucket.goose_static_site.id

  for_each = module.main_site.files

  key = each.key

  content_type = each.value.content_type

  source = each.value.source_path
  content = each.value.content

  etag = each.value.digests.md5
}