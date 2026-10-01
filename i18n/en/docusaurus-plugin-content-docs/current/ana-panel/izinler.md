---
title: Leave
sidebar_position: 4
---

# Leave

Open [Leave](https://app.kolik.co/dashboard/leaves) from the sidebar. The page has **All Leave** and **My Leave Requests** tabs. Review records in table view; authorized users such as company administrators and HR can also switch **All Leave** to calendar view.

## New leave request

Select **Create Leave Request**. If authorized, choose the employee, leave type, dates, and—when applicable—times. The form displays the employee's policy, available balance, and time to be deducted. For full-day-only types, there is no time selection. Enter a note when required. After **Create Request**, check the duration in the confirmation dialog and submit. See [Create a leave request](../admin-panel/izinler/izin-talebi-olusturma) for detailed steps.

Company administrators may also see **Bulk Import Used Leave** in the menu next to the button. This is different from submitting a new leave request. For the CSV template, preview, and balance impact, see [Bulk import used leave](../admin-panel/izinler/kullanilmis-izinleri-ice-aktarma).

## Review and resolve a request

Use **View** on a row to see the dates, type, note, and approval steps, if any. A pending request can be edited or cancelled according to the leave and workflow rules. Authorized approvers can use **Approve/Reject**; not every user can approve every request. The main statuses are **Pending**, **Approved**, **Rejected**, and **Cancelled**.

You can **Edit** your own pending request and cancel it from its details dialog. For administrator review, reasoned overrides, and undoing an approval before leave starts, see [Track and approve requests](../admin-panel/izinler/talep-takibi-ve-onay). An employee's entitlement by type and leave history are on their [profile → Leave](../admin-panel/izinler/calisan-politikasi-bakiye).

:::warning Balance or submission error
If the balance shows **Unknown** after selecting a type, check that the employee's policy includes the type and that an entitlement exists. Insufficient balance, a missing required note, or invalid dates/times can cause a form or submission error. Resolve workflow-based requests through the relevant approval button, not by manually changing the status.
:::
