terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.0"
    }
  }
}

provider "aws" {}

module "static_web_host" {
  source                  = "git@bitbucket.org:realdecoyteam/infrastructure-as-code-templates.git//terraform-templates/terraform_aws_s3_cloudfront"
  environment             = var.environment
  bucket_name             = var.bucket_name
  project                 = var.project
  enable_security_headers = false
}
