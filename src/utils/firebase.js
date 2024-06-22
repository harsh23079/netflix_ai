
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0_eL-SwCvqctAJLMaigs5NNjU6HnFKCk",
  authDomain: "netflix-ai-gpt.firebaseapp.com",
  projectId: "netflix-ai-gpt",
  storageBucket: "netflix-ai-gpt.appspot.com",
  messagingSenderId: "1006878093342",
  appId: "1:1006878093342:web:d7df466bae08571f8ebe0f",
  measurementId: "G-E8BXMW63TW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
