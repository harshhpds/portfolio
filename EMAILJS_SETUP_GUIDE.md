# EmailJS Setup Guide for Harsh's Portfolio

## 🚀 Quick Setup Instructions

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In your EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose **Gmail** (recommended)
4. Service ID: `service_harsh_portfolio`
5. Connect your Gmail account (harshabhang@gmail.com)
6. Click **"Create Service"**

### Step 3: Create Email Template
1. Click **"Email Templates"**
2. Click **"Create New Template"**
3. Template ID: `template_harsh_contact`
4. Use this template content:

```html
Subject: New Portfolio Contact: {{subject}}

Hello Harsh,

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to: {{reply_to}}
```

### Step 4: Get Your Public Key
1. Go to **"Account"** → **"General"**
2. Copy your **Public Key**

### Step 5: Update the Code
1. Open `/workspace/shadcn-ui/src/lib/emailjs.ts`
2. Replace `YOUR_EMAILJS_PUBLIC_KEY` with your actual public key:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_harsh_portfolio',
  TEMPLATE_ID: 'template_harsh_contact',
  PUBLIC_KEY: 'your_actual_public_key_here' // Replace this!
};
```

### Step 6: Test the Contact Form
1. Preview your portfolio website
2. Fill out the contact form
3. Submit a test message
4. Check your Gmail inbox for the message

## 📧 Template Variables Used
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{reply_to}}` - Reply-to email address

## 🔧 Troubleshooting
- **No emails received?** Check your spam folder
- **Template errors?** Verify variable names match exactly
- **Service issues?** Ensure Gmail service is properly connected
- **Public key errors?** Double-check the key is copied correctly

## 💡 Free Tier Limits
- 200 emails/month
- Perfect for portfolio contact forms
- Upgrade available if needed

## 🎯 Current Status
✅ EmailJS package installed
✅ Contact form configured
✅ Template structure ready
⏳ **Needs: Your EmailJS public key**

Once you complete the setup, your contact form will send emails directly to harshabhang@gmail.com!