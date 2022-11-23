import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout,LoginLayout ,FrontLayout} from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Pdf from "./views/Pdf"
import AddFile from "./views/AddFile"
import Login from "./views/Login"
import Home from "./views/Home"
import About from "./views/About"
import Contact from "./views/Contact"



export default [
  {
    path: "/",
    exact: true,
   layout: FrontLayout,
    component: Home
  },

  {
    path: "/about",
    exact: true,
    layout: FrontLayout,
    component:About
  },
  {
    path: "/login",
    exact: true,
    layout: LoginLayout,
    component:Login
  }

];
