---
title: Approval workflow
sidebar_position: 6
---

# Configure the leave approval workflow

Set the organization's default approval order on [Admin Panel → Leave → Approval Workflows](https://app.kolik.co/dashboard/admin-panel?tab=leave&sub=approval-workflows).

1. Click **Add Step** to create an approval step.
2. Select **Line Manager**, **Role**, or **Specific Person** as the approver type. **Specific Person** requires an active organization user.
3. If there are multiple steps, reorder them with the up/down arrows; remove unnecessary steps.
4. Click **Save Changes**.

The system resolves the workflow in this order: **employee-specific workflow → organization default**. If an employee-specific workflow exists, it takes precedence; otherwise, the organization workflow is used.

For an employee-specific order, open [employee profile → Leave → Leave Configuration](./calisan-politikasi-bakiye), enable **custom approval workflow**, edit the steps, and save. This does not change the default order for other employees.

For approval actions, see [Leave Requests → Track and approve requests](./talep-takibi-ve-onay). When a workflow is active, **Approve/Reject** is available only to the authorized person at the current step. An administrator using an override must enter a reason.

:::note
Adding or reordering steps changes only the draft shown on screen. Click **Save Changes** to keep them.
:::
