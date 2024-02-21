import { Routes, Route, Navigate } from 'react-router-dom';

import {
  HomeScreen,
  StandByScreen,
  LoginScreen,
  SignupScreen
} from '@screens/index';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/stand-by" />} />
      <Route
        path="/home"
        element={(<HomeScreen />)}
      />
       <Route
        path="/stand-by"
        element={(<StandByScreen />)}
      />
      <Route
        path="/login"
        element={(<LoginScreen />)}
      />
      <Route
        path="/signup"
        element={(<SignupScreen />)}
      />
      <Route
        path="/360"
        element={(<SignupScreen />)}
      />
    </Routes>
  );
};

export default AppRoutes;
