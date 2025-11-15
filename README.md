# CodeAlpha URL Shortener

A simple and efficient URL shortener built with **Node.js**, **Express.js**, **MongoDB**, and **React**. This project allows users to convert long URLs into short, shareable links with a modern frontend interface.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Short Code Generation](#short-code-generation)
- [Future Enhancements](#future-enhancements)
- [Security Considerations](#security-considerations)
- [License](#license)

---

## Features

- Shorten long URLs into concise, shareable links
- Redirect short URLs to the original URL
- React-based frontend interface
- Easily extendable for analytics, custom aliases, and dashboards

---

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Frontend:** React.js, HTML, CSS
- **Version Control:** Git / GitHub

---

## Folder Structure

```

CodeAlpha_URL-Shortener/
├── backend/              # Backend logic and API
│   ├── models/           # MongoDB schema definitions
│   ├── routes/           # API route handlers
│   └── server.js         # Main Express server
├── frontend/             # React frontend application
│   ├── src/              # React source code
│   │   ├── App.js        # Main app component
│   │   └── index.js      # React entry point
├── LICENSE               # License information

```

---

## Installation

### 1. Backend Setup

1. Navigate to the backend folder:

```bash
cd CodeAlpha_URL-Shortener/backend
````

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
```

---

### 2. Frontend Setup

1. Navigate to the frontend folder:

```bash
cd ../frontend
```

2. Install dependencies:

```bash
npm install
```

---

## Running the Project

### 1. Start Backend Server

```bash
cd backend
npm start
```

* Runs the backend on `http://localhost:5000`

### 2. Start React Frontend

```bash
cd frontend
npm run dev
```

* Runs the frontend on `http://localhost:5173` (default React port)
* The frontend interacts with the backend API to create and display short URLs

---

## Usage

* Open `http://localhost:5173` in your browser.
* Enter a long URL in the input form.
* Click “Shorten URL” to generate a short link.
* Copy or use the short link. Visiting the short URL redirects to the original link.

---

## API Endpoints

| Method | Endpoint       | Description                  | Request Body                      | Response Example                                 |
| ------ | -------------- | ---------------------------- | --------------------------------- | ------------------------------------------------ |
| POST   | `/api/shorten` | Create a new short URL       | `{ "longUrl": "<original_url>" }` | `{ "shortUrl": "http://localhost:5000/abc123" }` |
| GET    | `/:code`       | Redirect to the original URL | N/A                               | Redirect                                         |

---

## Short Code Generation

* Short codes are generated automatically by the backend for each long URL.

---

## License

This project is licensed under **CC BY-ND 4.0**.

[View License](LICENSE)

---

## Author

**Hamna Tariq**

[GitHub Profile](https://github.com/hamna663)

[LinkedIn Profile](https://www.linkedin.com/in/hamna-tariq-0aa312332/)
