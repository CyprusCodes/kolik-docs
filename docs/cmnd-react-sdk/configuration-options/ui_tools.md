---
id: ui-tools
title: "UI Tools"
description: "How to create interactive UI components that integrate into your chatbot interface"
sidebar_position: 4
---

# UI Tools

## Introduction

The CMND React SDK provides support for UI Tools, enabling developers to create interactive components that can be integrated into the chatbot interface. These tools can either capture user input or simply display information, and can be rendered in different locations within the application.

:::note What you'll learn
This guide contains information on how to define and implement UI Tools for your chatbot, the different types of UI Tools available, how to create components that capture user input, how to render components in various locations within your application, and implementation patterns through practical examples.
:::

## What is the UI Tool

The UI Tool is a specialized component that implements the `CMNDChatbotUITool` interface. Each tool consists of configuration properties and a `runCmd` function that determines its behavior and rendering logic.

## Key Properties

Each UI Tool must implement the following key properties:

| Property                   | Type     | Description                                                   |
| -------------------------- | -------- | ------------------------------------------------------------- |
| `name`                     | string   | Unique identifier for the tool                                |
| `description`              | string   | Brief description of the tool's functionality                 |
| `category` & `subcategory` | string   | Classification for organization                               |
| `dangerous`                | boolean  | Indicates if the tool could have potentially harmful effects  |
| `argumentSchema`           | object   | JSON Schema defining the expected arguments                   |
| `capturesUserInput`        | boolean  | Indicates if the tool captures user input                     |
| `runCmd`                   | function | Implements the tool's logic and returns/renders the component |

## Types of Custom UI Tools

UI Tools can be implemented in six different ways, each with its own purpose and behavior.

| UI Tool Type                                | Returns Component | Captures Input | Rendering Location       | Example Use Case                               |
| ------------------------------------------- | ----------------- | -------------- | ------------------------ | ---------------------------------------------- |
| Component Without Input Capture             | ✅                | ❌             | Anywhere                 | Display components, information panels         |
| Component With Input Capture                | ✅                | ✅             | Anywhere                 | Form components, search interfaces             |
| Chat Message Card With Input (Using Ref)    | ✅                | ✅             | Chat box as message card | In-chat forms, interactive cards               |
| Chat Message Card Without Input (Using Ref) | ✅                | ❌             | Chat box as message card | Status displays, confirmation messages         |
| External Component Without Input            | ✅                | ❌             | Outside chat box         | Background color changer, theme switcher       |
| External Component With Input               | ✅                | ✅             | Outside chat box         | Global settings panel, configuration interface |

## Implementation Examples

The following examples demonstrate different UI Tools implementation patterns. Click on each example to expand the code and details.

<details>
<summary><strong>Background Color Tool</strong></summary>

This tool demonstrates a simple UI tool that changes the page background color without capturing user input:

```typescript title="tsx" showLineNumbers
const BackgroundColorTool: CMNDChatbotUITool = {
  name: "change_background_color",
  description: "Changes the background color of the page",
  category: "UI",
  subcategory: "BG",
  dangerous: false,
  associatedCommands: [],
  prerequisites: [],
  argumentSchema: {
    type: "object",
    properties: {
      bgColor: {
        type: "string",
        minLength: 1,
        errorMessage: {
          required: "Background Color is required",
        },
      },
    },
    required: ["bgColor"],
  },
  rerun: true,
  rerunWithDifferentParameters: true,
  capturesUserInput: false,
  runCmd: ({ functionArgs, previousRunResults, captureResults }, ref) => {
    const { bgColor } = functionArgs;
    const messageContainer = ref;
    if (messageContainer) {
      messageContainer.current.innerHTML = `Background color changed to ${bgColor}`;
    }
    document.body.style.backgroundColor = bgColor;
    if (!previousRunResults) {
      captureResults(`Background color changed to ${bgColor}`);
    }
  },
};
```

:::info **Key Features:**

- External component without input capture
- Changes page background color
- Updates message container with confirmation text
- Captures results for future reference
  :::

</details>

<details>
<summary><strong>Username Input Tool</strong></summary>

This tool demonstrates a UI tool that captures user input through a form component:

