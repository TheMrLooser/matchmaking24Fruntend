import './CSS/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './componets/Navbar';
import { Landingpage } from './pages/Landingpage';
import { Footer } from './componets/Footer';
import { HomePage } from './pages/HomePage';
import { PrivateRoute } from './private/privateRoute';
import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useState } from 'react';
import AboutPage from './pages/AboutPage';
import TermAndCondition from './pages/Term_Condition';
import PrivacyAndPolicy from './pages/PrivecyPolicy';
import { NotFoundPage } from './pages/NotFoundPage';
import ProfileUpdate from './componets/profileUpdate';
import ShowProfile from './componets/ShowProfile';
import ContactPage from './pages/ContactPage';

export const UserProfileData = createContext(null)

function App() {
  const { loginWithRedirect,user,isAuthenticated ,isLoading } = useAuth0();
  const [userData,setUserData] = useState()
  
  return (
    <>
       <div className='mainDiv'> 
       <UserProfileData.Provider value={{userData,setUserData}}>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Landingpage/>}/>
            <Route path='/right-match-for-friendship-dating-matrimony' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/term-and-condition' element={<TermAndCondition/>}/>
            <Route path='/privacy-policy' element={<PrivacyAndPolicy/>}/>
            <Route element={<PrivateRoute authenticated={isAuthenticated} redirectOn={'/'} isLoading={isLoading}/>}>
              <Route path='/profile' element={<ShowProfile/>}/>
              <Route path='/profile/edit' element={<ProfileUpdate/>}/>
            </Route>
            <Route path='/*' element={<NotFoundPage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </UserProfileData.Provider>
       </div>
    </>
  );
}

export default App;
