---
title: Policies and leave entitlements
sidebar_position: 3
---

# Attach a leave type to a policy

Creating a leave type and granting employees an entitlement to it are separate steps. On [Admin Panel → Leave → Policies](https://app.kolik.co/dashboard/admin-panel?tab=leave&sub=policies), open an existing policy or select **Create Policy**.

## Add a type to an existing policy

1. Open the policy row.
2. Go to **Leave Types**.
3. Click **Attach leave types**, choose a type, and click **Save Changes**.
4. Open **Edit Rules** on that type's row.
5. In **Entitlement**, configure paid/unpaid status, limit type, and base days. See [leave type rules](./izin-turu-kurallari) for the other tabs, then save.
6. If this is a new draft policy, click **Publish** once it is ready for employees.

**Example:** Allowing hourly requests for “Hourly Leave” does not automatically create a 12-day balance. A policy rule of **12 days per year** provides that allowance. The daily working hours used for day/hour conversion come from the policy's [Calculation Settings](./politika-hesaplama-ayarlari).

:::note Check the policy assignment
The policy's **Overview** tab shows assigned employees and whether assignment is **Direct**, through a **Department Default**, or through the **Organization Default**. Opening an employee row takes you to their **Leave** tab. If a new type is missing from an employee's request form, first verify the employee's applicable policy and whether the type is attached. Also check **Calculation Settings → Employees may only use system default leave types**: when enabled, custom types are hidden from the employee request form.
:::

## When creating a new policy

In **Create Policy**, enter a name and optional description. You can copy an existing policy's rules or start from scratch. **Start as draft** is selected initially; turning it off creates an active policy. Draft policies are not offered for employee assignment. Publish the draft when its rules are ready.

| Tab | Purpose |
| --- | --- |
| **Overview** | Rename the policy and see assigned employees and assignment sources. |
| **Leave Types** | Attach catalog types and open each type's rule page. Removing a type here does not delete it from the catalog or invalidate historical leave. |
| **Calculation Settings** | Set working days/hours, holiday counting, and custom-type visibility for this policy. |

See the [Departments guide](../organizasyon/departmanlar) for setting a department default for new hires. Existing employees are not moved automatically by that setting.

## Policy list and deletion

The policy list shows each policy's number of linked types, assigned employees, and last update date. Open a row to visit its **Overview**, **Leave Types**, and **Calculation Settings** tabs. In **Overview**, you can rename the policy and inspect assignment sources.

The default policy cannot be deleted. Deleting another policy requires confirmation, and the server may reject deletion while employees are still assigned. Move those employees to another active policy first, and consider how the change affects existing entitlements. See [change an employee's policy](./calisan-politikasi-bakiye).
