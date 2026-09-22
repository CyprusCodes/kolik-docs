---
id: ui-tools
title: UI Tools
descrption: UI Tools
sidebar_position: 5
---

import show_form_sample from "../../../static/img/ui_tools_images/show_form_sample.png";

# UI Tools

## Ov/erview

The embed widget provides tools that can run with AI context or arguments, enabling you to display information or manipulate the DOM. The widget includes built-in tools accessible via `window.cmndBuiltInTools` and supports custom tool creation.

## Built-in Tools

The following tools come pre-configured with the embed widget by default:

| Tool Name           | Description                                     |
| ------------------- | ----------------------------------------------- |
| `show_form`         | Displays a form based on a provided JSON schema |
| `capture_signature` | Captures a user's signature                     |
| `show_rating`       | Displays a rating input widget                  |
| `show_video_player` | Displays a video player                         |
| `show_image_viewer` | Displays an image viewer                        |

These tools can be triggered by providing a prompt related to their functionality. For example, asking _"Show me a login form"_ will render a login form.

<a href={show_form_sample} target="_blank">
  <img src={show_form_sample} width="400" />
</a>

## Custom UI Tools

Custom UI tools allow you to extend the widget's functionality with your own tools tailored to specific use cases. These can override the default built-in tools or work alongside them.

:::warning
Providing custom UI tools overwrites the built-in tools, but you can extend your custom UI tools with the built-in tools using `window.cmndBuiltInTools`.
:::

### Defining a Custom UI Tool

Each custom tool must have a `functionType` set to `ui` and follow a consistent structure.

#### Key Properties of a Custom UI Tool

| Property                       | Description                                                | Example                                      |
| ------------------------------ | ---------------------------------------------------------- | -------------------------------------------- |
| `name`                         | Unique identifier for the tool                             | `"change_background_color"`                  |
| `description`                  | Short description of what the tool does                    | `"Changes the background color of the page"` |
| `dangerous`                    | Indicates if the tool performs potentially harmful actions | `false`                                      |
| `associatedCommands`           | Additional commands required by the tool                   | `[]`                                         |
| `prerequisites`                | Prerequisites required by the tool                         | `[]`                                         |
| `argumentSchema`               | Defines required arguments in JSON schema format           | See example below                            |
| `rerun`                        | Whether the tool can be rerun with the same parameters     | `true`                                       |
| `rerunWithDifferentParameters` | Whether the tool can be rerun with different parameters    | `true`                                       |
| `capturesUserInput`            | Whether the tool captures input from the user              | `true`                                       |
| `runCmd`                       | Function implementing the tool's functionality             | See example below                            |

#### Example: Custom UI Tool Definition

```javascript
{
  name: "change_background_color", // Unique tool name
  description: "Changes the background color of the page", // Tool description
  category: "UI", // Main category
  subcategory: "BG", // Subcategory
  functionType: "ui", // Function type (always "ui")
  dangerous: false, // Safe tool indicator
  associatedCommands: [], // Additional commands (if any)
  prerequisites: [], // Prerequisites (if any)
  argumentSchema: { // Arguments required by the tool
    type: "object",
    properties: {
      bgColor: {
        type: "string", // The background color argument
        minLength: 1, // Minimum length validation
        errorMessage: {
          required: "Background Color is required", // Error message if missing
        },
      },
    },
    required: ["bgColor"], // Required arguments
  },
  rerun: true, // Allows rerunning the tool
  rerunWithDifferentParameters: true, // Allows rerunning with different inputs
  capturesUserInput: true, // Captures user input
  runCmd: ({ functionArgs }, ref) => {
    const { bgColor } = functionArgs;
    const messageContainer = ref;

    if (messageContainer) {
      messageContainer.innerHTML = `Background color changed to ${bgColor}`;
    }

    document.body.style.backgroundColor = bgColor; // Change background color
  },
}
```

### `runCmd` Function Parameters

The `runCmd` function receives the following parameters:

| Parameter            | Description                                                                          |
| -------------------- | ------------------------------------------------------------------------------------ |
| `functionArgs`       | Contains the tool's arguments defined in the schema                                  |
| `captureResults`     | Callback function that must be called with input captured from the user              |
| `previousRunResults` | If the tool was run previously, contains the string `captureResults` was called with |
| `ref`                | Reference to the DOM element where you can render UI elements                        |

### Usage

To register custom UI tools, use the `registerTools` command:

```javascript
window.cmndChat("registerTools", {
  ui_tools: [
    {
      name: "change_background_color",
      // ... other values
    },
    {
      name: "navigate_to_page",
      //... other values
    },
  ],
});
```

To extend custom UI tools with built-in tools:

```javascript
window.cmndChat("registerTools", {
  ui_tools: [
    window.cmndBuiltInTools.capture_signature,
    window.cmndBuiltInTools.show_form,
    {
      name: "change_background_color",
      // ... other values
    },
    {
      name: "navigate_to_page",
      //... other values
    },
  ],
});
```

## Types of Custom UI Tools

There are four variations of UI tools you can implement:

| Type   | Description                                      | Rendering | User Input | Parameters Used                  |
| ------ | ------------------------------------------------ | --------- | ---------- | -------------------------------- |
| Type 1 | Rendered in chat box without capturing input     | Yes       | No         | `ref`                            |
| Type 2 | Rendered in chat box with input capture          | Yes       | Yes        | `ref`, `captureResults`          |
| Type 3 | Not rendered in chat box without capturing input | No        | No         | `functionArgs`                   |
| Type 4 | Not rendered in chat box with input capture      | No        | Yes        | `functionArgs`, `captureResults` |