```typescript title="tsx" showLineNumbers
export const UsernameTool: CMNDChatbotUITool = {
  name: "capture_username",
  description: "Captures username through an input field",
  category: "UI",
  subcategory: "Input",
  dangerous: false,
  associatedCommands: [],
  prerequisites: [],
  argumentSchema: {
    type: "object",
    properties: {
      placeholder: {
        type: "string",
        default: "Enter username",
      },
    },
  },
  rerun: true,
  rerunWithDifferentParameters: true,
  capturesUserInput: true,
  runCmd: ({ functionArgs, captureResults, previousRunResults }, ref) => {
    const UsernameComponent = () => {
      const [username, setUsername] = useState(previousRunResults || "");

      const handleSubmit = () => {
        if (username.trim()) {
          if (captureResults) {
            captureResults(username);
          }
          if (ref?.current) {
            ref.current.innerHTML = `Username set to: ${username}`;
          }
        }
      };

      return (
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={functionArgs?.placeholder || "Enter username"}
            style={{
              padding: "4px 8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              color: "#333",
            }}
          />
          <button
            onClick={handleSubmit}
            style={{
              padding: "4px 12px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Set Username
          </button>
        </div>
      );
    };

    return <UsernameComponent />;
  },
};
```

:::info **Key Features:**

- Component with input capture
- Uses React state to manage input
- Custom styling for form elements
- Captures and returns username data
  :::

</details>

<details>
<summary><strong>Graph Plotting Tool</strong></summary>

This tool demonstrates a UI tool that plots a graph based on the function argument data:

