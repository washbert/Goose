variable "environment" {
  type        = string
  description = "What environment are we running on?"
}

variable "bucket_name" {
  type        = string
  description = "The name of the bucket without the www. prefix. Normally domain_name."
  default     = "goose-social-terraform"
}

variable "project" {
  type = string
}

variable "static_path" {
  type = string
}

variable "region" {
  type = string
}

variable "group_setter" {
    type = string
    description = "The Group that the policy will be open public to"
    default = "http://acs.amazonaws.com/groups/global/AllUsers"
}