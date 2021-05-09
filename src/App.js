import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header'
import Footer from './components/Footer'
import LoginScreen from './screens/LoginScreen'
import AddPatientScreen from './screens/AddPatientScreen'
import SettingScreen from './screens/SettingScreen'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={HomeScreen} exact />
      <Route path="/login" component={LoginScreen} />
      <Route path="/addpatients" component={AddPatientScreen} />
      <Route path="/settings" component={SettingScreen} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
