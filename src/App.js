import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Login from "./Login/Login";
import SignUp from "./screens/SignUp/SignUp";
import { AuthProvider } from "./auth/Auth";
import PrivateRoute from "./routers/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;