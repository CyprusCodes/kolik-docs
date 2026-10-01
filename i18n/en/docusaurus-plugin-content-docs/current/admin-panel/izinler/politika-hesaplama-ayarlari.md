---
title: Policy calculation settings
sidebar_position: 5
---

# Working schedule and leave calculation

Open the policy on [Leave Policies](https://app.kolik.co/dashboard/admin-panel?tab=leave&sub=policies) and select **Calculation Settings**. These settings belong **only to the selected policy**; they do not automatically change another policy's days or hours.

## Working schedule

1. Select working days and set start and end times for each one.
2. Enter **Hours** on each day row. This determines how many hours a full-day request deducts for that day; it does not have to equal the difference between the start and end times.
3. Set **Hours per working day** separately. This converts type entitlements from days to hours. For example, at eight hours per day, a 12-day entitlement is 96 hours.
4. Enable **Exclude non-working days** if weekends or other non-working days should not count against requests.
5. Click **Save Changes**.

## Public holidays and custom types

- With **Exclude public holidays from leave counting** on, selected holidays are not deducted. If the holiday selection is empty, all defined public holidays are excluded.
- With **Employees may only use system default leave types** on, linked custom types are hidden from employees' request forms; HR can still record leave for an employee using them. Check this setting if a new custom type is missing from an employee's form.

:::caution Effect on existing balances
Changing the working schedule may not recalculate existing leave balances automatically; the UI may suggest recalculating the policy. Changing **Hours per working day** may update the hour balances of existing entitlements at the new ratio and show how many records were affected. Review the impact before saving.
:::
