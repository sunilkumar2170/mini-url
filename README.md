# 🔗 Mini URL Shortener

A simple full-stack URL shortener web application built using **Node.js**, **Express.js**, and **EJS** templating.  
It allows users to convert long URLs into short, shareable links just like [bit.ly](https://bit.ly) or [tinyurl.com](https://tinyurl.com).

---

## 🚀 Features

- 📝 Submit a long URL using a form
- 🔐 Automatically generates a unique short code
- 📁 Stores long-short URL mappings in a local `urls.json` file
- 🔗 Clickable list of all shortened URLs
- 🔁 Redirects to the original URL when short link is visited
- ❌ 404 error page for invalid or unknown short URLs

---

## 💻 Tech Stack

- **Backend**: Node.js, Express.js
- **Templating Engine**: EJS
- **Storage**: Local JSON file (no database used)

---


---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/mini-url-shortener.git
cd mini-url-shortener

# 2. Install dependencies
npm install

# 3. Run the app
node app.js
