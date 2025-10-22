# 🌟 QAIS SHITTU — Stage 1: Profile Wizard Portal  

A fully responsive, accessible, and testable **multi-page web project** built using **semantic HTML**, **Tailwind CSS**, and **vanilla JavaScript**.  
This expanded project builds on the original *Profile Card* challenge to include **About** and **Contact** pages — demonstrating mastery of frontend structure, accessibility, navigation, and user interaction.

---

## 🧭 Overview  

The **Profile Wizard Portal** now includes:  
- A **Profile Page** displaying user info, avatar, hobbies, and dislikes.  
- An **About Page** with detailed bio, goals, challenges, and a personal note.  
- A **Contact Page** with a fully accessible form and success modal confirmation.  
- A shared **custom Navbar** and **Footer** for consistent navigation.  

Each page uses semantic HTML, descriptive `data-testid` attributes, and fully accessible components that are keyboard-friendly and screen-reader compatible.

---

## 🧩 Features  

✅ Semantic, accessible, and responsive HTML structure  
✅ Tailwind CSS for styling and layout consistency  
✅ JavaScript-powered live time updates  
✅ Modal confirmation for form submission  
✅ Email validation with `aria-describedby` for accessibility  
✅ Keyboard navigability and visible focus outlines  
✅ Component-based structure using `<custom-navbar>` and `<custom-footer>`  
✅ Smooth transitions and hover animations  
✅ All testable with `data-testid` attributes  

---

## 📂 Project Structure  

frontend-wizards-portal/
│
├── index.html # Profile card page
├── about.html # About Me page (semantic + testable)
├── contact.html # Contact form with modal + validation
│
├── css/
│ ├── style.css # Global styles & overrides
│ └── responsive.css # Responsive rules
│
├── js/
│ ├── script.js # Live time and global scripts
│ └── form-validation.js # Handles validation, modals, and accessibility
│
├── components/
│ ├── navbar.js # Custom <custom-navbar> element
│ └── footer.js # Custom <custom-footer> element
│
└── assets/
└── images/
└── my-picture.jpg # User avatar

markdown
Copy code

---

## ⚙️ How It Works  

- **Live Time:** Updates dynamically every second using `Date.now()`.  
- **Form Validation:** Ensures all fields are filled and the email is valid before submission.  
- **Modal Display:** Shows a success message once the contact form is submitted successfully.  
- **Accessibility:**  
  - All inputs have `<label>` elements linked via `for`.  
  - Error messages are linked using `aria-describedby`.  
  - Fully keyboard-navigable with visible focus states.  

---

## 🧪 Data-TestIDs (For Automated Testing)

| Element | Data Test ID |
|----------|---------------|
| Profile Card | `test-profile-card` |
| User Name | `test-user-name` |
| User Bio | `test-user-bio` |
| Current Time | `test-user-time` |
| Avatar | `test-user-avatar` |
| Social Links | `test-user-social-links` |
| Twitter | `test-user-social-X` |
| GitHub | `test-user-social-github` |
| LinkedIn | `test-user-social-linkedin` |
| Instagram | `test-user-social-instagram` |
| Hobbies List | `test-user-hobbies` |
| Dislikes List | `test-user-dislikes` |
| About Page Root | `test-about-page` |
| About Bio | `test-about-bio` |
| About Goals | `test-about-goals` |
| Low Confidence | `test-about-confidence` |
| Future Note | `test-about-future-note` |
| Extra Thoughts | `test-about-extra` |
| Contact Form Name | `test-contact-name` |
| Contact Form Email | `test-contact-email` |
| Contact Form Subject | `test-contact-subject` |
| Contact Form Message | `test-contact-message` |
| Contact Form Submit | `test-contact-submit` |

---

## 💻 Running the Project Locally  

1. **Clone the repository**
   ```bash
   git clone https://github.com/qaysh/Profile-Wizard-Portal.git
Navigate into the folder

bash
Copy code
cd frontend-wizards-portal
Open the project

bash
Copy code
open index.html   # or double-click index.html
No build tools required — this project runs directly in the browser.

🌐 Live Demo
🔗 Live URL: https://my-profile-card.vercel.app
💻 GitHub Repo: https://github.com/qaysh/My-Profile-card

🎨 Design & Styling
Built with Tailwind CSS for fast, responsive layouts

Uses Feather Icons for clean and scalable SVG icons

Smooth fade-in animations and hover transitions

Accessible color contrast, rounded corners, and adaptive font sizes

Consistent branding and theme across all pages

🧠 Accessibility Highlights
Semantic structure using <main>, <section>, <ul>, <p>, <h2>, and <form>

All inputs have associated <label>s

Form errors are tied with aria-describedby for screen readers

Focus styles and keyboard support across navigation and form elements

All interactive elements have clear hover and focus states

🧾 License
This project is open-source and free to use for educational and personal purposes under the MIT License.

🧑‍💻 Author
Qais Shittu Ayomide
Frontend Developer · Accessibility Advocate · Design Enthusiast

🔗 LinkedIn
💻 GitHub
🐦 Twitter
