import boto3
import zipfile
import os

def deploy_lambda(function_name, zip_file, role_arn, handler):
    client = boto3.client('lambda')
    with open(zip_file, "rb") as f:
        zipped_code = f.read()

    response = client.create_function(
        FunctionName=function_name,
        Runtime='python3.9',
        Role=role_arn,
        Handler=handler,
        Code={'ZipFile': zipped_code},
    )
    print(f"Lambda function '{function_name}' deployed. Response: {response}")

if __name__ == "__main__":
    deploy_lambda(
        function_name="document_summarizer",
        zip_file="deployment_package.zip",
        role_arn=os.getenv("AWS_ROLE_ARN"),
        handler="app.main.lambda_handler"
    )
