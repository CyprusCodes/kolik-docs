---
id: custom-tool-python
title: Build a Custom Tool – Python
description: How to build a CMND Custom Tool in Python
sidebar_position: 2
---

# Build a Custom Tool – Python

Custom Tools allow you to connect your own backend logic to CMND.ai and make it callable inside assistant conversations.

:::note
This guide walks through how to create and expose your own tool using Python — using either FastAPI or Flask — and make it available to CMND through a simple server endpoint.
:::

---

## Prerequisites

- Python 3.8+
- A CMND.ai account and chatbot
- Ngrok or any other alternative (for public tunneling)

---

## Getting Started

1. **Clone and navigate into the sample extensions repo:**

```bash title="Terminal"
git clone https://github.com/CyprusCodes/cmnd-extension-sample-python.git
cd cmnd-extension-sample-python
```

2. **Install dependencies:**

```bash title="Terminal"
pip install -r requirements.txt
```

3. **Choose a framework:**  
   Navigate into either the `fastapi` or `flask` folder, depending on your preference.

---

## Define Your Tool

All tools live in the `tools.py` file. Here's how a tool is defined:

- Use **Pydantic** to declare your input schema
- Write the core logic of your tool
- Register it by returning a config dictionary with metadata

```python title="tools.py" showLineNumbers
from pydantic import BaseModel, Field
import httpx
import os

class WeatherCitySchema(BaseModel):
    city: str = Field(..., title="City", description="City name required")

async def weather_from_location(city: str):
    api_key = os.getenv('WEATHER_API_KEY')
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        return response.json()

tool = [
    {
        "name": "weather_from_location",
        "description": "Gets the weather details from a given city name",
        "parameters": WeatherCitySchema.schema(),
        "runCmd": weather_from_location,
        "isDangerous": False,
        "functionType": "backend",
        "isLongRunningTool": False,
        "rerun": True,
        "rerunWithDifferentParameters": True
    }
]
```

---

## Run the Tool Server

Run the API locally:

```bash
python3 main.py
```

---

## Make It Public with Ngrok

To allow CMND to call your local server, expose it using Ngrok:

1. [Download and set up Ngrok](https://ngrok.com/docs/getting-started)
2. Start your app as normal:

```bash
python3 main.py
```

3. In a separate terminal, run:

```bash
ngrok http 8000
```

> Make sure the port used in `main.py` matches the one you're exposing via Ngrok.

Once live, you'll get a public HTTPS URL. This is the endpoint you’ll register with CMND when adding the tool to a chatbot.

---

## 🔐 API Keys

If your tool uses third-party services (like weather APIs), store secrets in a `.env` file and load them via `os.getenv()`.

---

## What’s Next?

- Add your public tool URL in the CMND dashboard
- Use the tool in conversations or assistants
