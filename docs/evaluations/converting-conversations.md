---
id: converting-conversations
title: Converting Conversations to Evaluations
sidebar_position: 5
---

# Converting Conversations to Evaluations

CMND.ai allows you to **convert real conversations into evaluation test cases**. This is a powerful way to:

- Create regression tests from production conversations
- Capture edge cases that occurred in real usage
- Build a test suite based on actual user interactions

## How It Works

When viewing a conversation's details, you can convert it directly into an evaluation with a single click. The conversation turns are automatically mapped to evaluation turns.

---

## Step-by-Step Conversion

### Step 1: View Conversation Details

1. Navigate to **Conversations** in your chatbot
2. Find the conversation you want to convert
3. Open the conversation details
![Conversation details page](/img/evaluations/conversation_transcript.png)

---

### Step 2: Convert to Evaluation

1. Look for the **Convert to Evaluation** button (or similar action)
2. Click the button to start the conversion process

The system will redirect you to the Create Evaluation page with:
- Conversation turns pre-populated
- Chatbot automatically selected

![Convert to Evaluation button](/img/evaluations/convert_to_eval_button.png)

---

### Step 3: Review and Adjust Turns

The converted turns will initially be in **Mock mode**. You'll need to:

1. **Review each turn** to ensure accuracy
2. **Convert relevant ASSISTANT turns to Evaluation mode** for turns you want to test
3. **Add pass/fail criteria** for evaluation turns
4. **Verify tool responses** are configured correctly

![Pre-populated evaluation from conversation](/img/evaluations/conversation_turns_snapshot.png)

---

### Step 4: Add Evaluation Criteria

For each turn you want to test:

1. Toggle from **Mock** to **Evaluation** mode
2. Choose your approach (LLM-as-a-Judge, Exact, or Regex)
3. Define your pass/fail criteria

:::tip
Only convert turns to Evaluation mode for the specific behaviors you want to test. Leave other turns in Mock mode to provide context.
:::

---

### Step 5: Save and Test

1. Give your evaluation a descriptive name
2. Add a description explaining what scenario this tests
3. Click **Create Evaluation**
4. Run a test to verify it works as expected

---

## Turn Mapping

When converting a conversation, turns are mapped as follows:

| Conversation Role | Evaluation Turn Type |
|-------------------|---------------------|
| System | SYSTEM (read-only) |
| User | USER |
| Assistant | ASSISTANT (Mock mode initially) |
| Tool/Function | TOOL_RESPONSE |

---

## Best Practices

### Choose Representative Conversations

Select conversations that represent:
- Common user flows (happy paths)
- Edge cases and error scenarios
- Complex multi-turn interactions
- Tool-heavy interactions

### Focus Your Tests

Don't convert every turn to Evaluation mode. Instead:
- Focus on the critical assistant responses
- Test the final outcome rather than every intermediate step
- Keep evaluations targeted and maintainable

### Add Context in Descriptions

When creating the evaluation, add notes about:
- What scenario the conversation represents
- What specific behavior is being tested
- Any known issues or expected behaviors

---

## Example Workflow

1. **Identify an issue**: A user reports that the assistant gave an incorrect response
2. **Find the conversation**: Locate the problematic conversation
3. **Convert to evaluation**: Create a test case from the conversation
4. **Add fail criteria**: Specify that the incorrect response should fail
5. **Fix the assistant**: Update your chatbot configuration
6. **Re-run the test**: Verify the issue is resolved
7. **Keep as regression test**: The evaluation prevents future regressions

---

## Next Steps

Now that you understand evaluations, you can:

- Create comprehensive test suites for your assistants
- Automate quality assurance for your chatbots
- Build regression tests from production issues
