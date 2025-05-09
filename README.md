# Artist Portfolio Website

## Overview
This project is a personal artist portfolio website that showcases the artist's work, biography, CV, and contact information. The website supports both English and 中文, allowing users to switch between languages seamlessly.

## Features
- **Responsive Design**: The website is designed to be fully responsive, ensuring a great user experience on both desktop and mobile devices.
- **Language Support**: Users can toggle between English and 中文 using a language switcher.
- **Navigation Bar**: The navigation bar includes links to the following sections:
  - Projects
  - Bio
  - CV
  - Contact
- **Footer**: The footer contains copyright information and links to social media.

## Project Structure
```
artist-portfolio
├── src
│   ├── assets
│   │   ├── css
│   │   │   └── styles.css
│   │   ├── js
│   │   │   └── scripts.js
│   │   └── fonts
│   ├── components
│   │   ├── navbar.html
│   │   ├── footer.html
│   │   └── language-switcher.html
│   ├── pages
│   │   ├── projects
│   │   │   ├── index-en.html
│   │   │   └── index-zh.html
│   │   ├── bio
│   │   │   ├── index-en.html
│   │   │   └── index-zh.html
│   │   ├── cv
│   │   │   ├── index-en.html
│   │   │   └── index-zh.html
│   │   └── contact
│   │       ├── index-en.html
│   │       └── index-zh.html
│   ├── index-en.html
│   └── index-zh.html
├── package.json
└── README.md
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using npm:
   ```
   npm install
   ```
4. Open the `index-en.html` or `index-zh.html` file in your web browser to view the portfolio.

## Technologies Used
- HTML
- CSS
- JavaScript

## License
This project is licensed under the MIT License.