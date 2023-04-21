output "instance_id" {
  description = "ID of the EC2 instance"
  value       = aws_instance.goose_ec2.id
}

output "instance_public_ip" {
  description = "Public IP address of the EC2 instance"
  value       = aws_instance.goose_ec2.public_ip
}
output "Elastic_IP" {
  description = "IP address of Elastic IP"
  value       = aws_eip.bar.public_ip
}

output "VPC_CIDR_Block" {
  description = "CIDR Block for Created VPC"
  value       = aws_vpc.goose_vpc.cidr_block
}



