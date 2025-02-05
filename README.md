# 🚗 Alta Car Rental (Client Side)

## Introduction
**Alta Car Rental** is an intuitive and visually appealing **car rental platform**. It offers users a seamless experience for browsing, booking, and managing cars. Key features include **reviews, wishlists, filtering options**, and real-time booking updates.

## 🚀 Features
- **Add Reviews**: Users can submit reviews with ratings and view them under "My Reviews." Reviews can be deleted if necessary.
- **Modern Car Listings**: Detailed information on available cars for booking.
- **My Cars Page**: Users can update or delete their posted car listings.
- **Real-time Bookings**: Users receive instant updates on the "My Bookings" page.
- **Wishlist System**: Users can save cars to their wishlist and manage them from "My Wishlist."

## 📦 Dependencies
The project utilizes the following dependencies for an optimized experience:
- `@vitejs/plugin-react` – React integration with Vite.
- `daisyui` – Tailwind CSS components for UI design.
- `eslint` – JavaScript linting for code quality.
- `postcss` – CSS processing tool.
- `tailwindcss` – Utility-first CSS framework.
- `vite` – Fast development server and build tool.
- `date-fns` – Date utility library.
- `firebase` – User authentication.
- `framer-motion` – Animations and transitions for React components.
- `localforage` – Local storage with IndexedDB and WebSQL.
- `lottie-react` – Lottie animations.
- `lucide-react` – Icon library for React.
- `match-sorter` – Sorting and filtering results by relevance.
- `react` – Core React library.
- `react-datepicker` – Date picker for forms.
- `react-hook-form` – Form validation and management.
- `react-hot-toast` – Elegant toast notifications.
- `react-icons` – Collection of popular icons.
- `react-router-dom` – Declarative routing.
- `react-responsive` – Responsive design adjustments.
- `sort-by` – Sorting helper.
- `sweetalert2` – Beautiful, customizable alerts.
- `swiper` – Sliders and carousels.
- `tailwind-merge` – Utility for merging Tailwind classes.
- `tailwindcss-animate` – Ready-to-use animations for Tailwind CSS.

## 🛠️ Technologies Used
- **React** for frontend UI.
- **Context API** to manage global state (shopping cart, wishlist).
- **Tailwind CSS** for responsive and stylish UI.
- **React Router** for navigation and dynamic page rendering.
- **Recharts** for product data visualization.

## 📥 Installation

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/nmmaharaz/Chill_Gamer.git
```
```sh
cd Chill_Gamer
```
```sh
npm i
```

## 🚀 Usage

### 1️⃣ Set Up Firebase Security  

To use Firebase authentication and database services, follow these steps:

#### **Step 1: Create a Firebase Project**
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Click **Add Project** and follow the setup instructions.
3. Once created, go to **Project Settings > General** and copy the Firebase **Config Object**.

#### **Step 2: Install Firebase in Your Project**
Run the following command to install Firebase:  
```sh
npm install firebase
```
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;



### 2️⃣Live Link:
```sh
https://alta-car-rentals.web.app/
