import React, { useContext, useEffect, useState } from 'react'
import { AnkarTag, LogoContainer, LogoImg, LogoText, MainMenuContainer, MenuContainer, MenuElement, MenuElementContainer, MenuWrapper, NavContainer, NavElement, NavElementWrapper, NavWrapper, ProfileLogo, ProfileLogoContainer } from '../styledComponents/Navbar'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../images/MatchMaking24-friendship-dating-matrimony-match-logo.svg'
import LinkedinLogo from '../images/MatchMaking24-friendship-dating-matrimony-match-linkedin.png'
import { useAuth0 } from "@auth0/auth0-react";
import CloseIcon from '@mui/icons-material/Close'; 
import {HOST_NAME} from '../hostName'
import axios from 'axios'
import { UserProfileData } from '../App';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Navbar = () => {
  const { loginWithRedirect,user,isAuthenticated ,isLoading ,logout ,loginWithPopup} = useAuth0();
  const [openMenuBar,setOpenMenuBar] = useState(false)
  const {setUserData,userData} = useContext(UserProfileData)
  const nevigate =  useNavigate()
  useEffect(()=>{
    const login = async()=>{
      const res = await axios.post(`${HOST_NAME}/user/register`,{email:user.email,name:user.name,img:user.picture})
      if(res.data.message!="Profile Registerd"){
        setUserData(res.data.message)
        nevigate('/profile')
      }
    }
    login()
  },[user])

  return (
    <> 
        <NavContainer> 
            
            <NavWrapper>  
                <LogoContainer><Link to={'/'}><LogoImg src={logoImg}/></Link><LogoText></LogoText></LogoContainer>
                <NavElementWrapper>
                    <NavElement> <Link className='Links inheritProperty' to={"/"}>Home</Link></NavElement>
                    <NavElement><AnkarTag href='https://blog.matchmaking24.com/' target={'_blank'}>Blog</AnkarTag> </NavElement>
                    { (!isAuthenticated && !isLoading ) && <NavElement onClick={() => loginWithPopup()}> Signup with <img height={'20px'} width={'20px'} style={{marginLeft:'5px'}} src={LinkedinLogo}/> </NavElement>}
                    <NavElement display={'block'} ><MenuIcon sx={{fontSize:'40px'}} onClick={()=>setOpenMenuBar(true)} /></NavElement>
                </NavElementWrapper>
                 
            </NavWrapper>
        </NavContainer>
        {openMenuBar &&
          <MainMenuContainer>
          <MenuContainer>
            <CloseIcon sx={{fontSize:'40px',cursor:'pointer',m:2}} onClick={()=>setOpenMenuBar(false)}/>
            <MenuWrapper>
              {
                (isAuthenticated && !isLoading) ?<>
                <ProfileLogoContainer><ProfileLogo src={user.picture}/></ProfileLogoContainer>
                <MenuElementContainer><Link onClick={()=>setOpenMenuBar(false)} className='Links inheritProperty' to={"/profile"}><MenuElement>Profile <ArrowForwardIcon/></MenuElement></Link></MenuElementContainer>
                </>
                : 
                <MenuElementContainer><MenuElement style={{maxWidth:'max-content'}} onClick={() => loginWithPopup()}> Signup With <img height={'20px'} width={'20px'} style={{marginLeft:'-7px',marginBottom:'-3px'}} src={LinkedinLogo}/> <ArrowForwardIcon/></MenuElement></MenuElementContainer>
              }
             
              {(isAuthenticated && !isLoading) ?<MenuElementContainer><Link onClick={()=>setOpenMenuBar(false)} className='Links inheritProperty' to={userData?.gender?"/right-match-for-friendship-dating-matrimony":null}><MenuElement>FindMatch <ArrowForwardIcon/></MenuElement></Link></MenuElementContainer>:null}
              <MenuElementContainer><AnkarTag onClick={()=>setOpenMenuBar(false)} className='Links inheritProperty'  href={"/#Confession"}><MenuElement> Confession  <ArrowForwardIcon/></MenuElement></AnkarTag></MenuElementContainer>
              <MenuElementContainer><Link onClick={()=>setOpenMenuBar(false)} className='Links inheritProperty' to={"/about"}><MenuElement>About <ArrowForwardIcon/></MenuElement></Link></MenuElementContainer>
              <MenuElementContainer><Link onClick={()=>setOpenMenuBar(false)} className='Links inheritProperty' to={"/contact"}><MenuElement>Contact <ArrowForwardIcon/></MenuElement></Link></MenuElementContainer>
              <MenuElementContainer><AnkarTag onClick={()=>setOpenMenuBar(false)} className='Links inheritProperty' href={"https://blog.matchmaking24.com/"} target={'_blank'}><MenuElement>Blog <ArrowForwardIcon/></MenuElement></AnkarTag></MenuElementContainer>
              {
                (isAuthenticated && !isLoading) ?
                <MenuElementContainer><MenuElement onClick={() => logout()}>Sign Out</MenuElement></MenuElementContainer>
                :null
              }
            </MenuWrapper>
          </MenuContainer>
        </MainMenuContainer>
        }
    </>
  )
}
