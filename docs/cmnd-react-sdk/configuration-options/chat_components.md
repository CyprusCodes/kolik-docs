---
id: chat-components
title: Chat Components
description: Customize UI components in the CMND React SDK to match your application's theme and design system.
sidebar_position: 1
---

# Chat Components

## Introduction

The CMND React SDK provides customizable UI components that allow you to tailor your conversation view's appearance to match your application's theme. This feature is particularly valuable when integrating with existing UI libraries or maintaining consistent design systems.

:::note
This guide contains information on how to customize input fields, send buttons, and other UI elements of the CMND chatbot in order to create a seamless integration with your application.
:::

## Available Components

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The SDK supports customization of the following components:

<Tabs groupId="components">
  <TabItem value="inputfield" label="InputField" default>

## InputField Component

The `InputField` component allows you to customize the appearance and behavior of the message input area.

<div className="card">
  <div className="card__header">
    <h3>Type Definition</h3>
  </div>
  <div className="card__body">

```typescript title="TypeScript" showLineNumbers
interface InputFieldProps {
  /** Current input value */
  input: string;

  /** Function to update input value */
  setInput: (input: string) => void;

  /** Boolean indicating if message can be sent */
  canSendMessage: boolean;

  /** Function to handle message sending */
  handleSendClick: () => void;
}
```

  </div>
</div>

### Usage Example

```typescript title="TypeScript" showLineNumbers
// Usage example
import { InputFieldProps } from "@cmnd-ai/chatbot-react";

const CustomInputField = ({
  input,
  setInput,
  canSendMessage,
  handleSendClick,
}: InputFieldProps) => {
  return (
    <div className="custom-input-container">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
    </div>
  );
};
```

  </TabItem>
  <TabItem value="sendbutton" label="SendButton">

## SendButton Component

The `SendButton` component allows you to customize the appearance and behavior of the message send button.

<div className="card">
  <div className="card__header">
    <h3>Type Definition</h3>
  </div>
  <div className="card__body">

```typescript title="TypeScript" showLineNumbers
interface SendButtonProps {
  /** Function to handle message sending */
  handleSendClick: () => void;

  /** Boolean indicating if message can be sent */
  canSendMessage: boolean;
}
```

  </div>
</div>

### Usage Example

```typescript title="TypeScript" showLineNumbers
// Usage example
import { SendButtonProps } from "@cmnd-ai/chatbot-react";

const CustomSendButton = ({
  handleSendClick,
  canSendMessage,
}: SendButtonProps) => {
  return (
    <button
      onClick={handleSendClick}
      disabled={!canSendMessage}
      className="custom-send-button"
    >
      Send
    </button>
  );
};
```

  </TabItem>
</Tabs>

## Implementation

To use custom components, pass them as props when initializing the chat component:

```typescript title="TypeScript" showLineNumbers
import { ChatProvider, CmndChatBot } from "@cmnd-ai/chatbot-react";

function App() {
  return (
    <ChatProvider
      baseUrl="<your-cmnd-api-base-url>"
      chatbotId="<your-chatbot-id>"
      organizationId="<your-organization-id>"
      Components={{
        InputField: CustomInputField,
        SendButton: CustomSendButton,
      }}
    >
      <CmndChatBot />
    </ChatProvider>
  );
}
```

## Component States

<div className="admonition admonition-info">
  <div className="admonition-heading">
    <h5>Component States</h5>
  </div>
  <div className="admonition-content">
    <p>Each component should handle the following states to provide a complete user experience:</p>
  </div>
</div>

<div className="table-container">
  <table>
    <thead>
      <tr>
        <th>State</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Default</td>
        <td>Normal appearance of the component</td>
      </tr>
      <tr>
        <td>Hover</td>
        <td>Visual feedback when user hovers over component</td>
      </tr>
      <tr>
        <td>Active/Focus</td>
        <td>Visual feedback when component is active or focused</td>
      </tr>
      <tr>
        <td>Disabled</td>
        <td>Appearance when interaction is not allowed</td>
      </tr>
      <tr>
        <td>Error</td>
        <td>Visual feedback for error conditions</td>
      </tr>
      <tr>
        <td>Loading</td>
        <td>Visual indicator for async operations (if applicable)</td>
      </tr>
    </tbody>
  </table>
