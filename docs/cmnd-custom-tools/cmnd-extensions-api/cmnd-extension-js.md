---
id: custom-tool-js
title: Build a Custom Tool – JavaScript
description: How to build a CMND Custom Tool using JavaScript
sidebar_position: 1
---

# Build a Custom Tool – JavaScript

Custom Tools allow you to connect your own backend logic to CMND.ai and make it callable inside assistant conversations.

:::note
This guide walks through how to create and expose your own tool using JavaScript via a Node.js server, and make it available to CMND through a public endpoint.
:::

---

## Prerequisites

- Node.js and npm installed
- A CMND.ai account and chatbot
- Ngrok or any alternative tunneling tool

---

## Getting Started

1. **Clone the sample extensions repo:**

```bash title="Terminal"
git clone https://github.com/CyprusCodes/cmnd-extension-sample-nodejs.git
cd cmnd-extension-sample-nodejs
```

2. **Install dependencies:**

```bash title="Terminal"
npm install
```

3. **Set up your environment:**

Create a `.env` file at the root of the project and add any necessary values, such as:

```
PORT=8000
API_KEY=your_api_key_here
```

4. **Start the server:**

```bash title="Terminal"
npm start
```

Once running, your tool server will be available locally. You’ll need to make it publicly accessible to use it in CMND.

---

## Define Your Tool

All tools are defined in the `tools.js` file. Here’s how to create one:

- Use `yup` to define the input schema
- Implement the tool's logic in an async function
- Register the tool using a configuration object

```js title="tools.js" showLineNumbers
const axios = require("axios");
const yup = require("yup");
const yupToJsonSchema = require("./yupToJsonSchema");

const WeatherSchema = yup.object({
  city: yup.string().required(),
});

const WeatherTool = {
  name: "weather_from_location",
  description: "Fetches current weather for a given city",
  category: "weather",
  subcategory: "forecast",
  functionType: "backend",
  dangerous: false,
  associatedCommands: [],
  prerequisites: [],
  parameters: yupToJsonSchema(WeatherSchema),
  rerun: true,
  rerunWithDifferentParameters: true,
  runCmd: async ({ city }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`
      );
      return JSON.stringify(response.data);
    } catch (err) {
      return "Error trying to execute the tool";
    }
  },
};

const tools = [WeatherTool];
module.exports = tools;
```

> After adding a new tool, restart the server to apply changes.

---

## Make It Public with Ngrok

To allow CMND to call your local server, expose it using Ngrok:

```bash
ngrok http 8000
```

> Ensure the port in your `.env` matches the port you’re exposing.

The public HTTPS URL returned by Ngrok is what you’ll register in CMND when adding the tool.

---

## API Keys

If your tool uses third-party APIs, store sensitive keys in your `.env` file and load them using `process.env.KEY_NAME`.

---

## What’s Next?

- Add your public tool URL in the CMND dashboard
- Use the tool in assistant conversations
- Chain or combine it with other tools as needed

```

```
