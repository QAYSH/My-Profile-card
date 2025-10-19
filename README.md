QAIS SHITTU — Stage 0: Profile Card

A fully responsive, accessible, and testable Profile Card built using semantic HTML, modern CSS, and vanilla JavaScript.
This project is part of the Frontend Wizards Stage 0 challenge — designed to demonstrate mastery of frontend fundamentals, accessibility, and responsiveness.

🌟 Overview

This project implements a Profile Card Component/Page that displays:

User’s name

Short biography

Live updating current time (in milliseconds)

Avatar image

Social media links

Lists of hobbies and dislikes

All elements are testable via data-testid attributes for automated grading.

🧩 Features

✅ Semantic and accessible HTML structure
✅ Responsive layout for mobile, tablet, and desktop
✅ Live updating time (using Date.now())
✅ Keyboard-accessible social links with visible focus
✅ Smooth hover animations and subtle transitions
✅ Beautiful, modern design with adaptive spacing
✅ All required data-testid attributes included exactly as specified

📂 Project Structure
frontend-wizards-stage0/
│
├── index.html      # Main HTML structure (semantic + accessible)
├── style.css       # Responsive layout, styling, and animations
└── script.js       # Handles live time update

⚙️ How It Works

The current time (in milliseconds) updates every second using JavaScript’s Date.now() method.

The avatar displays a static image by default but can easily be replaced with any user photo or uploaded image URL.

Social links open in new tabs securely (target="_blank" + rel="noopener noreferrer").

Responsive design automatically rearranges layout:

On mobile → stacked vertically

On desktop → avatar on the left, content on the right

🧠 Accessibility

All images include descriptive alt text.

Navigation uses semantic <nav> with labeled links.

Focus styles are visible for keyboard users.

Lists are properly structured with <ul> and <li> elements.

🧪 Data-TestIDs (for automated testing)
Element	Data Test ID
Profile card root	test-profile-card
User name	test-user-name
User bio	test-user-bio
Current time	test-user-time
Avatar	test-user-avatar
Social links container	test-user-social-links
Twitter link	test-user-social-twitter
GitHub link	test-user-social-github
LinkedIn link	test-user-social-linkedin
Hobbies list	test-user-hobbies
Dislikes list	test-user-dislikes
💻 Running the Project Locally

To view the project locally:

# 1. Clone the repository
git clone https://github.com/<Qaysh>/My Profile-card.git

# 2. Navigate into the folder
cd frontend-wizards-stage0

# 3. Open the project in your browser
open index.html   # or double-click index.html


No build tools or dependencies required — it’s pure HTML, CSS, and JS.

🌐 Live Demo

🔗 Live URL: https://My Profile-card.vercel.app

💻 GitHub Repo: https://github.com/qaysh/My Profile-card

🎨 Design & Styling

Layout built with Flexbox and CSS Grid.

Smooth fade-in and hover animations for interactivity.

Light theme with accessible color contrast.

Rounded corners, shadows, and responsive font sizes for modern aesthetics.

🧾 License

This project is open-source and free to use for educational purposes under the MIT License.

🧑‍💻 Author

Qais Shittu Ayomide
Frontend Developer | Accessibility Advocate | Design Enthusiast
LinkedIn
 · GitHub
 · Twitter
