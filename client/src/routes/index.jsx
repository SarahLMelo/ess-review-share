import { Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile";
import Movielist from "../pages/Movielist";
import Movielists from "../pages/Movielists";
import EditProfile from "../pages/EditProfile";
import Login from "../pages/Login";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="profile/editprofile" element={<EditProfile />} />
            <Route path="profile/movielists" element={<Movielists />} />            {/* todas as listas do usuário */}
            <Route path="profile/movielists/movielist" element={<Movielist />} />   {/* lista específica */}
            <Route path="login" element={<Login/>} />   {/* lista específica */}
        </Routes>
    );
};

export default AppRoutes;