# Serverless Order Processing System

A full serverless web application built on AWS.

## Architecture
S3 → CloudFront → API Gateway → Lambda → DynamoDB → CloudWatch

## Features
- POST /orders
- GET /orders/{orderId}
- Browser-based frontend
- DynamoDB persistence
- CloudWatch alarms

## AWS Services Used
- S3
- CloudFront
- API Gateway (HTTP API)
- Lambda (Node.js ES modules)
- DynamoDB
- CloudWatch
- IAM
