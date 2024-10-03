import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import Offers from "./Pages/Offers";
import SignUP from "./Pages/SignUP";
import ForgotPassword from "./Pages/ForgotPassword";

function App() {
  return (
    <>  
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUP />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
    </Router>
    
    
    </>
  
  
  
      
  )
}

export default App;
