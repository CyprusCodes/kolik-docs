---
title: Leave type rules
sidebar_position: 4
---

# Edit a leave type's rules within a policy

Open the policy on [Leave Policies](https://app.kolik.co/dashboard/admin-panel?tab=leave&sub=policies). Under **Leave Types**, click the relevant type row or **Edit Rules**. For example, `/leave-policies/1/types/8` is the rule page for linked type 8 in policy 1; `8` is not necessarily the catalog leave type's ID. These IDs vary by organization, so navigate from your own policy instead of using the example address.

Rules are stored separately for each type-policy combination. **Allow Hourly Requests** and **Note Required**, selected when creating the catalog type, are not entitlement settings on this page.

![Relationship between a policy, linked leave type, and rule tabs](/img/en/admin/leave-policy-rules.svg)

*Illustrative diagram, not a screenshot.*

## Rule tabs

| Tab | What you can configure |
| --- | --- |
| **General** | View the catalog type name; set display color, description, applicable gender, and internal code. |
| **Entitlement** | Paid/unpaid status, allowance limit, base days, maximum per request, negative balance, and optional age exceptions. |
| **Accrual** | Grant the annual allowance upfront, daily, or monthly; set leave-year start and any waiting period. |
| **Carryover** | Reset, carry over, cap, or pay out unused days at year-end. |
| **Seniority** | Add extra days after specified years of service. |

The code contains a **Request Rules** tab, but a feature flag currently hides it. The steps below cover the five accessible tabs.

## General

- **Type name** comes from the catalog and cannot be changed here. The [Leave Types](./izin-turu-olusturma) list also has no rename action. If a different name is required, consider existing policy links and historical requests before creating a new type.
- Select a preset **Display color** or **No color**. **Description** and **Internal code** are optional; the code can map this type to other systems.
- **Applicable gender** offers **Everyone**, **Male only**, and **Female only**. According to the UI description, employees without a recorded gender can still see the type.

## Entitlement

**Payment → Paid leave** determines whether days taken under this type are paid.

### Limit type and base allowance

| Option | Meaning | Base allowance field |
| --- | --- | --- |
| *Limited per year* | Annual capped allowance. | **Annual base days** |
| *Limited per month* | Allowance granted at the beginning of each calendar month. Unused days do not roll over. | **Monthly base days** |
| *Limited per event* | Allowance granted for each occurrence. | **Days per event** |
| *Unlimited* | No balance limit or tracking. | No day amount. |

For example, **Limited per year + Annual base days: 12** gives a base allowance of 12 days per year. Marking a type “hourly” does not itself grant 12 days or any other balance. The read-only **Hours per day** value comes from the policy's [Calculation Settings](./politika-hesaplama-ayarlari) and is used in the hours preview.

### Other entitlement limits

- **Maximum Leave Duration:** Choose **Limited** and enter **Days per request** to cap a single request. **Unlimited** removes only this per-request cap; it does not make the balance unlimited.
- **Negative balance:** Choose **Not allowed**, **Unlimited**, or **Limited to a maximum**. For the last option, enter **Maximum negative days**. Negative balance rules do not apply to an *Unlimited* entitlement, which does not track a balance.
- **Age exceptions:** Optionally set separate day amounts for employees **under 18** and **50 or older**. Each amount **replaces** the base allowance for that age group; seniority additions are applied afterward. Setting it below the base amount reduces that group's allowance.

## Accrual

This tab applies to **limited-per-year** allowances. Choose daily, monthly, or yearly/upfront (*Yearly*) **Accrual frequency**. With yearly/upfront, the full allowance is granted at the start. **Monthly** also requires an **Accrual day** (1–28 or the last day) and a **Rounding** choice (*No rounding*, half day, or whole day).

The **Leave year start** can be *Calendar year* or *Employment anniversary*. Daily/monthly accrual includes an **Continue accruing while on leave** toggle. If **Waiting period for new hires** is enabled, enter the period in months; otherwise employees can use leave from day one.

## Carryover

Set what happens to the remaining days at the end of a limited annual leave year:

| Option | Effect / additional field |
| --- | --- |
| *Reset to zero* | Clear unused days. |
| *Carry over everything* | Carry over all remaining days. |
| *Carry over up to a maximum* | Enter **Maximum carried-over days**. |
| *Carry over up to a maximum, with an expiry date* | Enter the maximum and **Expiry date**. |
| *Cap the standing balance* | Keep the total accumulated balance below **Maximum standing balance** continuously, not only at year-end. |
| *Pay out unused days, then reset* | Pay out unused days and clear the balance. |

**Carryover decision date** sets the day/month on which the balance is evaluated. Carryover does not apply to types without a limited annual allowance.

## Seniority

Turn on **Extra days by years of service** and click **Add tier**. Each row specifies **After years of service** and **Extra days**. The page previews the total of the base allowance and tiers. Seniority can also apply to per-event allowances, but not unlimited ones.

## Save and review

Click **Save leave type** at the top. If a tab shows an error indicator, correct the relevant field. Leaving with unsaved changes triggers a warning.

:::note Monthly limits
For **Limited per month**, **Accrual** and **Carryover** are disabled because the allowance renews monthly. They may appear for per-event or unlimited types, but their settings do not apply.
:::
