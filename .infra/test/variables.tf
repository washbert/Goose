variable "environment" {
  type        = string
  description = "What environment are we running on?"
}

variable "bucket_name" {
  type        = string
  description = "The name of the bucket without the www. prefix. Normally domain_name."
  default     = "gooser-social"
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
