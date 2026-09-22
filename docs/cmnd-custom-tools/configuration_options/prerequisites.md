---
id: prerequisites
title: Prerequisites
description: How to enforce execution order between tools in CMND using the `prerequisites` attribute.
sidebar_position: 4
---

# Prerequisites

In some workflows, tools depend on the output of others — and running them in the wrong order could break logic or result in incomplete behavior. To handle this, CMND supports a `prerequisites` attribute in the tool configuration.

The `prerequisites` array defines a list of tool names that **must be executed first** before the current tool becomes available.

This helps enforce flow control, maintain context, and ensure all required steps are completed before moving forward in a conversation.

---

## How It Works

- If any of the tools listed in the `prerequisites` array have not been executed, the current tool will not be shown or called.
- This logic ensures that tools only appear when their required context is ready.

### Example

```python title="Tool Config"
{
    "name": "echo_username",
    "description": "Echoes the username saved in memory",
    "parameters": custom_json_schema(EchoUsernameSchema),
    "runCmd": echo_username,
    "isDangerous": False,
    "functionType": "backend",
    "isLongRunningTool": False,
    "prerequisites": ["product_finder", "put_username"]
}
```

In this configuration, the tool `echo_username` is only available after both `product_finder` and `put_username` have been executed.

---

## Key Benefits

- **Execution Order Control**  
  Ensure that pre-conditions or data are set before sensitive tools are exposed.

- **Cleaner UX**  
  Prevent users from accessing tools that would otherwise result in incomplete or error-prone flows.

- **Safety and Predictability**  
  Avoids misuse of tools that rely on prior actions or memory state.

---

:::tip Best Practices

- Use `prerequisites` for tools that depend on other tools’ side effects — like storing values in memory, validating input, or loading data.
- Keep prerequisite lists minimal and logical to avoid blocking tool access unnecessarily.
- Combine with `memory` and `postCallPrompt` to build clean, reactive assistant flows.
  :::

---

## Summary

The `prerequisites` attribute adds logical structure and flow control to your assistant tools in CMND. It ensures tools are only available when their dependencies have been satisfied, making your assistant behavior more intentional, robust, and context-aware.
