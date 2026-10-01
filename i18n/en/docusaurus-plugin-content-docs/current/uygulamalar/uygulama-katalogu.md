---
title: App catalog and access
sidebar_position: 2
---

# App catalog and access

Open the [Apps page](https://app.kolik.co/dashboard/apps). Cards show each app's name, description, category, and a **Beta** label when applicable. Their order follows the catalog display order. Company and super administrators can access this page.

## Enable or disable an existing app

1. Find the relevant app card.
2. Turn its toggle **on** to enable the app for the organization or **off** to disable it.
3. After the action completes, the app list reloads. Open an enabled module with the dashboard app switcher or your organization's **Apps** sidebar.

The toggle changes organization access only. It does not create a new inventory item or vehicle, for example. Access changes also affect other users' module menus; already open pages may need a refresh.

## Create a catalog app

This is for **super administrators only**. Click **New App** at the top right. Enter the **slug**, **name**, **description**, **icon key**, **category**, **sidebar route**, **display order**, and **Beta** setting, then save. `sidebarRoute` must point to an existing frontend page. After creation, the app must also be enabled for the organization.

:::warning Important distinction
Creating a catalog entry does not develop a functioning new module. Changes to the slug, route, or icon can affect existing navigation. Verify that the frontend screen and module menu exist before changing them.
:::

## Edit or delete a catalog app

A super administrator can open the same form with the card's **edit** icon. **Delete** opens a confirmation dialog; remove an app entry only when it is genuinely unused. Company administrators do not see these icons; they can only enable or disable existing apps.

## Where does a module appear?

Enabled modules with configured routes appear in the app switcher, alongside a **Main App** option. In some organizations, app links appear in the sidebar instead. Additional role filters apply: for example, **Performance** and **Timesheets** are not shown to non-administrators in the app switcher. Screens within a module can also enforce their own permissions.
