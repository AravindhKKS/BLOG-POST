import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/Write/Write";
import Single from "./pages/single/Single";
import Settings from "./pages/settings/Settings";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // const user = true;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/post" element={<Single />} />
        <Route path="/login" element={<Login />} />

        {/* <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home/> : <Register />} />
        <Route path="/write" element={user ? <Write/> : <Register />} />
        <Route path="/settings" element={user ? <Settings/> : <Register/>} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/login" element={user ? <Home/> :<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
