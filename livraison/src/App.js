
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './core/Menu';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/HomePage';
import { ActiveMe } from './user/ActiveMe';
import { ForgetPasswordConfirmation } from './user/ForgetPasswordConfirmation';
import { ForgetPassword } from './user/ForgetPassword';
import Dashboard from './user/Dashboard';
import { PrivateRoutes } from './auth/PrivateRoutes';
import { isAuthenticated } from './auth/helpers';
import { Newuser } from './user/Newuser';

const App = () => {
  const auth= isAuthenticated()



  return (
    <div className="App">

      <BrowserRouter>
        <Menu />

        <Routes>

          <Route  element={<PrivateRoutes/>}>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path= {auth ? "/" : "/signin" } element={auth ? <Home /> : <Signin /> }/>
          <Route path= {auth ? "/" : "/signup" } element={auth ? <Home /> : <Signup /> } />
          <Route path="/activate-email/:token" element={<ActiveMe />} />
          <Route path="/getUser" element={<Newuser />} />

          <Route
            path="/forget-password-confirmation/:token"
            element={<ForgetPasswordConfirmation />}
          />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


