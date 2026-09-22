---
sidebar_position: 1
---

# Google APIs

This guide will walk you through the process of setting up Google OAuth 2.0 credentials to authenticate and authorize your cmnd integration to access Google APIs.

## Prerequisites

- **Google Account**: You’ll need a Google account to access the Google Cloud Console.
- **Google Cloud Project**: Create or use an existing project in Google Cloud Console.

---

## Steps to Set Up Google OAuth 2.0 Credentials

### 1. **Create a Google Cloud Project**

**a.** Go to the [Google Cloud Console](https://console.cloud.google.com/).

**b.** In the top left corner, click the project dropdown and select **New Project**.

**c.** Provide a **Project Name** and optionally, choose an organization and location.

**d.** Click **Create**.

### 2. **Enable the Google APIs**

**a.** In the Google Cloud Console, navigate to the **API & Services** section in the sidebar.

**b.** Click **Enable APIs and Services**.

**c.** Use the search bar to search for the specific API you want to use (e.g., Google Drive API, Google Calendar API, etc.).

**d.** Once found, click on the API and select **Enable**.

### 3. **Configure OAuth Consent Screen**

Before creating OAuth 2.0 credentials, you need to configure the OAuth consent screen, which is shown to users when they log in with Google.

**a.** In the **API & Services** menu, select **OAuth consent screen**.

**b.** Choose your **User Type**:

      - **External**: Choose this if the cmnd integration is for external users (like general users on the web).
      - **Internal**: Choose this if the cmnd integration is for users within your organization.

**c.** Click **Create**.

**d.** Fill in the required fields:

      - **App name**: Enter a name that will be displayed on the consent screen.
      - **User support email**: Provide a support email that users can contact.
      - **Developer contact information**: Enter your email to receive notifications.

**e.** Optionally, add a logo and other optional fields.

**f.** Click **Save and Continue**. You can skip scopes as you will need different scopes depending on the API service.

### 4. **Create OAuth 2.0 Credentials**

Now that the consent screen is configured, you can create the credentials.

**a.** In the **API & Services** menu, go to **Credentials**.

**b.** Click on **Create Credentials** and choose **OAuth 2.0 Client IDs**.

**c.** Select the **Application Type**:

      - **Web Application**: Choose this when you're setting up for cmnd integration.

**d.** For **Web Application**, you will need to provide:

      - **Authorized redirect URLs**: This is where Google will redirect the user after successful authentication. For development, it can be something like:

        ```
        http://localhost:3000/oauth2/callback
        ```
      - **For the live cmnd app**: you should use it like :

            ```
            http://app.cmnd.ai/redirect
            ```

**e.** Click **Create**.

**f.** Once the credentials are created, you’ll be provided with a **Client ID** and **Client Secret**. These are the credentials your cmnd integration will use to authenticate users via Google.

### 5. **Download the OAuth 2.0 Credentials**

After creating the credentials, you can download the JSON file containing your OAuth 2.0 credentials.

**a.** In the **Credentials** section, find the OAuth client you just created.

**b.** Click the download icon (a downward arrow) to download the credentials as a `.json` file. This file contains:

      - `client_id`
      - `client_secret`
      - `redirect_url`

This file is critical and should be kept secure, as it includes sensitive information.

### 6. **Use OAuth 2.0 Credentials in Your App**

- In your cmnd integration set up, you will use the **client ID**, **client secret**, and **redirect URL** from the credentials file to request authorization tokens and access Google APIs on behalf of users.

---

## Conclusion

You have successfully set up Google OAuth 2.0 credentials. Now, you can integrate these credentials into your application to authenticate users and access Google APIs. Always ensure that your credentials, especially the `client_secret`, are kept safe and not exposed in public repositories or logs.

For more information on using OAuth 2.0 with Google, you can refer to the [Google OAuth 2.0 documentation](https://developers.google.com/identity/protocols/oauth2).

---
