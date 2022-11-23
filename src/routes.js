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

import AssignUsers from './components/AssignUsers';
import prepareDocument from './components/PrepareDocument/PrepareDocument'


export default [
  {
    path: "/login",
    exact: true,
   layout: LoginLayout,
    component: Login
  },
  {
    path: "/assign",
    exact: true,
   layout: DefaultLayout,
    component: AssignUsers
  },

  {
    path: "/prepare-document",
    exact: true,
   layout: DefaultLayout,
    component: prepareDocument
  },

  {
    path: "/pdf",
    exact: true,
    layout: DefaultLayout,
    component:Pdf
  },
  {
    path: "/add-pdf",
    exact: true,
    layout: DefaultLayout,
    component:AddFile
  },


  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
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
