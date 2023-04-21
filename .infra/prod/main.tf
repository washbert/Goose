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
  region = "us-east-2"

  default_tags {
    tags = {
      environment = var.environment
      bucket_name = var.bucket_name
      project     = var.project
    }
  }
}

resource "aws_vpc" "goose_vpc" {
  cidr_block           = "172.0.0.0/16"
  enable_dns_hostnames = true
  tags = {
    name = "Goose VPC"
  }
}

resource "aws_internet_gateway" "goose_gateway" {
  vpc_id = aws_vpc.goose_vpc.id
    tags = {
    Name = "Goose Gateway"
  }
}

resource "aws_subnet" "goose_subnet" {
  vpc_id                  = aws_vpc.goose_vpc.id
  cidr_block              = "172.0.0.0/24"
  map_public_ip_on_launch = true

  tags = {
    Name = "Goose Subnet"
  }

  depends_on = [aws_internet_gateway.goose_gateway]
}

resource "aws_instance" "goose_ec2" {
  # us-west-2
  ami           = "ami-00eeedc4036573771"
  instance_type = "t2.micro"

  private_ip = "172.0.0.12"
  subnet_id  = aws_subnet.goose_subnet.id
  tags = {
    Name = "Goose EC2 Instance"
  }
}

resource "aws_eip" "bar" {
  vpc = true

    tags = {
    Name = "Goose Elastic IP"
  }

  instance                  = aws_instance.goose_ec2.id
  associate_with_private_ip = "172.0.0.12"
  depends_on                = [aws_internet_gateway.goose_gateway]
}



# resource "aws_vpc" "main" {
#   cidr_block = "174.0.0.0/24"
#   instance_tenancy = "default"
#   enable_dns_support = "true"
#   enable_dns_hostnames = "true"
#   tags = {
#     Name = "Goose-Social-VPC"
#   }
# }

# resource "aws_subnet" "subnet_main_public" {
#   vpc_id     = aws_vpc.main.id
#   cidr_block = "174.0.0.0/24"
#   map_public_ip_on_launch = "true"
#   availability_zone = "us-east-2a"
#   tags = {
#     Name = "Public Subnet Main"
#   }
# }
# resource "aws_subnet" "subnet_main_private" {
#   vpc_id     = aws_vpc.main.id
#   cidr_block = "174.0.0.150/24"
#   map_public_ip_on_launch = "false"
#   availability_zone = "us-east-2a"
#   tags = {
#     Name = "Private Subnet Main"
#   }
# }


# resource "aws_security_group" "Goose_Security_Group_Public"{
#   vpc_id = aws_vpc.main.id
#   name = "Goose Social Security Group"
#   description = "The Security Group for accessing Goose Social VPC"

#   ingress {
#     security_groups = ["0.0.0.0/0"]
#     from_port = 22
#     to_port = 22
#     protocol = "tcp"
#   }
#   egress {
#     cidr_blocks = ["0.0.0.0/0"]
#     from_port = 0
#     to_port = 0
#     protocol = "-1"
#   }
#   tags = {
#     Name = "Public Security Group for Goose Social"
#   }
# }

# resource "aws_security_group" "Goose_Security_Group_Private"{
#   vpc_id = aws_vpc.main.id
#   name = "Goose Social Security Group"
#   description = "The Security Group for accessing Goose Social VPC"

#   ingress {
#     security_groups = ["${aws_security_group.Goose_Security_Group_Public.id}"]
#     from_port = 0
#     to_port = 0
#     protocol = "-1"
#   }
#   egress {
#     cidr_blocks = ["0.0.0.0/0"]
#     from_port = 0
#     to_port = 0
#     protocol = "-1"
#   }
#   tags = {
#     Name = "Private Security Group for Goose Social"
#   }
# }

# resource "aws_internet_gateway" "Goose_VPC_IG" {
#   vpc_id = aws_vpc.main.id

#   tags = {
#     Name = "Goose VPC Internet Gateway"
#   }
# }

