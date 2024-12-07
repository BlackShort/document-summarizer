from pydantic import BaseModel

class DocumentRequest(BaseModel):
    content: str


