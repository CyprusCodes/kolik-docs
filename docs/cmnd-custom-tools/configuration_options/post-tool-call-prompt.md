---
id: post-tool-call
title: Post Tool Call
description: How to control LLM behavior after a tool call using `postCallPrompt`.
sidebar_position: 1
---

# Post Tool Call

In AI-driven workflows, the interaction between tools and the language model often requires contextual follow-up. Sometimes a tool succeeds, other times it fails — and you may want the LLM to react differently depending on the result.

To support this, CMND.ai introduces **Post-Tool Call Prompting**, a technique that allows you to dynamically guide the LLM’s response based on the outcome of a tool execution.

---

## What It Does

Each tool can define a `postCallPrompt`, which is injected into the system prompt **after the tool completes** but **before the LLM responds to the user**.

This gives you a chance to influence the assistant’s next message — based on success, failure, or specific outputs from the tool.

---

## Why Use It?

- Adjust the assistant’s response based on real-world tool results
- Handle success/failure cases with more clarity
- Improve the flow of conversations without requiring custom post-processing

---

## Example

Let’s say you have a tool for handling user login. You want the assistant to prompt for retry on failure, or continue normally on success.

```python title="Tool with postCallPrompt"
{
    "name": "user_login",
    "description": "Login tool that takes a username and password, and returns an access token",
    "parameters": custom_json_schema(UserLoginSchema),
    "runCmd": user_login,
    "isDangerous": False,
    "functionType": "backend",
    "isLongRunningTool": False,
    "postCallPrompt": "If the login tool output is failure, ask the user to try again. If successful, continue the conversation."
}
```

This prompt is merged with the system prompt and provides real-time context to the LLM, without needing any manual handling on your backend.

---

:::tip Best Practices

- Be **clear and specific** in your `postCallPrompt`. The LLM needs precise instructions to behave consistently.
- Use this feature for decision points in your flow — such as login, verification, search results, or validations.
- Avoid duplicating logic that’s already enforced in your backend — use this for communication flow only.
  :::

---

## Summary

- `postCallPrompt` lets you guide the LLM’s response after a tool call.
- It supports smoother user experiences by reacting intelligently to tool outcomes.
- Use it in any tool where the result should affect what the assistant says next.

This is especially powerful in assistant flows that involve real-time actions — such as authentication, transactions, or search — where context and control really matter.
