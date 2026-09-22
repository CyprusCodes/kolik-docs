---
id: styles-and-configurations
title: Styles & Configurations
description: Customization options for the CMND Embed Widget
sidebar_position: 2
---

# Configurations

The CMND Embed Widget offers extensive customization through two types of configurations:

1. **Hardcoded configurations**: Set during initialization
2. **Inherited configurations**: Managed through the CMND dashboard

## Hardcoded Configurations

These configurations are specified directly in the object passed to the `init` command when embedding the widget on your site.

| Parameter                  | Type    | Description                                                     | Default |
| -------------------------- | ------- | --------------------------------------------------------------- | ------- |
| `hide_default_launcher`    | Boolean | Hides the widget by default until explicitly shown              | `false` |
| `custom_launcher_selector` | String  | Places the widget inside a custom element with the specified ID | None    |

### Example 1: Hide Default Launcher

```jsx title="JavaScript" showLineNumbers
cmndChat("init", {
  chatbot_id: "YOUR_CHATBOT_ID",
  organization_id: "YOUR_ORGANIZATION_ID",
  hide_default_launcher: true,
});
```

### Example 2: Custom Launcher Selector

```jsx title="JavaScript" showLineNumbers
cmndChat("init", {
  chatbot_id: "YOUR_CHATBOT_ID",
  organization_id: "YOUR_ORGANIZATION_ID",
  custom_launcher_selector: "my-div",
});
```

This will place the widget inside the HTML element with `id="my-div"`:

```html title="HTML" showLineNumbers
<div id="my-div"></div>
```

### Using Multiple Configurations

You can combine multiple configurations in a single initialization:

```jsx title="JavaScript" showLineNumbers
cmndChat("init", {
  chatbot_id: "YOUR_CHATBOT_ID",
  organization_id: "YOUR_ORGANIZATION_ID",
  custom_launcher_selector: "my-div",
  hide_default_launcher: true,
});
```

:::tip
The order of configuration parameters doesn't matter.
:::

## Inherited Configurations

These configurations are set through the [CMND Dashboard](https://app.cmnd.ai/chatbots) and automatically applied to your widget. They control the visual appearance and behavior of the widget.

### Message Bubble Styles

| Parameter                        | Description                              |
| -------------------------------- | ---------------------------------------- |
| `messageBubbleBorderRadius`      | Border radius of all message bubbles     |
| `userMessageBubbleBgColor`       | Background color of user message bubbles |
| `responseMessageBubbleBgColor`   | Background color of bot response bubbles |
| `userMessageBubbleTextColor`     | Text color of user messages              |
| `responseMessageBubbleTextColor` | Text color of bot responses              |

### Widget Container Styles

| Parameter               | Description                                |
| ----------------------- | ------------------------------------------ |
| `widgetBgColor`         | Background color of the entire widget      |
| `widgetTextColor`       | Default text color throughout the widget   |
| `widgetBorderRadius`    | Border radius of the main widget container |
| `widgetShadowIntensity` | Shadow intensity around the widget         |
| `widgetAnimation`       | Animation style for the widget             |
| `fontFamily`            | Font family used throughout the widget     |

### Widget Button Styles

| Parameter                     | Description                                   |
| ----------------------------- | --------------------------------------------- |
| `widgetButtonBorderRadius`    | Border radius of the launcher button          |
| `widgetButtonBgColor`         | Background color of the launcher button       |
| `widgetButtonIconColor`       | Default color of icons in the launcher button |
| `widgetButtonClosedIconColor` | Color of the icon when widget is closed       |
| `widgetButtonOpenedIconColor` | Color of the icon when widget is open         |
| `widgetButtonPosition`        | Button position ("left" or "right")           |

### Icon Styles

| Parameter           | Description                           |
| ------------------- | ------------------------------------- |
| `sendIconColor`     | Color of the send message icon        |
| `sendIconBgColor`   | Background color behind the send icon |
| `newChatIconcolor`  | Color of the new chat icon            |
| `expandIconColor`   | Color of the expand widget icon       |
| `minimiseIconColor` | Color of the minimize widget icon     |
| `iconSize`          | Size of icons throughout the widget   |

### Input Field Styles

| Parameter               | Description                                     |
| ----------------------- | ----------------------------------------------- |
| `inputBgColor`          | Background color of the message input field     |
| `inputBorderColor`      | Border color of the message input field         |
| `inputBorderRadius`     | Border radius of the message input field        |
| `inputTextColor`        | Text color in the message input field           |
| `inputTextSize`         | Font size of text in the input field            |
| `inputPlaceholderText`  | Placeholder text shown in the empty input field |
| `inputPlaceholderColor` | Color of the placeholder text                   |

### Header & Footer Styles

| Parameter          | Description                                  |
| ------------------ | -------------------------------------------- |
| `titleText`        | Text displayed in the widget header          |
| `subTitleText`     | Subtitle text displayed in the widget header |
| `titleFontSize`    | Font size of the title text                  |
| `subTitleFontSize` | Font size of the subtitle text               |
| `footerTextColor`  | Text color in the widget footer              |
| `avatarImageUrl`   | URL to a custom avatar image                 |

### Loading Indicator Style

| Parameter         | Description                         |
| ----------------- | ----------------------------------- |
| `loadingDotColor` | Color of the loading indicator dots |

:::info
To modify any of these inherited configurations:

1. Navigate to your chatbots in your [CMND Dashboard](https://app.cmnd.ai/chatbots)
2. Select your embed widget chatbot settings
3. Select the **Theme** tab
4. Make your desired customizations
5. Save changes

Your styling changes will be automatically applied to all instances of your widget without requiring code updates.
:::
