---
title: Bank details
sidebar_position: 3
---

# Bank details

[My Account → Bank Details](https://app.kolik.co/dashboard/account?tab=bank-details) lists your bank accounts for salary payments. Account cards may show the bank, account number/IBAN, currency, and **Active/Inactive** status. A warning appears if you have no active account. Information cards on the right explain usage and security; they are not separate settings.

## Add a bank account

1. Click **Add New Bank Account**.
2. Select a **Bank** and **Currency**, then enter the **Account holder name**.
3. Fill in at least one of **Account number** or **IBAN**. Optionally add a branch code, SWIFT, and the holder's identity/address/city/country details.
4. Save; the list reloads. **Edit** on an account card opens the same form with existing details. You can change the account's **Active/Inactive** status there.

An account number must be at least **5** characters. An IBAN must be at least **15** characters after removing spaces. SWIFT, if entered, must be **8–11** characters. Missing bank, currency, or account holder name produces a form error. Server validation errors appear in a notice at the top of the form.

:::note Saving and deletion
This tab supports **adding and editing** accounts, but account cards do not offer direct **deletion**. If an account is missing, first check that an employee record is linked to your account in the selected organization. A failed bank-list request shows an error area.
:::
