---
id: overview
title: Overview & Capabilities
description: What is it and what does it offer?
sidebar_position: 1
---

# Custom Tools

Custom Tools let you extend the power of CMND.ai by connecting LLMs to your own logic, services, and infrastructure.

They allow you to expose internal functions — whether it’s querying a database, triggering backend workflows, or calling private APIs — and make them accessible within natural conversations powered by LLMs.

This means your assistants can do more than talk — they can act.

---

## Ways to Create Custom Tools

You can build and connect custom tools in CMND.ai in two ways:

- [**CMND Extensions API:**](https://docs.cmnd.ai/docs/category/cmnd-extensions-api)
  Develop your tool externally using your own infrastructure (e.g., FastAPI, Flask, Node.js), then connect it to CMND via a secure public endpoint.

- [**CMND Extensions Studio:**](https://docs.cmnd.ai/docs/cmnd-custom-tools/extensions-studio)
  Create and deploy your tool entirely within CMND’s web platform — no separate hosting needed. Ideal for quick setups, prototypes, or simpler tools.

Both options give you full flexibility over your tool’s behavior, schema, and integration.

---

## What You Can Do with Custom Tools

- **Connect LLMs to your backend logic**  
  Wrap any Python or JavaScript function and expose it as a callable tool inside CMND.

- **Build task-specific utilities**  
  From checking inventory to performing calculations or generating content, tools can be scoped to exactly what your assistant needs.

- **Access private or dynamic data**  
  Pull real-time information from your internal systems that isn’t available to the LLM by default.

- **Maintain control over execution**  
  Tools run in your environment, so you can manage permissions, validation, and responses as needed.

- **Make assistants actionable**  
  Go beyond chat — enable your assistant to trigger workflows, run queries, or fetch structured responses in real-time.

---

## Example Use Cases

- A customer support assistant that queries recent orders via a backend API
- A product advisor that fetches real-time pricing from your database
- A data assistant that performs filtered SQL lookups based on user prompts
- A creative tool that wraps your own prompt engineering logic and templates

---

Custom Tools are a powerful way to bring domain-specific intelligence and capability into your CMND-powered assistant — securely, flexibly, and in the language of your own codebase.
