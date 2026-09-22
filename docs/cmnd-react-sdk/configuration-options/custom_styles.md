---
id: custom-styles
title: Custom Styles
description: Customize the appearance of your CMND chatbot using the customStyles prop.
sidebar_position: 2
---

# Custom Styles

## Introduction

The CMND React SDK allows you to customize the CSS styles of the chat interface using the `customStyles` prop. This provides a flexible way to adjust the appearance of various chat elements without needing to create custom components.

<div className="card">
  <div className="card__header">
    <h3>Benefits of Custom Styles</h3>
  </div>
  <div className="card__body">
    <p>Using <code>customStyles</code> provides several advantages:</p>
    <ul>
      <li><strong>Ease of Use:</strong> No need to create separate components for styling.</li>
      <li><strong>Consistency:</strong> Ensures uniform design across different chat elements.</li>
      <li><strong>Flexibility:</strong> Quickly adjust styles to match different themes or branding guidelines.</li>
    </ul>
    <p>With <code>customStyles</code>, you can easily personalize the chat experience while keeping implementation simple and maintainable.</p>
  </div>
</div>

## Available Custom Styles

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The following style properties are available for customization:

<Tabs groupId="style-elements">
  <TabItem value="avatar" label="Avatar" default>
    <div className="card">
      <div className="card__header">
        <h3>Chat Avatar</h3>
      </div>
      <div className="card__body">
        <p><code>chatAvatarStyle</code>: Defines the appearance of the chatbot's avatar, such as size, shape, and border radius.</p>
        
```css title="Avatar Style Example" showLineNumbers
chatAvatarStyle: {
  borderRadius: "50%",
  width: "40px",
  height: "40px",
}
```
      </div>
    </div>
  </TabItem>
  <TabItem value="input" label="Input Field">
    <div className="card">
      <div className="card__header">
        <h3>Input Field</h3>
      </div>
      <div className="card__body">
        <p><code>inputStyle</code>: Controls the styling of the text input field, including padding, border, and background color.</p>
        
```css title="Input Style Example" showLineNumbers
inputStyle: {
  border: "1px solid #ccc",
  padding: "10px",
  borderRadius: "5px",
}
```
      </div>
    </div>
  </TabItem>
  <TabItem value="button" label="Send Button">
    <div className="card">
      <div className="card__header">
        <h3>Send Button</h3>
      </div>
      <div className="card__body">
        <p><code>sendButtonStyle</code>: Styles the send button, including its background color, text color, padding, and border radius.</p>
        
```css title="Send Button Style Example" showLineNumbers
sendButtonStyle: {
  backgroundColor: "#007bff",
  color: "white",
  padding: "10px 15px",
  borderRadius: "5px",
}
```
      </div>
    </div>
  </TabItem>
  <TabItem value="bubbles" label="Chat Bubbles">
    <div className="card">
      <div className="card__header">
        <h3>Chat Bubbles</h3>
      </div>
      <div className="card__body">
        <p><code>chatbubbleStyle</code>: Applies general styles to both user and bot chat bubbles.</p>
        <p><code>botChatbubbleStyle</code>: Specifically customizes the appearance of the chatbot's messages.</p>
        <p><code>userChatbubbleStyle</code>: Defines the look of user-sent messages.</p>
        
```css title="Chat Bubble Styles Example" showLineNumbers
chatbubbleStyle: {
  padding: "10px",
  borderRadius: "10px",
},
botChatbubbleStyle: {
  backgroundColor: "#e0e0e0",
},
userChatbubbleStyle: {
  backgroundColor: "#007bff",
  color: "white",
}
```
        :::warning
            `chatbubbleStyle` overrides both `botChatbubbleStyle` and `userChatbubbleStyle`
      :::
      </div>
    </div>
  </TabItem>
</Tabs>

## Usage

To apply custom styles, pass the `customStyles` prop when initializing the chat component:

```typescript title="App.tsx" showLineNumbers
import { ChatProvider } from "@cmnd-ai/chatbot-react";

function App() {
  return (
    <ChatProvider
      baseUrl="<your-cmnd-api-base-url>"
      chatbotId={"<your-chatbot-id>"}
      organizationId={"<your-organization-id>"}
      customStyles={{
        chatAvatarStyle: {
          borderRadius: "50%",
          width: "40px",
          height: "40px",
        },
        inputStyle: {
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
        },
        sendButtonStyle: {
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 15px",
          borderRadius: "5px",
        },
        chatbubbleStyle: {
          backgroundColor: "#f1f1f1",
          padding: "10px",
          borderRadius: "10px",
        },
        botChatbubbleStyle: {
          backgroundColor: "#e0e0e0",
        },
        userChatbubbleStyle: {
          backgroundColor: "#007bff",
          color: "white",
        },
      }}
    />
  );
}
```

:::tip Best Practices

- Accessibility: Use meaningful color contrasts for better readability.
- Readability: Maintain sufficient padding and margins for comfortable reading.
- Responsiveness: Ensure styles are responsive for different screen sizes.
  :::

## Interactive Style Editor

<details>
<summary><b>Try Different Style Combinations</b></summary>
<div>

The code below demonstrates how to implement a dynamic style editor in your application:

```tsx title="StyleEditor.tsx" showLineNumbers
import React, { useState } from "react";
import { ChatProvider, CmndChatBot } from "@cmnd-ai/chatbot-react";

const StyleEditor = () => {
  const [avatarBorderRadius, setAvatarBorderRadius] = useState("50%");
  const [bubbleBg, setBubbleBg] = useState("#e0e0e0");
  const [userBubbleBg, setUserBubbleBg] = useState("#007bff");

  return (
    <div className="style-editor">
      <div className="controls">
        <div>
          <label>Avatar Border Radius:</label>
          <select
            value={avatarBorderRadius}
            onChange={(e) => setAvatarBorderRadius(e.target.value)}
          >
            <option value="50%">Circle (50%)</option>
            <option value="10%">Rounded (10%)</option>
            <option value="0">Square (0)</option>
          </select>
        </div>

        <div>
          <label>Bot Bubble Color:</label>
          <input
            type="color"
            value={bubbleBg}
            onChange={(e) => setBubbleBg(e.target.value)}
          />
        </div>

        <div>
          <label>User Bubble Color:</label>
          <input
            type="color"
            value={userBubbleBg}
            onChange={(e) => setUserBubbleBg(e.target.value)}
          />
        </div>
      </div>

      <ChatProvider
        baseUrl="<your-cmnd-api-base-url>"
        chatbotId="<your-chatbot-id>"
        organizationId="<your-organization-id>"
        customStyles={{
          chatAvatarStyle: {
            borderRadius: avatarBorderRadius,
            width: "40px",
            height: "40px",
          },
          botChatbubbleStyle: {
            backgroundColor: bubbleBg,
          },
          userChatbubbleStyle: {
            backgroundColor: userBubbleBg,
            color: "white",
          },
        }}
      >
        <CmndChatBot />
      </ChatProvider>
    </div>
  );
};

export default StyleEditor;
```

This example creates a simple interface to dynamically adjust styles, allowing you to preview changes in real-time.

</div>
</details>
