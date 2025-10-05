# Deployment Guide

## Backend Deployment (Render)

1. Create account at [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Use these settings:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment Variables**:
     - `NODE_ENV`: production
     - `MONGODB_URI`: Your MongoDB connection string (from MongoDB Atlas)
     - `JWT_SECRET`: Generate a random secret key
     - `PORT`: 10000

5. Click "Create Web Service"

## Frontend Deployment (GitHub Pages)

1. Go to your GitHub repository settings
2. Navigate to "Pages" section
3. Under "Build and deployment":
   - Source: GitHub Actions
4. Push your code to the main branch
5. The GitHub Action will automatically build and deploy

## MongoDB Atlas Setup

1. Create free account at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Set up database access (username/password)
4. Add network access (0.0.0.0/0 for all IPs or your Render IP)
5. Get connection string and add to Render environment variables

## Update Frontend API URL

The frontend is already configured to use the production backend URL in `client/src/config.js`:

```javascript
export const API_URL = import.meta.env.VITE_API_URL || 'https://job-tracker-jbxz.onrender.com'
```

If you need to change the backend URL, either:
1. Update the default value in `client/src/config.js`
2. Set `VITE_API_URL` environment variable in your GitHub Actions workflow
