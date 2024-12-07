from fastapi import Request, HTTPException

async def validate_request(request: Request):
    if not request.headers.get("Authorization"):
        raise HTTPException(status_code=401, detail="Unauthorized request")
