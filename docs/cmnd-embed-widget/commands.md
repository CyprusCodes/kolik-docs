---
id: commands
title: Basic Commands
description: Commands to control the Embed Widget Chatbot in your website.
sidebar_position: 3
---

# Basic Commands

The CMND Embed Widget provides three essential commands to control its behavior on your website: `init`, `show`, and `hide`. This guide explains how to use each command effectively.

## Available Commands

### 1. The `init` Command

This command initializes the widget on your page. You must call this command before using any other widget functionality.

**Required Parameters:**

- `chatbot_id`: Your unique chatbot identifier
- `organization_id`: Your CMND organization identifier

Both parameters must be passed as properties in an object.

```jsx title="JavaScript" showLineNumbers
window.cmndChat("init", {
  chatbot_id: "YOUR_CHATBOT_ID",
  organization_id: "YOUR_ORGANIZATION_ID",
});
```

### 2. The `hide` Command

This command hides the widget from view without destroying it. The widget remains initialized in the background and can be shown again later.

```jsx title="JavaScript" showLineNumbers
window.cmndChat("hide");
```

### 3. The `show` Command

This command displays the widget after it has been hidden. The widget must be initialized before this command can be used.

```jsx title="JavaScript" showLineNumbers
window.cmndChat("show");
```

## Usage Notes

### Omitting the `window` Qualifier

All CMND commands can be called without the `window` qualifier for brevity:

```jsx title="JavaScript" showLineNumbers
// These are equivalent:
window.cmndChat("init", {
  /* params */
});
cmndChat("init", {
  /* params */
});
```

### Practical Examples

**Function Wrappers**

```jsx title="JavaScript" showLineNumbers
// Initialize the widget
cmndChat("init", {
  chatbot_id: "YOUR_CHATBOT_ID",
  organization_id: "YOUR_ORGANIZATION_ID",
});

// Create convenience functions
const hideWidget = () => {
  cmndChat("hide");
};

const showWidget = () => {
  cmndChat("show");
};

// Call these functions when needed
showWidget(); // Shows the widget
hideWidget(); // Hides the widget
```

## Sample Implementation

Here's a complete HTML example showing how to initialize the widget and add buttons to toggle its visibility:

```html title="HTML" showLineNumbers
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CMND Widget Example</title>

    <!-- Load the CMND Widget script -->
    <script src="https://embed.cmnd.ai/widget.js"></script>

    <!-- Initialize when DOM is ready -->
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        cmndChat("init", {
          chatbot_id: "YOUR_CHATBOT_ID",
          organization_id: "YOUR_ORGANIZATION_ID",
        });
      });
    </script>

    <style>
      /* Optional styling for the buttons */
      button {
        padding: 10px 15px;
        margin: 10px;
        border: none;
        border-radius: 4px;
        background-color: #0066ff;
        color: white;
        cursor: pointer;
      }

      button:hover {
        background-color: #0055dd;
      }
    </style>
  </head>
  <body>
    <h1>CMND Widget Controls</h1>

    <!-- Buttons to control widget visibility -->
    <button onclick="cmndChat('show')">Show Chatbot</button>
    <button onclick="cmndChat('hide')">Hide Chatbot</button>
  </body>
</html>
```

:::tip Command Sequence
For proper operation, follow this sequence:

1. Load the widget script
2. Call `init` with your credentials
3. Use `show` and `hide` as needed to control visibility

Remember that `init` must be called before any other commands.
:::
