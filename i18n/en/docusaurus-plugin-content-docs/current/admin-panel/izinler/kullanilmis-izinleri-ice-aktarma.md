---
title: Bulk import used leave
sidebar_position: 10
---

# Record previously used leave from CSV

This differs from submitting a new leave **request**: it imports existing used-leave records in bulk. On [Leave Requests](https://app.kolik.co/dashboard/leaves), a company or super administrator can choose **Bulk Import Used Leave** from the menu next to **Create Leave Request**.

1. Download the **sample CSV template** from the dialog.
2. Enter one employee and leave period per row. Columns are `email`, `start_date`, `end_date`, `leave_type`, and `notes`. Follow the template's `YYYY-MM-DD HH:mm:ss` date/time format. The sample includes a row with no type or note; when the type is blank, the preview shows **Annual Leave**. Verify the destination type before importing.
3. Choose the CSV file. The system **validates** rows first but does not import them yet.
4. Use **All / Valid / Invalid** to review rows and error messages. The preview shows each employee's current balance, time to be used, and estimated new balance.
5. Correct and re-upload the file if necessary. **Import valid records** submits only rows that pass validation; it is unavailable if none are valid.
6. Check the counts of imported and failed/skipped rows in the result. Then verify the [employee balance and history](./calisan-politikasi-bakiye).

:::caution Live balance impact
Review each **new balance** preview carefully. Historical, partial-day, or hourly records can change the employee's displayed usage. Avoid importing the same leave twice.
:::
