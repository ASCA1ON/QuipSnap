
# QuipSnap 💬

QuipSnap is a social media web application built using Next.js 13 for the frontend and backend and MongoDB for the database.


## ⚡️ Features

- 👤 User authentication with Google using NextAuth
- 🆕 Users can sign up and create a profile
- ✏️ Signed up users can create, update, delete their own quips
- 🏷️ Quips contain text and tags
- 🔒 Non-signed up users can only see quips on the homepage
- 🔎 Everyone can search for usernames, quips text, and quip tags
- 👀 Everyone can visit any user's profile page to see their quips
- 🖊️ On a user's profile page, anyone can read, update and delete their quips

## 🚀 Getting Started

To run QuipSnap locally:

1. Clone this repo
   ```sh
   git clone https://github.com/<your-username>/quipsnap.git
   ```

2. Navigate into the project directory
   ```sh
   cd quipsnap
   ```

3. Install dependencies
   ```sh
   npm install
   ```

4. Create a `.env` file in the root of the project with the following fields:

   ```
   GOOGLE_ID=<your google client id>
   GOOGLE_CLIENT_SECRET=<your google client secret>  
   MONGODB_URI=<your mongodb connection uri>
   ```

5. Run the dev server
   ```sh
   npm run dev
   ```

QuipSnap should now be running at `http://localhost:3000`! 🎉

## 🚢 Deployment

I plan to deploy this project to Vercel/Netlify/etc. The deployed link will be added here once available:

Deployed Link:

## 🛠 Built With

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js 
- [MongoDB](https://www.mongodb.com/) - The database for modern applications
