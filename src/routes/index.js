import Info from "~/pages/Info/Info";
import HomePage from "~/pages/HomePage/HomePage";
import TemplateFull from "~/templates/TemplateFull/TemplateFull";
import Login from "~/pages/Login/Login";
import Checkout from "~/components/Checkout/Checkout";
import Register from "~/pages/Register/Register";

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/checkout/:id', component: Checkout, layout: TemplateFull},
    { path: '/info/:id', component: Info},
    { path: '/login', component: Login, layout: TemplateFull},
    { path: '/register', component: Register, layout: TemplateFull},

];

const privateRoutes = [
    
];

export { publicRoutes, privateRoutes };