# URLShortener

> URLShortener is a backend application built with Express.js and MongoDB that provides a simple yet powerful service for shortening long URLs into compact, shareable links.

This project is designed to be lightweight, efficient, and easy to integrate with any frontend or third-party service.
It exposes a set of RESTful APIs that handle URL creation, redirection, and analytics tracking with seamless performance.

Users can generate unique short links, customize their short codes, and retrieve detailed statistics such as total clicks and timestamps.
All data is stored securely in MongoDB, ensuring reliability and scalability for production use.

The system also includes robust input validation, structured error handling, and environment-based configuration using dotenv.
Its modular architecture makes it easy to extend with features like authentication, rate limiting, or QR code generation.

### Key Features:

- Shorten long URLs into unique short codes

- Redirect short links to their original URLs

- Track analytics (click count, creation date, etc.)

- RESTful API design with JSON responses

- Built with Node.js, Express.js, and MongoDB
