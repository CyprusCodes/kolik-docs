---
id: memory
title: Memory Object
description: How to use memory objects to pass data between tools and enhance assistant behavior.
sidebar_position: 3
---

# Memory Object

Memory objects allow you to pass and persist information across multiple tools within a single conversation. This is useful for carrying large context (like datasets or structured responses) without inflating token usage or repeating logic.

---

## What Is It For?

Use memory when:

- You want one tool to pass structured data to another
- You want to store intermediate results (e.g., a dataset or summary)
- You want to insert dynamic values (like a name or date) into a chatbot prompt

---

## Using Memory in Tools

To use memory in your tool, add it as a parameter and return it in the response. Here’s an example of fetching and storing the Titanic dataset:

```python title="Python" showLineNumbers
def fetch_titanic_data(memory: dict):
    """
    Fetch Titanic dataset from GitHub CSV.
    """
    github_url = "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv"
    response = requests.get(github_url)
    df = pd.read_csv(io.StringIO(response.text))

    memory["titanic_dataframe"] = df

    return {
        "responseString": f"Successfully fetched {len(df)} records",
        "memory": memory
    }
```

Later in the same conversation, another tool can use the stored data:

```python title="Python"
def count_survivors(memory: dict):
    if "titanic_dataframe" not in memory:
        return {
            "responseString": "No Titanic data in memory. Fetch data first.",
            "memory": memory
        }

    df = memory["titanic_dataframe"]
    survivors_count = len(df[df['Survived'] == 1])
    total_passengers = len(df)

    return {
        "Number of total survivors": survivors_count,
        "Total number of passengers": total_passengers
    }
```

---

## Selective Data Retrieval

You can extract only the relevant parts of a dataset and send them to the LLM:

```python title="Python" showLineNumbers
def get_passenger_details(memory: dict):
    if "titanic_dataframe" not in memory:
        return {
            "responseString": "Please load the dataset first",
            "memory": memory
        }

    fares_info = memory["titanic_dataframe"][['Name', 'Sex', 'Age', 'Fare']]
    return str(fares_info)
```

---

## Using Memory in System Prompts (with EJS)

You can also use values from memory directly inside the assistant’s system prompt using **EJS templating** (Embedded JavaScript). This makes your assistants more dynamic and personalized.

### Example: Greet the User by Name

```txt
You are a helpful assistant responsible for recommending suitable supplements for bodybuilding.
When the user starts a conversation, greet them by saying:
"Hi, <%= memory.name %>!" and then provide a list of recommended supplements.
```

### Example: Include Email and Date

```txt
You are a helpful assistant designed to help users write and send emails.
When the user asks you to draft an email, use their email address <%= memory.email %>
and include the current date: <%= new Date().toDateString() %>
```

EJS expressions support inline JavaScript, which gives you flexibility to format dates, use conditional logic, or build richer prompts.

For full syntax options, refer to the [EJS Documentation](https://ejs.co/).

---

:::tip Best Practices

- Always include `"memory"` in the tool’s parameters if it needs to read or write to memory.
- Return the updated memory object in your tool’s response.
- Keep memory clean and minimal — avoid storing unnecessary or overly large data.
- Use memory to make assistants smarter across multi-step workflows.
  :::

---

## Summary

- Memory helps tools share context during a conversation.
- You can persist and retrieve structured data across tools.
- Memory values can be injected into prompts using EJS for personalized, dynamic behavior.
- It's a key part of building multi-step, stateful assistants in CMND.ai.
