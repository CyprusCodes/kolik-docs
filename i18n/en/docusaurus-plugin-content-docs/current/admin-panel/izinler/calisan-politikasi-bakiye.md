---
title: Employee policy, balance, and history
sidebar_position: 7
---

# Check an employee's leave entitlement

Open an employee on [Employees](https://app.kolik.co/dashboard/employees), then select **Leave**. This page shows the actual entitlements produced by the policy rules for that employee and their request history. Authorized users who can change a policy assignment also see **Leave Configuration**.

## Overview: which balance is available?

The **Overview** includes remaining leave, used leave this year, and annual entitlement cards. Leave granted through daily or monthly accrual also shows the amount accrued to date. In **Entitlements by leave type**, inspect each linked type's entitled, accrued (if applicable), used, and remaining amounts separately. Remaining time may be shown in days and hours; fractional days are converted using the policy's hours per working day.

If an age exception or seniority bonus applies, its explanation appears next to the entitlement. For per-event leave, the displayed amount is the limit for each request; unlimited types show that they are unlimited instead of a balance. **Leave History** lists type, dates, status, and notes.

:::tip If a new type is absent from the request form
Check the types in this table first. If the new type is missing here, check the employee's applicable policy, that the type is linked to it, and that its entitlement rule is saved. If it appears here but not in the form, check the policy's [custom type visibility setting](./politika-hesaplama-ayarlari). **Balance unknown** is different from **0 days remaining**: it can mean the balance data could not be loaded or a relevant record is missing.
:::

## Leave Configuration: assign a policy

This tab is available only to users with permission to manage policies.

1. Select a policy under **Assigned policy**. Only **active** policies are listed; a draft must be [published](./politika-ve-haklar) first.
2. Choose an **Effective start date** and click **Save Changes**. You cannot pick a date earlier than the existing assignment's start.
3. Review the current and previous assignments and whether the policy comes directly, from a department, or from the organization.
4. Review the type rules and any age/seniority adjustments in the policy entitlement cards. Return to **Overview** and verify the balance.

A direct employee assignment can override a department or organization default. Changing a department default does not automatically transfer existing employees to another policy.

## Employee-specific approval order

Under **Leave Configuration → Approval Workflow**, an employee normally uses the [organization's default order](./onay-akisi). If they need a different order, enable **custom approval workflow**, edit its steps and approvers, and click **Save Changes**. Removing it restores the organization default. This setting changes who approves requests, not the leave allowance.

## Correct leave history

A company administrator can edit or delete records in an employee's leave history that **started this year**. Previous years are disabled in the UI. When deleting approved leave, read the warning about returning the deducted time to the balance. Changing an approved request's duration may also show a confirmation with the balance difference. For many previously used leave records, consider [CSV import](./kullanilmis-izinleri-ice-aktarma).

See [track and approve requests](./talep-takibi-ve-onay) to follow a request in the daily list, cancel your own pending request, or approve one.
