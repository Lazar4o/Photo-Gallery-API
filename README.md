# Photo Gallery API Backend

This backend API handles CRUD operations for a photo gallery application, with Node.js and Express.js, utilizing PostgreSQL for data persistence and Cloudinary for image storage and compression.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## Installation

Clone the repository, install dependencies, and configure environment variables:

```bash
git clone <repository-url>  # Clone the repository
cd path/to/repository       # Navigate to the project directory
npm install                 # Install dependencies
```

## Configuration
### Environment Variables
Create a .env file in the root of your project directory and populate it with your environment variables:

### PostgreSQL configuration
```env
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=your_db_host
DB_NAME=your_db_name
DB_PORT=your_db_port
```

### Cloudinary configuration for image compression and storage
```env
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```
### Server port
```env
PORT=3001
```
## Running the Application
- Ensure your .env file is configured correctly as described in the Configuration section.
- Start the server
  ```bash
  npm start
  ```
- The server should now be running on http://localhost:3001

## API Endpoints
### Photos
- GET /photos - Retrieve all photos (paginated, 6 per page)
- GET /photos/:id - Retrieve a single photo by ID
- POST /photos - Create a new photo
  * Form data: image (file), title (string), description (string)
- PATCH /photos/:id - Update a photo by ID
  * Form data: image (file, optional), title (string, optional), description (string, optional)
- DELETE /photos/:id - Delete a photo by ID

## Technologies Used
### Backend:
- Node.js
- Express.js
- PostgreSQL
- Cloudinary
- Multer (for handling file uploads)
- Sequelize (for ORM)
  
## Notes
* Ensure you have the necessary environment variables set up as described in the Configuration section.
* You must have PostgreSQL and Cloudinary accounts to use this application.
* For any issues or questions, please feel free to contact me.
