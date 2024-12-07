import boto3
import os

def setup_s3(bucket_name):
    s3 = boto3.resource('s3')
    if not s3.Bucket(bucket_name) in s3.buckets.all():
        s3.create_bucket(Bucket=bucket_name)
        print(f"Bucket '{bucket_name}' created.")
    else:
        print(f"Bucket '{bucket_name}' already exists.")

if __name__ == "__main__":
    bucket_name = os.getenv("AWS_BUCKET_NAME", "my-summarizer-bucket")
    setup_s3(bucket_name)
