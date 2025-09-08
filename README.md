📌 React URL Shortener

A simple React + Material UI project that lets users shorten URLs, set validity periods, create custom shortcodes, and view statistics like click counts and expiry details.

🚀 Features

✨ Shorten multiple URLs at once (up to 5 per batch)

🏷️ Add custom shortcodes (unique, 3–15 characters, alphanumeric + _ or -)

⏳ Set validity periods (in minutes, default = 30)

✅ Client-side validation for:

URL format

Validity period (positive integer)

Shortcode uniqueness and format

📊 Statistics Page:

Shortened URLs list

Expiry date/time

Total clicks

📝 Custom logger (stores logs in localStorage instead of console.log)

📂 Project Structure
react-url-shortener/
│── public/
│   └── index.html
│── src/
│   ├── index.js
│   ├── App.js
│   ├── routes.js
│   ├── utils/
│   │   ├── logger.js
│   │   └── validators.js
│   ├── components/
│   │   ├── UrlShortenerForm.js
│   │   ├── UrlList.js
│   │   └── StatsPage.js
│── package.json
│── README.md

🛠️ Installation & Setup
1. Clone the repo
git clone https://github.com/YOUR_USERNAME/react-url-shortener.git
cd react-url-shortener

2. Install dependencies
npm install

3. Run development server
npm start


The app will be available at 👉 http://localhost:3000


⚙️ Tech Stack

Frontend: React (Create React App)

UI Library: Material UI (MUI)

Routing: React Router DOM

State Management: React Hooks (useState)

Logging: Custom logger (localStorage based)

🔮 Future Enhancements

Backend (Node.js + MongoDB/Postgres) for persistent storage

Analytics: Location, device, referral tracking

Authentication: Private dashboards for users

Export statistics (CSV/Excel)

🤝 Contributing

Fork the repo

Create your feature branch (git checkout -b feature/my-feature)

Commit your changes (git commit -m 'Add new feature')

Push to the branch (git push origin feature/my-feature)

Open a Pull Request

📜 License

This project is licensed under the MIT License – you’re free to use, modify, and distribute it.
