import Vue from "vue";
import Router from "vue-router";
import login  from "../components/User/Login"
import signup  from "../components/User/signup"
import LangSel from "../components/LangSel"
import Mandi from "../components/Mandi/mandi"
import Details from "../components/Mandi/details"
import Dashboard from "../components/Dashboard"
import Artical from "../components/Articals/artical"
import ArticalList from "../components/Articals/articalList"
import videochat from "../components/videochat/videochat"
Vue.use(Router);

export default new Router({
  routes: [
   {
     path:"/",
     name:"Language Selection",
     component:LangSel
   }
    ,
    {
      path: "/signup",
      name: "Sign Up",
      component: signup
    },
    {
      path: "/login",
      name: "Log in",
      component: login
    },
    {path:"/mandi",
     name : "eMandi",
     component: Mandi
  }, {path:"/mandi/:id",
  name : "Details",
  component: Details
},
{path:"/dashboard",
name:"Home",
component:Dashboard
},
{path:"/Artical/:id",
name:"Artical",
component:Artical
},
{
  path:"/Cat/:cat",
  name:"Category",
  component:ArticalList
},
{
  path:"/vc",
  name:"VideoCHat",
  component:videochat
}
  ],
  mode: "history"
});
