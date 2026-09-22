---
sidebar_position: 2
---

# Facebook APIs

This guide will walk you through the process of setting up Facebook OAuth credentials to authenticate and authorize your cmnd integration to access Facebook APIs.

## Prerequisites

- **Facebook Developer Account**: You need a Facebook developer account to access the Facebook Developer Console.
- **App**: You’ll create a new app in the Facebook Developer Console.

---

## Steps to Set Up Facebook OAuth Credentials

### 1. **Create a Facebook Developer Account**

- Go to the **[Facebook Developer website](https://developers.facebook.com/)**.

- Log in with your Facebook account. If you don’t have an account, you’ll need to sign up.

- Complete the registration process to enable your developer account.

### 2. **Create a New App**

Once logged in, go to the **My Apps** section.

- Click the **Create App** button.

- In the **Choose an app type** dialog, select **Other**.

- Choose **Business** as the app type.

- Provide a **custom app name** and an **email address**.

- Click **Create App**.

### 3. **Add a New Product**

After creating the app, you’ll be redirected to your app’s dashboard.

- In the left sidebar, scroll to the **Add a Product** section.

- Under **Facebook Login**, click **Set up**.

### 4. **Configure Facebook Login Settings**

- In the left sidebar, go to **Facebook Login > Settings**.

- Configure the following:

- **Valid OAuth Redirect URIs**: Provide the URL to which Facebook will redirect users after successful login. For development, use:

  ```
  http://localhost:5173/redirect
  ```

  For the live cmnd app, use:

  ```
  https://app.cmnd.ai/redirect
  ```

- **Allowed Domains for the JavaScript SDK**: Add your domain to enable Facebook login on your site.

### 5. **Get Your App ID and App Secret**

- Go to **Settings > Basic** in the left sidebar.

- Here, you’ll find your **App ID** and **App Secret**. You’ll need these credentials to integrate Facebook login into your cmnd app.

### 6. **Download OAuth Credentials**

- Once you've configured Facebook Login, navigate to the **Settings** tab for your app.

- Download or securely store your **App ID** and **App Secret**, as they will be required when making requests to Facebook APIs.

---

## Required Scopes

When integrating Facebook login, you'll need to request the following scopes depending on your app’s requirements:

- **pages_show_list**: Allows your app to show a list of Pages the user manages.
- **pages_manage_posts**: Grants permission to create and manage posts on a Page.
- **business_management**: Allows your app to manage business assets.
- **pages_read_engagement**: Lets your app read engagement metrics for a Page.

---

## Conclusion

You have successfully set up Facebook OAuth credentials. You can now use the **App ID**, **App Secret**, and **Redirect URL** to integrate Facebook Login into your cmnd app. Ensure that your credentials, especially the `App Secret`, are kept secure and not exposed in public repositories.

For more information on using Facebook OAuth, you can refer to the [Facebook Login documentation](https://developers.facebook.com/docs/facebook-login/).
