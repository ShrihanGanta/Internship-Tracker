
from fastapi import FastAPI

app = FastAPI(
    title="InternTrack API",
    description="Backend API for tracking internship applications",
    version="1.0.0"
)

@app.get("/")
def home():
    return {"message": "InternTrack API is running!"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}