### Example: Type 1 - Rendered in chat box without capturing input

```javascript
{
  name: "plot_graph",
  description: "Plots a graph on the page using Chart.js",
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
          enum:
            "Graph type must be one of: line, bar, pie, or doughnut",
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
  runCmd: (
    { functionArgs, previousRunResults, captureResults },
    ref
  ) => {
    const { type, data } = functionArgs;

    // Check if Chart.js is already loaded
    if (!window.Chart) {
      console.log("Chart.js not found. Loading dynamically...");

      // Create a script element to load Chart.js
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/chart.js";
      script.onload = () => {
        console.log("Chart.js loaded successfully.");
        renderChart();
      };
      script.onerror = () => {
        console.error("Failed to load Chart.js.");
      };

      document.head.appendChild(script);
    } else {
      renderChart();
    }

    function renderChart() {
      // Ensure the ref element exists
      if (!ref) {
        console.error(
          "No reference element provided for the chart."
        );
        return;
      }

      // Check if the ref element already contains a canvas, if so, reuse it
      let canvas = ref.querySelector("canvas");
      if (!canvas) {
        // Create a new canvas element
        canvas = document.createElement("canvas");
        ref.appendChild(canvas);
      }

      // Destroy any existing chart on the canvas
      if (ref.chartInstance) {
        ref.chartInstance.destroy();
      }

      // Render the chart using Chart.js
      const ctx = canvas.getContext("2d");
      ref.chartInstance = new Chart(ctx, {
        type,
        data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
          },
        },
      });

      if (!previousRunResults) {
        captureResults(
          "Graph successfully plotted inside the provided ref."
        );
      }
    }
  },
}
```

### Example: Type 2 - Rendered in chat box with input capture

```javascript
{
  name: "capture_user_name",
  description: "Renders a text field to capture the user's name",
  dangerous: false,
  associatedCommands: [],
  prerequisites: [],
  argumentSchema: {
    type: "object",
    properties: {},
  },
  rerun: true,
  rerunWithDifferentParameters: true,
  capturesUserInput: true,
  runCmd: ({ previousRunResults, captureResults }, ref) => {
    // Ensure the ref element exists
    if (!ref) {
      console.error("No reference element provided.");
      return;
    }

    // Clear the content of the ref
    ref.innerHTML = "";

    if (previousRunResults) {
      // Display the user's name if previous results exist
      const greeting = document.createElement("span");
      greeting.textContent = `Hello, ${previousRunResults}`;
      greeting.style.fontSize = "1.2rem";
      greeting.style.fontWeight = "bold";
      ref.appendChild(greeting);
    } else {
      // Create a container for the input field and button
      const container = document.createElement("div");
      container.style.margin = "1rem";

      // Create a label and input field
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Enter your name";
      input.style.marginRight = "0.5rem";

      // Create a submit button
      const button = document.createElement("button");
      button.textContent = "Submit";
      button.style.padding = "0.5rem 1rem";

      // Append elements to the container
      container.appendChild(input);
      container.appendChild(button);
      ref.appendChild(container);

      // Add event listener for the submit button
      button.addEventListener("click", () => {
        const name = input.value.trim();
        if (name) {
          captureResults(name);

          // Replace the input and button with the greeting
          ref.innerHTML = "";
          const greeting = document.createElement("span");
          greeting.textContent = `Hello, ${name}`;
          greeting.style.fontSize = "1.2rem";
          greeting.style.fontWeight = "bold";
          ref.appendChild(greeting);
        } else {
          alert("Please enter a name.");
        }
      });
    }
  }
}
```

### Example: Type 3 - Not rendered in chat box without capturing input

```javascript
{
  name: "change_background_color",
  description: "Changes the background color of the page",
  category: "UI",
  subcategory: "BG",
  functionType: "ui",
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
  runCmd: (
    { functionArgs, previousRunResults, captureResults },
    ref
  ) => {
    const { bgColor } = functionArgs;
    if (!previousRunResults) {
      captureResults(`Background color changed to ${bgColor}`);
    }
    const messageContainer = ref;
    if (messageContainer) {
      console.log("we got message container", messageContainer);
      messageContainer.innerHTML = `Background color changed to ${bgColor}`;
    }
    document.body.style.backgroundColor = bgColor;
  }
}
```

### Example: Type 4 - Not rendered in chat box with input capture

```javascript
{
  name: "show_prompt_window",
  description:
    "Prompts the user with a message and captures their input",
  category: "UI",
  subcategory: "Prompt",
  functionType: "ui",
  dangerous: false,
  associatedCommands: [],
  prerequisites: [],
  argumentSchema: {
    type: "object",
    properties: {
      message: {
        type: "string",
        minLength: 1,
        errorMessage: {
          required: "Prompt message is required",
        },
      },
    },
    required: ["message"],
  },
  rerun: true,
  rerunWithDifferentParameters: true,
  capturesUserInput: true,
  runCmd: (
    { functionArgs, previousRunResults, captureResults },
    ref
  ) => {
    if (previousRunResults) {
      return;
    }
    const { message } = functionArgs;

    // Prompt the user with the provided message
    const userInput = prompt(message);

    // If user input is captured, store the result
    if (userInput !== null) {
      captureResults(`User entered: ${userInput}`);
    } else {
      captureResults("User cancelled the prompt.");
    }

    // If a reference element is provided, display the user input there
    const messageContainer = ref;
    if (messageContainer) {
      messageContainer.innerHTML =
        userInput !== null
          ? `User input: ${userInput}`
          : "Prompt was cancelled by the user.";
    }

    // Return the user input for further processing
    return userInput;
  }
}
```
