# Google Form Setup Guide for XCheck Signup

## 📋 **Step-by-Step Instructions**

### **1. Create Google Form**
1. Go to [Google Forms](https://forms.google.com)
2. Click "Blank" to create a new form
3. Title: "XCheck - Get Started"
4. Description: "Join XCheck and revolutionize your product authentication"

### **2. Form Configuration**

#### **Form Settings:**
- **Collect email addresses**: ✅ Enabled
- **Limit to 1 response**: ❌ Disabled (allow multiple responses)
- **Edit after submit**: ❌ Disabled
- **Show progress bar**: ✅ Enabled
- **Shuffle question order**: ❌ Disabled
- **Show link to submit another response**: ✅ Enabled

#### **Presentation:**
- **Confirmation message**: "Thank you for your interest in XCheck! Our team will contact you within 24 hours."
- **Show link to submit another response**: ✅ Enabled

### **3. Form Questions (Add in this order)**

#### **Question 1: Full Name**
- **Type**: Short answer
- **Question**: "Full Name *"
- **Required**: ✅ Yes
- **Description**: "Please enter your complete name"

#### **Question 2: Email Address**
- **Type**: Short answer
- **Question**: "Email Address *"
- **Required**: ✅ Yes
- **Description**: "We'll use this to contact you"
- **Response validation**: Email

#### **Question 3: Company Name**
- **Type**: Short answer
- **Question**: "Company Name *"
- **Required**: ✅ Yes
- **Description**: "Your business or organization name"

#### **Question 4: Phone Number**
- **Type**: Short answer
- **Question**: "Phone Number *"
- **Required**: ✅ Yes
- **Description**: "Best number to reach you"

#### **Question 5: Company Size**
- **Type**: Multiple choice
- **Question**: "Company Size"
- **Required**: ❌ No
- **Options**:
  - 1-10 employees
  - 11-50 employees
  - 51-200 employees
  - 201-1000 employees
  - 1000+ employees

#### **Question 6: Industry**
- **Type**: Multiple choice
- **Question**: "Industry"
- **Required**: ❌ No
- **Options**:
  - Fashion & Apparel
  - Electronics
  - Pharmaceuticals
  - Food & Beverage
  - Luxury Goods
  - Automotive
  - Other

#### **Question 7: Interest Areas**
- **Type**: Checkboxes
- **Question**: "I'm interested in:"
- **Required**: ❌ No
- **Options**:
  - Product Authentication
  - Supply Chain Management
  - Brand Protection
  - Consumer Trust Solutions
  - Anti-Counterfeiting
  - Quality Assurance

#### **Question 8: Current Challenges**
- **Type**: Paragraph
- **Question**: "What are your current product authentication challenges?"
- **Required**: ❌ No
- **Description**: "Tell us about the problems you're facing"

#### **Question 9: Timeline**
- **Type**: Multiple choice
- **Question**: "When are you looking to implement a solution?"
- **Required**: ❌ No
- **Options**:
  - Immediately
  - Within 3 months
  - Within 6 months
  - Within 1 year
  - Just exploring

#### **Question 10: Additional Information**
- **Type**: Paragraph
- **Question**: "Additional Information"
- **Required**: ❌ No
- **Description**: "Any other details you'd like to share"

### **4. Form Styling**

#### **Theme Customization:**
- **Header image**: Upload XCheck logo
- **Color scheme**: Blue theme to match XCheck branding
- **Font**: Default (clean and professional)

### **5. Get Form Link**

1. Click "Send" button
2. Click the link icon (🔗)
3. Copy the form URL
4. The URL will look like: `https://forms.gle/XXXXXXXXXX`

### **6. Update Landing Page**

Replace `your-form-id-here` in the JavaScript with your actual Google Form URL:

```javascript
// In script.js, line 349:
window.open('https://forms.gle/YOUR-ACTUAL-FORM-ID', '_blank');
```

### **7. Test the Integration**

1. Open your landing page
2. Click any "Sign Up" button
3. Verify it opens the Google Form in a new tab
4. Test form submission
5. Check that responses appear in Google Sheets

### **8. Response Management**

#### **View Responses:**
1. In Google Forms, click "Responses" tab
2. Click "Create Spreadsheet" to link to Google Sheets
3. Responses will automatically populate in the spreadsheet

#### **Email Notifications:**
1. In Google Forms, click the three dots (⋮)
2. Select "Get email notifications for new responses"
3. Choose your notification frequency

### **9. Advanced Features (Optional)**

#### **Conditional Logic:**
- Add branching based on company size
- Show different questions for different industries

#### **File Upload:**
- Add option to upload company documents
- Set file size limits appropriately

#### **Integration:**
- Connect to CRM systems
- Set up automated email responses
- Create follow-up sequences

## 🎯 **Form URL Structure**

Your final form URL should be:
```
https://forms.gle/XXXXXXXXXX
```

## 📊 **Expected Results**

- **Professional appearance** matching XCheck branding
- **Comprehensive data collection** for lead qualification
- **Easy integration** with existing landing page
- **Automatic response tracking** in Google Sheets
- **Mobile-friendly** form experience

## 🔧 **Troubleshooting**

- **Form not opening**: Check URL is correct
- **Responses not appearing**: Verify form is published
- **Mobile issues**: Test on different devices
- **Styling problems**: Adjust theme settings

---

**Note**: Replace `your-form-id-here` in the JavaScript code with your actual Google Form URL once created.




