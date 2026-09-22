---
id: installation
title: Installation & Setup
description: How to install and set up the CMND React SDK in your React application.
sidebar_position: 2
---

# Installation & Setup

The CMND React SDK makes it easy to embed a customizable chatbot in your React application.

:::info Prerequisites
Before you begin, make sure you have the following from the "Embed" tab of your [CMND Chatbot Dashboard](https://app.cmnd.ai):
:::

<div className="table-container">
  <table>
    <thead>
      <tr>
        <th>Prop</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>baseUrl</code></td>
        <td>string</td>
        <td>The CMND API base URL (usually <code>https://api.cmnd.ai</code>)</td>
      </tr>
      <tr>
        <td><code>chatbotId</code></td>
        <td>string</td>
        <td>Your unique chatbot identifier</td>
      </tr>
      <tr>
        <td><code>organizationId</code></td>
        <td>string</td>
        <td>Your organization identifier</td>
      </tr>
    </tbody>
  </table>
</div>

## Installation

Install the package using your preferred package manager:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="package-manager">
  <TabItem value="npm" label="npm" default>

```bash title="Terminal"
npm install @cmnd-ai/chatbot-react
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash title="Terminal"
yarn add @cmnd-ai/chatbot-react
```

  </TabItem>
  <TabItem value="pnpm" label="pnpm">

```bash title="Terminal"
pnpm add @cmnd-ai/chatbot-react
```

  </TabItem>
</Tabs>

## Basic Implementation

:::note Adding the Chatbot to Your App

Follow these steps to add the chatbot to your React application.
:::

### 1. Import Required Components

```jsx title="JavaScript" showLineNumbers
import { ChatProvider, CmndChatBot } from "@cmnd-ai/chatbot-react";
import "@cmnd-ai/chatbot-react/dist/styles/index.css";
```

### 2. Configure the Chatbot

Wrap your app (or the part where you want the chatbot to be available) with the `ChatProvider` and include the `CmndChatBot` component:

```jsx title="JavaScript" showLineNumbers
const App = () => {
  return (
    <ChatProvider
      baseUrl="https://api.cmnd.ai"
      chatbotId={YOUR_CHATBOT_ID}
      organizationId={YOUR_ORG_ID}
    >
      {/* Your app components */}
      <CmndChatBot />
    </ChatProvider>
  );
};

export default App;
```

:::caution
Remember to replace `YOUR_CHATBOT_ID` and `YOUR_ORG_ID` with the actual values from your CMND dashboard.
:::

<details>
<summary><b>Complete Implementation Example</b></summary>
<div>

```jsx title="JavaScript" showLineNumbers
import React from "react";
import { ChatProvider, CmndChatBot } from "@cmnd-ai/chatbot-react";
import "@cmnd-ai/chatbot-react/dist/styles/index.css";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>My Application with CMND Chatbot</h1>
      </header>

      <main className="app-content">
        {/* Your main application content */}
        <p>Welcome to my application! Click the chat icon to get assistance.</p>
      </main>

      <ChatProvider
        baseUrl="https://api.cmnd.ai"
        chatbotId="your-chatbot-id"
        organizationId="your-org-id"
      >
        <CmndChatBot />
      </ChatProvider>
    </div>
  );
};

export default App;
```

</div>
</details>

:::tip
Want to see it all together in a working app? Check out the open-source example: [CMND React Chatbot Example on GitHub](https://github.com/cmnd-ai/chatbot-react-example)
:::
