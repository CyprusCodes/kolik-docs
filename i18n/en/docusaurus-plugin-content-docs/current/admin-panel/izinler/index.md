---
title: "Leave: admin guide"
sidebar_position: 1
---

# Get started with leave management

This guide follows the process from defining a leave type to submitting an employee leave request. **Admin Panel → Leave** has three tabs: **Policies**, **Leave Types**, and **Approval Workflows**.

![Four-step setup flow from leave type to request](/img/en/admin/leave-setup-flow.svg)

*Illustrative diagram, not a screenshot.*

## Where do I perform each task?

| Task | Kolik screen | Guide |
| --- | --- | --- |
| Define a type such as Annual Leave or Hourly Leave | [Admin Panel → Leave → Leave Types](https://app.kolik.co/dashboard/admin-panel?tab=leave&sub=leave-types) | [Create a leave type](./izin-turu-olusturma) |
| Set entitlement, paid/unpaid status, and accrual | [Admin Panel → Leave → Policies](https://app.kolik.co/dashboard/admin-panel?tab=leave&sub=policies) | [Policies and entitlements](./politika-ve-haklar) |
| Configure detailed rules for a type in a policy | Policy → **Leave Types** → **Edit Rules** | [Leave type rules](./izin-turu-kurallari) |
| Configure working days, hours, and holiday counting | Policy → **Calculation Settings** | [Calculation settings](./politika-hesaplama-ayarlari) |
| Set the department default for new hires | [Organization Structure → Departments](https://app.kolik.co/dashboard/admin-panel?tab=organization-structure&subTab=departments) | [Departments](../organizasyon/departmanlar) |
| Set the order of approvers | [Admin Panel → Leave → Approval Workflows](https://app.kolik.co/dashboard/admin-panel?tab=leave&sub=approval-workflows) | [Approval workflow](./onay-akisi) |
| Assign an employee's policy and inspect balance/history | [Employees](https://app.kolik.co/dashboard/employees) → employee profile → **Leave** | [Employee policy and balance](./calisan-politikasi-bakiye) |
| Submit a request for yourself or an employee | [Leave Requests](https://app.kolik.co/dashboard/leaves) | [Create a leave request](./izin-talebi-olusturma) |
| View, edit, cancel, or approve a request | [Leave Requests](https://app.kolik.co/dashboard/leaves) | [Track and approve requests](./talep-takibi-ve-onay) |
| Import previously used leave from CSV | [Leave Requests](https://app.kolik.co/dashboard/leaves) → menu next to the create button | [Bulk import used leave](./kullanilmis-izinleri-ice-aktarma) |

:::important A leave type does not grant an entitlement by itself
Creating a type only adds it to the catalog. To make it available in an employee's request form, **attach it to that employee's applicable leave policy** and save the entitlement rules. The request form lists types from the applicable policy, not every type in the organization.
:::

Only organization administrators and super administrators can open the Admin Panel. Other roles may also create leave requests; requesting on another person's behalf depends on permissions.

## Setup checklist

1. Create a leave type or select a system type. Configure hourly requests and required notes at the type level.
2. Attach the type to the relevant policy. Save its entitlement, accrual, carryover, seniority, and any age-exception rules.
3. Review the policy's working hours, workdays, and public-holiday rules. Publish a draft policy when it is ready.
4. In **Employees → Leave**, confirm whether the policy applies directly, through a department default, or through the organization default. Check the type-specific entitlement and remaining balance.
5. Configure the organization's approval workflow; add an employee-specific workflow only when needed.
6. Submit a test request and check the deducted duration, required note, and approver actions.

:::tip If the new type is missing or the balance is unknown
Creating the type alone is not enough. Check that it is attached to the employee's applicable policy, its entitlement rules are saved, the policy is active, and custom types are visible to employees. The type-specific balance table in the employee profile is the best place to check before using the request form.
:::