# resource "aws_route_table" "Goose_VPC_route_table" {
#   vpc_id = aws_vpc.main.id

#   tags = {
#     Name = "Goose VPC Route Table"
#   }
# }

# resource "aws_route" "Goose_VPC_internet_access" {
#   route_table_id = aws_route_table.Goose_VPC_route_table.id
#   destination_cidr_block = "0.0.0.0/0"
#   gateway_id = aws_internet_gateway.Goose_VPC_IG.id
# }

# resource "aws_route_table_association" "Goose_VPC_Association" {
#   subnet_id = aws_subnet.subnet_main_public.id
#   route_table_id = aws_route_table.Goose_VPC_route_table.id
# }


# The Above is using another method. From the ground up building of all resources


# resource "aws_s3_bucket" "goose_static_site" {
#   bucket = var.bucket_name

#   tags = {
#     Name = "Goose Social TerraForm"
#     Environment = "VPC Terraform Testing"
#   }
# }

# resource "aws_vpc_endpoint" "s3" {
#   vpc_id = aws_vpc.main.id
#   service_name = "com.amazonaws.us-east-2.s3"
# }

# resource "aws_vpc_endpoint_route_table_association" "route_table_association" {
#   route_table_id = aws_route_table.Goose_VPC_route_table.id
#   vpc_endpoint_id = aws_vpc_endpoint.s3.id
# }

# resource "aws_s3_bucket_acl" "goose_static_acl" {
#   bucket = aws_s3_bucket.goose_static_site.id
#   acl    = "private"
# }

# resource "aws_default_subnet" "default_az1" {
#   availability_zone = "us-east-2a"

#   tags = {
#     Name = "Default subnet for us-east-2a"
#   }
# }

# resource "aws_s3_access_point" "access_point_s3_vpc" {
#   bucket = aws_s3_bucket.goose_static_site.id
#   name   = "AccessPointVPC"
#   vpc_configuration {
#     vpc_id = aws_vpc.main.id
#   }
# }

data "aws_canonical_user_id" "current" {}

# resource "aws_s3_bucket_acl" "goose_static_acl" {
#   bucket = aws_s3_bucket.goose_static_site.id
#   access_control_policy {
#     grant {
#       grantee {
#         type = "Group"
#         uri  = "http://acs.amazonaws.com/groups/global/AllUsers"
#       }
#       permission = "READ_ACP"
#     }
#     owner {
#       id = data.aws_canonical_user_id.current.id
#     }
#   }
# }

# resource "aws_s3_bucket_policy" "static_site_policy" {
#   bucket = aws_s3_bucket.goose_static_site.id

#   policy = jsonencode({
#     Version = "2008-10-17"
#     Statement = [{
#       Effect = "Allow"
#       Action = "s3:*"
#       Principal = {
#         AWS = "*"
#       }
#       Resource = "arn:aws:s3:::goose-social-terraform/*"
#     }]
#   })
# }

# resource "aws_s3_bucket_website_configuration" "static_site_configuration" {
#   bucket = aws_s3_bucket.goose_static_site.id

#   index_document {
#     suffix = "index.html"
#   }
# }

# resource "aws_vpc_endpoint" "vpc_s3_endpoint" {
#   service_name = "com.amazonaws.us-east-1.s3"
#   vpc_id       = aws_vpc.main.id
# }

# resource "aws_vpc_endpoint_policy" "vpc_s3_endpoint_policy" {
#   vpc_endpoint_id = aws_vpc_endpoint.vpc_s3_endpoint.id
#   policy = jsonencode({
#     "Version" : "2012-10-17",
#     "Statement" : [
#       {
#         "Sid" : "AllowAll",
#         "Effect" : "Allow",
#         "Principal" : {
#           "AWS" : "*"
#         },
#         "Action" : [
#           "s3:*"
#         ],
#         "Resource" : "arn:aws:s3:::goose-social-terraform/*"
#       }
#     ]
#   })
# }