</div>

## Best Practices

<Tabs groupId="best-practices">
  <TabItem value="accessibility" label="Accessibility" default>
    <div className="card">
      <div className="card__body">
        <ul>
          <li>Ensure custom components maintain ARIA attributes and keyboard navigation</li>
          <li>Provide appropriate visual feedback for different states</li>
          <li>Use sufficient color contrast for text and interactive elements</li>
        </ul>
      </div>
    </div>
  </TabItem>
  <TabItem value="error" label="Error Handling">
    <div className="card">
      <div className="card__body">
        <ul>
          <li>Implement proper error states in custom components</li>
          <li>Handle edge cases like empty messages or network issues</li>
          <li>Provide clear feedback to users when errors occur</li>
        </ul>
      </div>
    </div>
  </TabItem>
  <TabItem value="responsive" label="Responsive Design">
    <div className="card">
      <div className="card__body">
        <ul>
          <li>Make components responsive to different screen sizes</li>
          <li>Consider mobile-first design principles</li>
          <li>Test on various devices and viewport sizes</li>
        </ul>
      </div>
    </div>
  </TabItem>
</Tabs>

:::info TypeScript Integration
The SDK provides full TypeScript support for all component props and interfaces. This ensures type safety and better developer experience when implementing custom components.
:::

## Implementation Examples

Below are examples of how to implement custom components using popular UI frameworks:

<Tabs groupId="ui-frameworks">
  <TabItem value="material" label="Material-UI" default>

```typescript title="TypeScript" showLineNumbers
import {
  ChatProvider,
  CmndChatBot,
  InputFieldProps,
  SendButtonProps,
} from "@cmnd-ai/chatbot-react";
import { TextField, Button } from "@mui/material";

const MaterialInputField = ({
  input,
  setInput,
  canSendMessage,
}: InputFieldProps) => (
  <TextField
    value={input}
    onChange={(e) => setInput(e.target.value)}
    variant="outlined"
    fullWidth
    disabled={!canSendMessage}
  />
);

const MaterialSendButton = ({
  handleSendClick,
  canSendMessage,
}: SendButtonProps) => (
  <Button
    onClick={handleSendClick}
    disabled={!canSendMessage}
    variant="contained"
    color="primary"
  >
    Send
  </Button>
);

function App() {
  return (
    <ChatProvider
      baseUrl="<your-cmnd-api-base-url>"
      chatbotId="<your-chatbot-id>"
      organizationId="<your-organization-id>"
      Components={{
        InputField: MaterialInputField,
        SendButton: MaterialSendButton,
      }}
    >
      <CmndChatBot />
    </ChatProvider>
  );
}
```

  </TabItem>
  <TabItem value="tailwind" label="Tailwind CSS">

```typescript title="TypeScript" showLineNumbers
import {
  ChatProvider,
  CmndChatBot,
  InputFieldProps,
  SendButtonProps,
} from "@cmnd-ai/chatbot-react";

const TailwindInputField = ({
  input,
  setInput,
  canSendMessage,
}: InputFieldProps) => (
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    disabled={!canSendMessage}
  />
);

const TailwindSendButton = ({
  handleSendClick,
  canSendMessage,
}: SendButtonProps) => (
  <button
    onClick={handleSendClick}
    disabled={!canSendMessage}
    className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400"
  >
    Send
  </button>
);

function App() {
  return (
    <ChatProvider
      baseUrl="<your-cmnd-api-base-url>"
      chatbotId="<your-chatbot-id>"
      organizationId="<your-organization-id>"
      Components={{
        InputField: TailwindInputField,
        SendButton: TailwindSendButton,
      }}
    >
      <CmndChatBot />
    </ChatProvider>
  );
}
```

  </TabItem>
</Tabs>

:::tip
When implementing custom components, consider creating a theme file that defines consistent styles across all your components to maintain visual coherence throughout your application.
:::
