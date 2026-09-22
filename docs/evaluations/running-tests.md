---
id: running-tests
title: Running Tests
sidebar_position: 3
---

# Running Tests

Once you've created an evaluation, you can run tests to verify your AI assistant's behavior. Tests run in the background, so you can leave the page and continue working.

## Running a Test

### From the Edit Evaluation Page

1. Navigate to **Evaluations** in the sidebar
2. Click on an evaluation name to open the **Edit Evaluation** page
3. Click the **Run Test** button in the right sidebar panel

![Edit Evaluation page with Test panel](/img/evaluations/edit_evaluation_page.png)

:::tip Background Execution
When you click **Run Test**, the test starts running in the background. You can leave the page and continue working — the test will complete even if you navigate away.
:::

---

## Test Results Panel

On the right side of the Edit Evaluation page, you'll see the **Test Panel** which displays:

- **Run Test button**: Click to start a new test
- **Past 5 test results**: A list of recent runs showing:
  - Status (pending, running, completed, failed)
  - Score/pass rate
  - Conversation snapshot preview
  - **View Details** button to see full results

![Test panel with past test results](/img/evaluations/recent_runs_in_test_panel.png)

---

## Viewing Test Details

Click **View Details** on any test run to open the **Run Details Page** with:

- Complete conversation timeline
- Pass/fail status for each turn
- Judge responses and reasoning
- Token usage and timing information

---

## Runs Tab (All Runs)

To see all test runs across all evaluations:

1. Go to the **Evaluations** page from the sidebar
2. Click the **Runs** tab
3. View a consolidated list of all test runs
4. **Filter by evaluation name** to see runs for a specific evaluation
5. Click **View Details** in the Actions column to see run details

![Runs tab with filter by evaluation name](/img/evaluations/runs_tab_on_evaluations_page.png)

---

## Next Steps

- [Viewing Results](./viewing-results) - Understand how to interpret test results
