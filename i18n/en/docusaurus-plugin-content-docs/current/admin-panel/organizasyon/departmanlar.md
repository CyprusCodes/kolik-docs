---
title: Departments and leave defaults
sidebar_position: 1
---

# Department settings

On [Admin Panel → Organization Structure → Departments](https://app.kolik.co/dashboard/admin-panel?tab=organization-structure&subTab=departments), use **Add Department** to create one, edit an existing department, or open its details by clicking its name or **View**.

The details page has two active tabs: **People** and **Leave Defaults**. People lists employee names, positions, and start dates. A department-level **Approval Workflow** tab exists in the code but is currently hidden; do not confuse it with the organization's [Approval Workflows](../izinler/onay-akisi) page.

![Diagram distinguishing department defaults from actions for existing employees](/img/en/admin/department-leave-defaults.svg)

*Illustrative flow diagram, not a screenshot.*

## Leave policy for new hires

1. Open **Leave Defaults** in the department details.
2. Under **Default policy for new hires**, choose a published/active policy. Drafts are not listed.
3. Set the **Applies to employees hired from** date and click **Save Changes**.

This affects **future hires only**. It does not automatically move existing employees in the department to the new policy.

## Reassign existing employees

**Reassign existing employees** shows how many people are on a different policy and how their current policies are distributed. If you want to move them, click **Reassign … employees**, select an **Effective start date**, read the warning, and confirm. The dialog checks the number of eligible employees with the server again.

:::caution Bulk action
Reassignment is a one-time bulk action with no bulk undo. Existing balances are preserved, but the policy rules applied from the selected effective date change. Before confirming, check the number of employees, target policy, and date.
:::

For linked leave types and entitlement rules, see [Policies and leave entitlements](../izinler/politika-ve-haklar).
