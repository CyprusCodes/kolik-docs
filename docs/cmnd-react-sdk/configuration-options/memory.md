---
id: memory
title: Memory Management
description: Learn how to store and manage conversation context in your CMND chatbot.
sidebar_position: 3
---

# Memory Management

## Introduction

The CMND React SDK provides memory management capabilities that allow you to store and manage conversation context through the `initialMemory` prop and memory management functions.

:::note
This guide contains information on how to initialize memory values, update conversation memory during runtime, and remove specific memory keys from active conversations.
:::

## Memory Features

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs groupId="memory-operations">
  <TabItem value="initial" label="Initial Memory Setup" default>
    <div className="card">
      <div className="card__header">
        <h3>Initializing Memory</h3>
      </div>
      <div className="card__body">
        <p>You can initialize the chat with predefined memory values using the <code>initialMemory</code> prop when setting up the ChatProvider:</p>

```typescript title="InitialMemorySetup.tsx" showLineNumbers
<ChatProvider
  baseUrl="<your-cmnd-api-base-url>"
  chatbotId={"<your-chatbot-id>"}
  organizationId={"<your-organization-id>"}
  initialMemory={{
    accessToken: "your-access-token",
    date: "2022-01-01",
    // Add any other initial memory key-value pairs
  }}
/>
```

      </div>
    </div>

  </TabItem>

  <TabItem value="set" label="Set Memory">
    <div className="card">
      <div className="card__header">
        <h3>Setting Memory Values</h3>
      </div>
      <div className="card__body">
        <p>The <code>setCurrentConversationMemory</code> function allows you to set or update memory values during an active conversation:</p>

```typescript title="SetMemoryExample.tsx" showLineNumbers
import { setCurrentConversationMemory } from "@cmnd-ai/chatbot-react";

// Set single or multiple memory values
await setCurrentConversationMemory({
  name: "John Doe",
  email: "jon@doe.com",
  phone: "1234567890",
});
```

:::warning
`setCurrentConversationMemory` is only available during an active chat thread.
:::

      </div>
    </div>

  </TabItem>

  <TabItem value="delete" label="Delete Memory">
    <div className="card">
      <div className="card__header">
        <h3>Deleting Memory Values</h3>
      </div>
      <div className="card__body">
        <p>The <code>deleteCurrentConversationMemory</code> function enables you to remove specific memory keys from the current conversation:</p>

```typescript title="DeleteMemoryExample.tsx" showLineNumbers
import { deleteCurrentConversationMemory } from "@cmnd-ai/chatbot-react";

// Delete a specific memory key
await deleteCurrentConversationMemory("name");
```

:::warning
<code>deleteCurrentConversationMemory</code> is only available during an active chat thread.
:::

      </div>
    </div>

  </TabItem>
</Tabs>

## Usage Example

<div className="card">
  <div className="card__header">
    <h3>Complete Implementation Example</h3>
  </div>
  <div className="card__body">
    <p>Here's a complete example showing how to implement memory management in your chat application:</p>

```typescript title="ChatApp.tsx" showLineNumbers
import { ChatProvider } from "@cmnd-ai/chatbot-react";
import {
  setCurrentConversationMemory,
  deleteCurrentConversationMemory,
} from "@cmnd-ai/chatbot-react";

function ChatApp() {
  const handleSetMemory = async () => {
    try {
      const response = await setCurrentConversationMemory({
        name: "John Doe",
        email: "jon@doe.com",
        phone: "1234567890",
      });
      console.log("Memory Set:", response);
    } catch (error) {
      console.error("Error setting memory:", error);
    }
  };

  const handleDeleteMemory = async () => {
    try {
      const response = await deleteCurrentConversationMemory("name");
      console.log("Memory Deleted:", response);
    } catch (error) {
      console.error("Error deleting memory:", error);
    }
  };

  return (
    <>
      <ChatProvider
        baseUrl="<your-cmnd-api-base-url>"
        chatbotId={"<your-chatbot-id>"}
        organizationId={"<your-organization-id>"}
        initialMemory={{
          accessToken: "your-access-token",
          date: "2022-01-01",
        }}
      />
      <Button onClick={handleSetMemory}>Set Memory</Button>
      <Button onClick={handleDeleteMemory}>Delete Memory</Button>
    </>
  );
}
```

  </div>
</div>

## Best Practices

<Tabs groupId="best-practices">
  <TabItem value="security" label="Security Considerations" default>
    <div className="card">
      <div className="card__body">
        <ul>
          <li>Don't store anything sensitive in memory, as it's not meant for secure storage.</li>
          <li>Regularly clean up unnecessary memory entries.</li>
        </ul>
      </div>
    </div>
  </TabItem>

  <TabItem value="performance" label="Performance Optimization">
    <div className="card">
      <div className="card__body">
        <ul>
          <li>Only store essential information in memory.</li>
          <li>Clear outdated memory values when no longer needed.</li>
          <li>Avoid storing large data structures in memory.</li>
        </ul>
      </div>
    </div>
  </TabItem>

  <TabItem value="error" label="Error Handling">
    <div className="card">
      <div className="card__body">
        <ul>
          <li>Implement proper error handling for memory operations.</li>
          <li>Validate memory values before storage.</li>
          <li>Provide feedback for failed memory operations.</li>
        </ul>
      </div>
    </div>
  </TabItem>
</Tabs>

:::tip Important Considerations

- Memory values persist only for the current conversation session.
- Memory operations are asynchronous and return Promises.
- Ensure proper error handling for memory management functions.
- Memory keys should be strings and values should be serializable.  
  :::

## Advanced Usage

<details>
<summary><b>Memory Persistence Strategies</b></summary>
<div>

When building applications that require memory persistence across sessions, consider implementing a custom storage solution:

```typescript title="PersistentMemory.tsx" showLineNumbers
import { useEffect } from "react";
import {
  ChatProvider,
  setCurrentConversationMemory,
} from "@cmnd-ai/chatbot-react";

function PersistentChatApp() {
  // Load saved memory from localStorage when component mounts
  useEffect(() => {
    const loadSavedMemory = async () => {
      try {
        const savedMemory = localStorage.getItem("chatMemory");

        if (savedMemory) {
          const parsedMemory = JSON.parse(savedMemory);
          await setCurrentConversationMemory(parsedMemory);
          console.log("Restored memory from local storage");
        }
      } catch (error) {
        console.error("Error restoring memory:", error);
      }
    };

    // Small delay to ensure chat thread is established
    const timer = setTimeout(loadSavedMemory, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Save memory handler example
  const saveMemoryToStorage = async (memoryObject) => {
    try {
      // First update the conversation memory
      await setCurrentConversationMemory(memoryObject);

      // Then save to localStorage
      localStorage.setItem("chatMemory", JSON.stringify(memoryObject));
      console.log("Memory saved to local storage");
    } catch (error) {
      console.error("Error saving memory:", error);
    }
  };

  return (
    <>
      <ChatProvider
        baseUrl="<your-cmnd-api-base-url>"
        chatbotId={"<your-chatbot-id>"}
        organizationId={"<your-organization-id>"}
        initialMemory={{
          // Initial values that will be overridden by localStorage if available
          lastVisit: new Date().toISOString(),
        }}
      />
      {/* Application UI */}
    </>
  );
}
```

This approach allows you to maintain conversation context across browser sessions or page refreshes.

</div>
</details>
