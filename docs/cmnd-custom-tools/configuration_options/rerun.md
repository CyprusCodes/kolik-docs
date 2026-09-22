---
sidebar_position: 2
---

# Rerun 

In CMND.ai, where you can create custom functions to interact with the language model, the rerun attribute plays a crucial role in determining the availability of these functions after their initial execution. The rerun attribute allows developers to control whether a function remains available for repeated use or is removed from the list of available functions after it has been invoked once, or even allowing the tool to rerun but only with different parameters.

The `rerun` attribute is a flag that can be set to:

    1. allowed: When the `rerun` attribute is set to "allowed", the function is permitted to rerun without any restrictions.

    2. disabled: When the `rerun` attribute is set to "disabled", the function will not be allowed to rerun, making it a one-time use function.

    3. allowedWithDifferentParameters: When the `rerun` attribute is set to "allowedWithDifferentParameters", the function will not be allowed to rerun if the same parameter was used to run the function before. However, the function will be allowed to rerun if different parameters are used.



Consider the following function configuration for `echo_username`:

```python
{
    "name": "echo_username",
    "description": "echos the username saved in the memory",
    "parameters": custom_json_schema(EchoUsernameSchema),
    "runCmd": echo_username,
    "isDangerous": False,
    "functionType": "backend",
    "isLongRunningTool": False,
    "rerun": "allowed"
}
```

- In this example, `rerun`: "allowed" indicates that the echo_username function will always be available for execution. Users can invoke this function multiple times as needed.

- If the `rerun` attribute were set to "disabled", the echo_username function will not be available for execution after the first execution, preventing it from being called again.

If the `rerun` attribute is set to "allowedWithDifferentParameters", the echo_username function will be available for execution only if you attempt to rerun it with different parameters than those used in the initial run.

