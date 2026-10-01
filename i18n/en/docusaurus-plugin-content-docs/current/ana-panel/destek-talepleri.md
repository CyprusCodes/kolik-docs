---
title: Support tickets
sidebar_position: 5
---

# Support tickets

Open [Support Tickets](https://app.kolik.co/dashboard/support-tickets) from the sidebar. A user with a selected organization can create a **New Ticket**. Employees see their own tickets; company and super administrators can view and respond to all organization tickets. The list shows subject, description, category, status, and created/updated dates. Administrators also see the sender and assignee.

## Create a ticket

1. Click **New Ticket**.
2. Fill in **Subject**, **Category**, and **Description**. Only active categories appear in the list.
3. Add a file if needed and watch upload progress. You can remove an incorrect file before submission.
4. Save. The ticket is created with **Open** status and the list refreshes.

An empty subject, description, or category produces a form error and blocks submission. If no category is available, an administrator needs to define an active one. If saving or uploading fails, the dialog stays open; read the error and try again.

## Review, discuss, and edit a ticket

Click the **eye** icon in the list to open a ticket. The details show its description, files, and conversation. The sender can **edit** their own ticket or remove it after **delete confirmation**. Administrators can reply and update the status. A newly received record may be highlighted with a **New** badge.

| Status | Meaning |
| --- | --- |
| Open (`open`) | The ticket was just opened. |
| Pending (`pending`) | Waiting for action or a response. |
| Pending Approval (`pending_approval`) | An approval step is required. |
| In Progress (`in_progress`) | Work is underway. |
| In Review (`in_review`) | The outcome is being reviewed. |
| Resolved (`resolved`) | A resolution was recorded. |
| Rejected (`rejected`) | The ticket was declined. |
| Closed (`closed`) | The ticket was closed. |

Administrators select a status under **Update Status** in the details panel; selecting a status alone does not send a message. Deleted tickets disappear from the ordinary list. If the list fails to load, the page displays an error; check the organization and connection, then refresh.

## Categories and special approval

Company and super administrators use **Manage Categories** to edit a category's name, description, and **active/inactive** status; add categories; or delete custom ones. Editing or deleting fixed system categories may be disabled.

The **Platform Bugs** tab is available only to a company administrator in a specific organization. For a ticket in that category with **Pending Approval** status, approval/rejection icons appear. It is normal for this tab or its icons to be absent in other organizations.

:::note Language of status labels
The frontend generates some list status labels from fixed English text. You may see labels such as `Open` or `In Progress` even in the Turkish interface; this does not mean the ticket was not saved.
:::
