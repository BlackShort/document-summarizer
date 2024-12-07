from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from app.controllers.prediction import PredictionPipeline

app = FastAPI()

# Add CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

# Mount static files and templates
app.mount("/client", StaticFiles(directory="client"), name="client")

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    # Serve the index.html from the client folder directly
    with open("client/index.html", "r") as f:
        html_content = f.read()
    return HTMLResponse(content=html_content)

@app.post("/predict")
async def predict_route(data: dict):
    try:
        text = data["text"]
        obj = PredictionPipeline()
        summary = obj.predict(text)
        return {"summary": summary}
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8080)
