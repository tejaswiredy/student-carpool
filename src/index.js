"use strict";

import "./styles.css";
require("./mystyles.scss");

import Home from "_pages/Home.js";
import About from "_pages/About.js";
import Error404 from "_pages/Error404.js";
import Signin from "_pages/Signin.js";
import Signout from "_pages/Signup.js";
import PostShow from "_pages/PostShow.js";

import Navbar from "_components/Navbar.js";
import Bottombar from "_components/Bottombar.js";

import Utils from "./services/Utils.js";
import SlideToggle from "./services/SlideToggle.js";
import RidesOffered from "./views/pages/RidesOffered";

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
  "/": Home,
  "/about": About,
  "/login": Signin,
  "/register": Signout,
  "/p/:id": PostShow,
  "/ridesoffered": RidesOffered,
};

// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {
  // Lazy load view element:
  const header = null || document.getElementById("header_container");
  const content = null || document.getElementById("page_container");
  const footer = null || document.getElementById("footer_container");

  // Render the Header and footer of the page
  header.innerHTML = await Navbar.render();
  await Navbar.after_render();
  footer.innerHTML = await Bottombar.render();
  await Bottombar.after_render();

  document.getElementById("nav-toggle").addEventListener("click", function (e) {
    SlideToggle(document.getElementById("navbarBasicExample"));
  });

  // Get the parsed URl from the addressbar
  let request = Utils.parseRequestURL();

  // Parse the URL and if it has an id part, change it with the string ":id"
  let parsedURL =
    (request.resource ? "/" + request.resource : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? "/" + request.verb : "");

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  let page = routes[parsedURL] ? routes[parsedURL] : Error404;
  content.innerHTML = await page.render();
  await page.after_render();
};

// Listen on hash change:
window.addEventListener("hashchange", router);

// Listen on page load:
router();