```typescript title="tsx" showLineNumbers
export const PlotGraphTool: CMNDChatbotUITool = {
  name: "plot_graph",
  description: "Plots a graph using Recharts",
  category: "visualization",
  dangerous: false,
  associatedCommands: [],
  prerequisites: [],
  argumentSchema: {
    type: "object",
    properties: {
      type: {
        type: "string",
        enum: ["line", "bar", "pie", "doughnut"],
        errorMessage: {
          required: "Graph type is required",
          enum: "Graph type must be one of: line, bar, pie, or doughnut",
        },
      },
      data: {
        type: "object",
        properties: {
          labels: {
            type: "array",
            items: { type: "string" },
            errorMessage: {
              required: "Labels for the graph are required",
            },
          },
          datasets: {
            type: "array",
            items: {
              type: "object",
              properties: {
                label: { type: "string" },
                data: {
                  type: "array",
                  items: { type: "number" },
                  errorMessage: {
                    required: "Dataset values are required",
                  },
                },
                backgroundColor: {
                  type: "array",
                  items: { type: "string" },
                },
                borderColor: {
                  type: "array",
                  items: { type: "string" },
                },
                borderWidth: { type: "number" },
              },
            },
          },
        },
        required: ["labels", "datasets"],
      },
    },
    required: ["type", "data"],
  },
  rerun: true,
  rerunWithDifferentParameters: true,
  capturesUserInput: true,

  runCmd: ({ functionArgs, captureResults, previousRunResults }) => {
    const GraphComponent = () => {
      const { type, data } = functionArgs;

      // Transform the data to Recharts format
      const transformedData = data.labels.map((label, index) => ({
        name: label,
        ...data.datasets.reduce((acc, dataset) => {
          acc[dataset.label] = dataset.data[index];
          return acc;
        }, {}),
      }));

      const renderGraph = () => {
        switch (type) {
          case "line":
            return (
              <ResponsiveContainer width={400} height={400}>
                <LineChart data={transformedData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {data.datasets.map((dataset, index) => (
                    <Line
                      isAnimationActive={false}
                      key={dataset.label}
                      type="monotone"
                      dataKey={dataset.label}
                      stroke={
                        dataset.borderColor?.[0] ||
                        `#${Math.floor(Math.random() * 16777215).toString(16)}`
                      }
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            );

          case "bar":
            return (
              <ResponsiveContainer width={400} height={400}>
                <BarChart data={transformedData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {data.datasets.map((dataset, index) => (
                    <Bar
                      isAnimationActive={false}
                      key={dataset.label}
                      dataKey={dataset.label}
                      fill={
                        dataset.backgroundColor?.[0] ||
                        `#${Math.floor(Math.random() * 16777215).toString(16)}`
                      }
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            );

          case "pie":
          case "doughnut":
            // For pie/doughnut, we need to transform data differently
            const pieData = data.labels.map((label, index) => ({
              name: label,
              value: data.datasets[0].data[index],
            }));

            return (
              <ResponsiveContainer width={400} height={400}>
                <PieChart>
                  <Pie
                    isAnimationActive={false}
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={type === "doughnut" ? 60 : 0}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  />
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            );
        }
      };

      if (captureResults && !previousRunResults) {
        captureResults(`Graph of type ${type} rendered successfully`);
      }

      return (
        <div className="w-full h-[400px] border rounded-lg p-4 bg-white">
          {renderGraph()}
        </div>
      );
    };

    return <GraphComponent />;
  },
};
```

:::info **Key Features:**

- Component with data visualization capabilities
- Supports multiple chart types (line, bar, pie, doughnut)
- Transforms data for different chart formats
- Responsive container for better display
  :::

</details>

<details>
<summary><strong>Dynamic Prompt Tool</strong></summary>

This tool demonstrates a UI tool that dynamically generates prompts based on user input and predefined templates:

```typescript title="tsx" showLineNumbers
export const DynamicPromptTool: CMNDChatbotUITool = {
  name: "dynamic_prompt",
  description: "Prompts the user for any input with a custom message",
  category: "UI",
  subcategory: "Input",
  dangerous: false,
  associatedCommands: [],
  prerequisites: [],
  argumentSchema: {
    type: "object",
    properties: {
      message: {
        type: "string",
        default: "Please enter a value:",
      },
      defaultValue: {
        type: "string",
        default: "",
      },
    },
  },
  rerun: true,
  rerunWithDifferentParameters: true,
  capturesUserInput: true,
  runCmd: ({ functionArgs, captureResults, previousRunResults }, ref) => {
    const message = functionArgs?.message || "Please enter a value:";
    const defaultValue = functionArgs?.defaultValue || "";
    let userInput = previousRunResults || "";
    if (!previousRunResults) {
      userInput = prompt(message, defaultValue);
    }

    if (userInput !== null && userInput.trim()) {
      captureResults(userInput);
      if (ref?.current) {
        ref.current.innerHTML = `You entered: ${userInput}`;
      }
    }
  },
};
```

:::info **Key Features:**

- External component with input capture
- Uses browser's native prompt dialog
- Customizable message and default value
- Updates DOM reference with user input
  :::

</details>

<details>
<summary><strong>Chat Notification Tool</strong></summary>

This tool demonstrates a UI tool that triggers a toast within the chat interface:

```typescript title="tsx" showLineNumbers
export const ChatNotificationTool: CMNDChatbotUITool = {
  name: "chat_notification",
  description: "Displays a notification toast in the chat",
  category: "UI",
  subcategory: "Chat",
  dangerous: false,
  associatedCommands: [],
  prerequisites: [],
  argumentSchema: {
    type: "object",
    properties: {
      type: {
        type: "string",
        enum: ["info", "success", "warning", "error"],
        default: "info",
      },
      title: {
        type: "string",
        minLength: 1,
      },
      message: {
        type: "string",
        minLength: 1,
      },
      duration: {
        type: "number",
        default: 4000, // Default duration in milliseconds
      },
    },
    required: ["title", "message"],
  },
  rerun: true,
  rerunWithDifferentParameters: true,
  capturesUserInput: false,
  runCmd: ({ functionArgs, captureResults, previousRunResults }) => {
    const { type = "info", title, message, duration = 4000 } = functionArgs;

    const toastTypes = {
      info: toast,
      success: toast.success,
      warning: toast,
      error: toast.error,
    };

    if (!previousRunResults) {
      toastTypes[type](`${title}: ${message}`, {
        duration,
      });
      captureResults(`Notification displayed: ${title}: ${message}`);
      return <div>Notification displayed</div>;
    } else {
      if (previousRunResults) {
        return <div>Notification displayed</div>;
      }
    }
  },
};
```

:::info Key Features:

- External component without input capture
- Multiple notification types (info, success, warning, error)
- Configurable toast duration
- Returns confirmation component
  :::

</details>

## Integration

:::caution Important
Remember to pass all your UI Tools to the ChatProvider component for them to be available in your chatbot.
:::

To utilize the UI Tools with the CMND React SDK, pass the defined tools as a prop to the `ChatProvider` component:

```typescript title="tsx" showLineNumbers
<ChatProvider
  baseUrl="<your-cmnd-api-base-url>"
  chatbotId={"<your-chatbot-id>"}
  organizationId={"<your-organization-id>"}
  UITools={[
    BackgroundColorTool,
    UsernameTool,
    PlotGraphTool,
    DynamicPromptTool,
    ChatNotificationTool,
  ]}
/>
```

:::tip Best Practices

- Keep tool functionality focused and specific
- Provide clear error handling and user feedback
- Design tools with reusability in mind
- Ensure proper type definitions for all arguments
- Test tools thoroughly before deployment
- Consider accessibility in your UI components
  :::
