---
id: memory
title: Memory Management
description: Store and manage persistent data across chat sessions
sidebar_position: 2
---

# Memory Management

## Overview

The CMND Memory system allows your chatbot to maintain contextual information and user data across multiple chat sessions. This enables personalized interactions and continuity in conversations even after the user refreshes the page or returns later.

## Working with Memory

CMND provides three primary methods for managing conversation memory:

| Method                            | Description                                     | Available When     |
| --------------------------------- | ----------------------------------------------- | ------------------ |
| `initialMemory`                   | Set initial memory during widget initialization | Before chat begins |
| `setCurrentConversationMemory`    | Update or add memory values                     | During active chat |
| `deleteCurrentConversationMemory` | Remove specific memory values                   | During active chat |

## Initial Memory

When initializing the CMND Chat widget, you can provide initial memory values using the `initialMemory` command. These values will be available immediately when the chat session begins.

```jsx title="JavaScript" showLineNumbers
window
  .cmndChat("init", {
    chatbot_id: "YOUR_CHATBOT_ID",
    organization_id: "YOUR_ORGANIZATION_ID",
    initialMemory: {
      email: "user@example.com",
      name: "John Doe",
      preferredLanguage: "English",
    },
  })
  .then((initOptions) => {
    console.log("Widget initialized with memory:", initOptions);
  })
  .catch((error) => {
    console.error("Initialization failed:", error);
  });
```

## Updating Memory During Conversation

Use `setCurrentConversationMemory` to store or update key-value pairs in memory. This method returns a Promise.

```jsx title="JavaScript" showLineNumbers
window
  .cmndChat("setCurrentConversationMemory", {
    memory: {
      favoriteColor: "blue",
      location: "New York",
      lastVisit: new Date().toISOString(),
    },
  })
  .then((result) => {
    console.log("Memory updated successfully:", result);
  })
  .catch((error) => {
    console.error("Failed to update memory:", error);
  });
```

:::warning Important
The `setCurrentConversationMemory` method only works when there is an active chat thread. Attempts to update memory before the user starts a conversation will fail.
:::

## Removing Memory Values

To delete specific memory keys from the current conversation, use `deleteCurrentConversationMemory`. This method returns a Promise:

```jsx title="JavaScript" showLineNumbers
window
  .cmndChat("deleteCurrentConversationMemory", {
    memoryKeyToDelete: "location",
  })
  .then((result) => {
    console.log("Memory value deleted:", result);
  })
  .catch((error) => {
    console.error("Failed to delete memory value:", error);
  });
```

To delete multiple keys at once, use an array:

```jsx title="JavaScript" showLineNumbers
window
  .cmndChat("deleteCurrentConversationMemory", {
    memoryKeyToDelete: ["location", "lastVisit"],
  })
  .then((result) => {
    console.log("Multiple memory values deleted:", result);
  })
  .catch((error) => {
    console.error("Failed to delete memory values:", error);
  });
```

:::warning Important
Like `setCurrentConversationMemory`, the delete method also requires an active chat session.
:::

## Sample Implememntation

Here's a practical example showing how to initialize the CMND Chat widget with user information, set and delete the information:

```html title="HTML" showLineNumbers
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CMND Chat with Initial Memory</title>
    <script src="https://embed.cmnd.ai/widget.js"></script>
  </head>
  <body>
    <script>
      // Initialize CMND widget with initial memory
      window
        .cmndChat("init", {
          chatbot_id: "YOUR_CHATBOT_ID",
          organization_id: "YOUR_ORGANIZATION_ID",
          initialMemory: {
            email: "user@example.com",
            name: "John Smith",
          },
        })
        .then((initOptions) => {
          console.log("Chat initialized with user data", initOptions);
        })
        .catch((err) => {
          console.error("Failed to initialize chat", err);
        });

      // Example of updating memory later
      function updateUserEmail() {
        window
          .cmndChat("setCurrentConversationMemory", {
            memory: {
              email: "newemail@example.com",
            },
          })
          .then(() => console.log("Email updated"))
          .catch((err) => console.error("Error updating email:", err));
      }

      // Example of removing user data
      function removeUserData() {
        window
          .cmndChat("deleteCurrentConversationMemory", {
            memoryKeyToDelete: "email",
          })
          .then(() => console.log("Email removed"))
          .catch((err) => console.error("Error removing email:", err));
      }
    </script>

    <!-- Optional: Buttons to demonstrate memory updates -->
    <button onclick="updateUserEmail()">Update Email</button>
    <button onclick="removeUserData()">Remove Email</button>
  </body>
</html>
```
