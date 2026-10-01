---
title: Track and approve requests
sidebar_position: 9
---

# Track and resolve a leave request

[Leave Requests](https://app.kolik.co/dashboard/leaves) has **All Leave** and **My Leave Requests** tabs. In **All Leave**, filter by type, employee, dates, status, and other fields. Company administrators, HR managers, and super administrators can also switch to calendar view. Visible records and actions depend on role and approval permissions.

## Your own request

1. In **My Leave Requests**, open **View** to inspect the dates, type, note, and any approval workflow.
2. For a **Pending** request, use **Edit** to change dates/times or other permitted fields, then **Save**. Check the updated row again.
3. You can use **Cancel Leave Request** in the details dialog for your own pending request. This action is not offered for approved or rejected requests.

An end date must be after the start when dates change. Types that disallow hourly requests do not show time selection. Holidays and non-working days are blocked or excluded according to the applicable policy's calculation settings.

## Approve another person's request

If authorized, open the review action for another person's pending request in **All Leave**. With an approval workflow, the details show the current step, expected approver, and previous events. Only the next authorized approver can use **Approve** or **Reject**. If a company administrator has override permission, they may force approval or rejection by entering a **reason**; those buttons stay disabled without one.

In the older flow without an approval workflow, an authorized administrator can select a status in the review dialog. For workflow-based requests, do not try to approve by changing the status through an ordinary edit action; use the workflow's approval buttons. If no approver can be found, the UI may warn that an administrator override is needed.

## Undo approval and correct history

Authorized administrators may see **Undo Approval** in **All Leave** for an **approved** request whose start date has not arrived. After confirmation, the request returns to **Pending**. This table action is unavailable for approved requests that have already started or are in the past.

In the employee profile under **Leave → Overview → Leave History**, company administrators have separate edit/delete actions for this year's records. Changing the duration or deleting an approved record can affect the balance; check the warning and final amount. See [employee policy, balance, and history](./calisan-politikasi-bakiye).

:::note Statuses
The main statuses are **Pending**, **Approved**, **Rejected**, and **Cancelled**. The list and approval workflow show the current status. If an action is unavailable, it is often due to the request status or the user's role/position in the approval order.
:::
