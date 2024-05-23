import "./App.css";

import Signup from "./components/Auth/signup/Signup";
import Login from "./components/Auth/login/Login";
import ForgetPassword from "./components/Auth/forgetpassword/ForgetPassword";
import MyBoard from "./components/dashboard/main/MyBoard";
import BoardItems from "./components/dashboard/main/BoardItems";
import Landing from "./pages/landing/Landing";
import ServiceProvider from "./components/serviceProvider/ServiceProvider";
import Setting from "./components/dashboard/setting/Setting";
import DashPage from "./components/admin/dashboard/DashPage";
import Catigories from "./components/admin/dashboard/Categories";
import ServiceName from "./components/admin/dashboard/ServiceName";
import Users from "./components/admin/dashboard/Users";
import { MainBoard } from "./components/store/BoarderMainContext";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from "react-router-dom";
import NotFound from "./components/common/NotFound";
// import { Task } from "@mui/icons-material";
import Tasks from "./components/taskmangment/Tasks";
import Chat from "./components/dashboard/chat/Chat";
import NewPassword from "./components/Auth/NewPassword/NewPassword";
import NewPasswordSend from "./components/Auth/newpasswordsend/NewPasswordSend";
import VerfiyPassword from "./components/Auth/Verfiypassword/VerfiyPassword";
import Pricing from "./pages/landing/Pricing";
import Aboutus from "./pages/landing/Aboutus";
import SearchResult from "./pages/landing/SearchResult";
import LayoutDashboard from "./common/LayoutDashboared/LayoutDashboard";



function App() {
   return (
      <main>
         <section>
            <MainBoard>
               <Router>
                  <Routes>
                     <Route path="/" element={<Landing />} />
                     <Route path="/price" element={<Pricing/>} />
                     <Route path="/aboutus" element={<Aboutus/>} />
                     <Route path="/search" element={<SearchResult/>} />
                     <Route
                        path="/login"
                        element={
                           <Login
                              route="/api/user/register/"
                          
                           />
                        }
                     />
                     <Route
                        path="/signup"
                        element={
                           <Signup route="api/users/" method="register" />
                        }
                     />
               
                     <Route path="/dashboard" element={<LayoutDashboard/>}>
                       <Route index element={<MyBoard />} />
                       <Route path="myboard" element={<MyBoard />} />
                       <Route path="search" element={<BoardItems />} />
                       <Route path="tasks" element={<Tasks />} />
                     </Route>
                  
                     <Route
                        path="/dashboard/service"
                        element={<ServiceProvider />}
                     />
                     <Route path="/forgetpassword" element={<ForgetPassword />} />
                     <Route path="/newpassword" element={<NewPassword />} />
                     <Route path="/newpasswordsend" element={<NewPasswordSend />} />
                     <Route path="/verfiypassword" element={<VerfiyPassword />} />
                     <Route path="/dashboard/setting" element={<Setting />} />
                     <Route path="/admin/dashpage" element={<DashPage />} />
                     <Route path="/admin/categories" element={<Catigories />} />
                     <Route path="/admin/service" element={<ServiceName />} />
                     <Route path="/admin/users" element={<Users />} />
                     <Route path="/register" element={<Signup />} />
                     
                     <Route path="/dashboard/chat" element={<Chat />} />
                     <Route path="*" element={<NotFound />} />
                  </Routes>
               </Router>
            </MainBoard>
         </section>
      </main>
   );
}

export default App;
