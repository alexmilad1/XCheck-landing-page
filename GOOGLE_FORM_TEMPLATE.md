# XCheck Signup Form - Google Form Template

## 📝 **Form Title & Description**

**Title**: XCheck - Get Started
**Description**: Join XCheck and revolutionize your product authentication. Get started with our trusted verification platform.

## 🎨 **Form Theme**
- **Header**: Upload XCheck logo
- **Color**: Blue theme (#0066aa, #00d4ff)
- **Font**: Default (clean, professional)

## ❓ **Form Questions Structure**

### **1. Full Name** *(Required)*
- **Type**: Short answer
- **Question**: "Full Name *"
- **Description**: "Please enter your complete name"
- **Validation**: Required

### **2. Email Address** *(Required)*
- **Type**: Short answer  
- **Question**: "Email Address *"
- **Description**: "We'll use this to contact you"
- **Validation**: Email format, Required

### **3. Company Name** *(Required)*
- **Type**: Short answer
- **Question**: "Company Name *"
- **Description**: "Your business or organization name"
- **Validation**: Required

### **4. Phone Number** *(Required)*
- **Type**: Short answer
- **Question**: "Phone Number *"
- **Description**: "Best number to reach you"
- **Validation**: Required

### **5. Company Size** *(Optional)*
- **Type**: Multiple choice
- **Question**: "Company Size"
- **Options**:
  - 1-10 employees
  - 11-50 employees  
  - 51-200 employees
  - 201-1000 employees
  - 1000+ employees

### **6. Industry** *(Optional)*
- **Type**: Multiple choice
- **Question**: "Industry"
- **Options**:
  - Fashion & Apparel
  - Electronics
  - Pharmaceuticals
  - Food & Beverage
  - Luxury Goods
  - Automotive
  - Other

### **7. Interest Areas** *(Optional)*
- **Type**: Checkboxes
- **Question**: "I'm interested in:"
- **Options**:
  - Product Authentication
  - Supply Chain Management
  - Brand Protection
  - Consumer Trust Solutions
  - Anti-Counterfeiting
  - Quality Assurance

### **8. Current Challenges** *(Optional)*
- **Type**: Paragraph
- **Question**: "What are your current product authentication challenges?"
- **Description**: "Tell us about the problems you're facing"

### **9. Timeline** *(Optional)*
- **Type**: Multiple choice
- **Question**: "When are you looking to implement a solution?"
- **Options**:
  - Immediately
  - Within 3 months
  - Within 6 months
  - Within 1 year
  - Just exploring

### **10. Additional Information** *(Optional)*
- **Type**: Paragraph
- **Question**: "Additional Information"
- **Description**: "Any other details you'd like to share"

## ⚙️ **Form Settings**

### **General Settings:**
- ✅ Collect email addresses
- ❌ Limit to 1 response per person
- ❌ Edit after submit
- ✅ Show progress bar
- ❌ Shuffle question order
- ✅ Show link to submit another response

### **Presentation:**
- **Confirmation message**: "Thank you for your interest in XCheck! Our team will contact you within 24 hours to discuss your needs and how we can help."
- **Show link to submit another response**: ✅ Enabled

## 🔗 **Integration Steps**

1. **Create the form** using the structure above
2. **Customize the theme** with XCheck branding
3. **Publish the form** and get the shareable link
4. **Update the JavaScript** in `script.js` line 349:
   ```javascript
   window.open('https://forms.gle/YOUR-ACTUAL-FORM-ID', '_blank');
   ```

## 📊 **Response Management**

### **Google Sheets Integration:**
1. In Google Forms, click "Responses" tab
2. Click "Create Spreadsheet" 
3. Responses will auto-populate in Google Sheets
4. Set up email notifications for new responses

### **Data Collection:**
- All responses stored in Google Sheets
- Easy export to CSV/Excel
- Real-time updates
- Email notifications for new submissions

## 🎯 **Expected Outcomes**

- **Professional lead capture** with comprehensive data
- **Easy integration** with existing landing page
- **Mobile-responsive** form experience
- **Automatic data management** in Google Sheets
- **Branded experience** matching XCheck identity

---

**Next Step**: Create the Google Form using this template, then update the JavaScript with your actual form URL.




