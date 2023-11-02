import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import HomePage from './core/HomePage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/signin' exact element={<Signin />} />
        <Route path='/signup' exact element={<Signup />} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
