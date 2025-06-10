
Project: Personal Portfolio Website  
Author: Ayush Sawai


Description:
------------
This is a static personal portfolio website built to showcase my skills, projects, and experience. 
It includes a custom-built contact form that allows visitors to send messages directly to my email using SMTP (Simple Mail Transfer Protocol).

Features:
---------
- Responsive design for desktop and mobile
- Smooth scroll navigation
- About, Projects, and Contact sections
- Custom contact form that sends emails via SMTP
- Font Awesome icons and animations

Technologies Used:
------------------
- HTML5, CSS3, JavaScript (Vanilla)
- SMTP via Python/Flask backend (for message sending)
- Font Awesome (for icons)

Folder Structure:
-----------------
/index.html  
/styles/       → CSS files  
/scripts/      → JavaScript files  
/assets/       → Images and media  
/server/       → Python files for SMTP handling

Setup Instructions (for SMTP Email Functionality):
--------------------------------------------------
1. Ensure Python is installed on your system.
2. Navigate to the `/server` folder.
3. Install necessary libraries (e.g., Flask, smtplib):
   ```bash
   pip install flask
