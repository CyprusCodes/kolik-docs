---
id: quickstart
title: Quickstart with Kolik
sidebar_position: 1
---

# Quickstart with Kolik

This guide walks you through the simplest way to use Kolik — creating a chatbot and embedding it into a React application.

## 1. Create a Chatbot on Kolik

1. Log in to your Kolik account.
2. Go to **Chatbots** and click **Create Chatbot**.
3. Choose the **React Chatbot** option.
4. Configure your chatbot (title, model type, system prompt) — the defaults work fine to start.
5. Click **Create Chatbot**.

## 2. Install the React SDK

```bash
npm install @cmnd-ai/chatbot-react
```

## 3. Embed the Chatbot in Your App

```jsx
import { ChatProvider, CmndChatBot } from "@cmnd-ai/chatbot-react";

const App = () => (
  <ChatProvider
    baseUrl="https://api.kolik.co"
    chatbotId={YOUR_CHATBOT_ID}
    organizationId={YOUR_ORG_ID}
  >
    <CmndChatBot />
  </ChatProvider>
);

export default App;
```

:::caution
Replace `YOUR_CHATBOT_ID` and `YOUR_ORG_ID` with the values from your chatbot's **Embed** tab.
:::

## Full Example

Check out the open-source example app: [Kolik React Chatbot Example](https://github.com/CyprusCodes/cmnd-react-chatbot-example).

That's it — you now have an AI chatbot running in your React app.
