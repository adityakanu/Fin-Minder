//import api keys for firebase

import {
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  MEASUREMENT_ID,
  MESSAGING_SENDER_ID,
  PROJECT_ID,
  STORAGE_BUCKET,
} from "./Auth/firebasekeys.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//Logout
// const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  signOut(auth)
    .then(() => {
      console.log("user signed out");
      user = null;
      location.href = "./Auth/login.html";
    })
    .catch((error) => {
      console.log("user error: " + error);
    });
});

// firebase.auth().onAuthStateChanged((user) => {
//   if (!user) {
//     window.location = "google.com"; //If User is not logged in, redirect to login page
//   }
// });

const list = document.querySelectorAll("ul li");

// add active list to sidebar links list.
list.forEach((li) => {
  li.addEventListener("click", (e) => {
    list.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

// chart 0
var xArray1 = ["Completed", "Pending"];
var yArray1 = [55, 45];

var layout1 = { title: "Saving Status" };

var data1 = [{ labels: xArray1, values: yArray1, type: "pie" }];

Plotly.newPlot("chart-0", data1, layout1);

// // chart 1
// var xArray1 = ["English", "Science", "GK", "Aptitude", "Mathematics"];
// var yArray1 = [55, 49, 44, 24, 15];

// var layout1 = {title:"Subjet Analysis"};

// var data1 = [{labels:xArray1, values:yArray1, type:"pie"}];

// Plotly.newPlot("chart-1", data1, layout1);

// // chart 2

// var xArray2 = ["English", "Science", "GK", "Aptitude", "Mathematics"];
// var yArray2 = [55, 49, 44, 24, 15];

// var data2 = [{
//   x: xArray2,
//   y: yArray2,
//   type: "bar"  }];
// var layout2 = {title:"Subject Score"};

// Plotly.newPlot("chart-2", data2, layout2);

// chart 3

var xArray4 = [
  1, 2, 3, 4, 5, 6, 7, 10, 14, 15, 18, 24, 25, 26, 27, 28, 29, 30, 31,
];
var yArray4 = [
  100, 100, 20, 90, 19, 9, 10, 20, 14, 14, 151, 140, 140, 104, 114, 134, 150, 0,
  14, 100,
];

// Define Data
var data4 = [
  {
    x: xArray4,
    y: yArray4,
    mode: "markers",
    type: "scatter",
  },
];

// Define Layout
var layout4 = {
  xaxis: { range: [0, 31], title: "Days" },
  yaxis: { range: [0, 500], title: "Amount" },
  title: "Daily Expenditure",
};

Plotly.newPlot("chart-4", data4, layout4);

const navItem = document.querySelectorAll("li");

navItem.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navItem.forEach((navItem) => {
      navItem.classList.remove("active");
    });

    navItem.classList.add("active");
  });
});
