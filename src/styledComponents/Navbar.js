import styled from 'styled-components';

export const NavContainer = styled.div`
width:100%;
max-width:100%;
display:flex;
align-items:center;
justify-content:space-between;
height:60px;
`
export const NavWrapper = styled.div`
width:100%;
max-width:100%;
display:flex;
align-items:center;
justify-content:space-between;
box-shadow:5px 5px 5px #d7d7d7;
margin-top:5px;
height:inherit;
background-color:#FFC900;


`
export const LogoContainer = styled.div`
width:100%;
max-width:fit-content;
display:flex;
align-items:center;
gap:5px;
border:2px solid black;
border-left: none;
height:inherit;
background-color:#FFC900;
padding:0px 10px;

@media only screen and (max-width:500px){
    max-width:190px;
}
`
export const LogoImg = styled.img`


`
export const LogoText = styled.span`

`
export const NavElementWrapper = styled.span`
width:100%;
max-width:95%;
display:flex;
align-items:center;
border-top:2px solid black;
border-bottom:2px solid black;
${'' /* gap:20px; */}
justify-content:flex-end;
${'' /* padding:0px 20px; */}
background-color:#FFC900;
height:inherit;


`
export const NavElement = styled.span`
width:100%;
max-width:15%;
/* padding:0px 5%; */
cursor:pointer;
height:inherit;
border:2px solid black;
border-right:none;
display:flex;
align-items:center;
justify-content:center;
&:hover{  
    background-color: #FF90E8
}
@media only screen and (max-width:800px){
    max-width:25%;
}
@media only screen and (max-width:600px){
    display:${(props)=>props.display!='block'&&'none'};
    border:none;
    margin-right:15px;

}
`
export const AnkarTag = styled.a`
width: 100%;
max-width: 100%;

height: inherit;
display:flex;
align-items:center;
justify-content:center;
color: inherit;
text-decoration: none;

`

// Menu baar style

export const MainMenuContainer = styled.div`
position: fixed;
/* backdrop-filter: blur(50px); */
width: 100%;
height: 100vh;
z-index: 100;
top: 0px;
display: flex;
justify-content: flex-end;
/* background-color: black; */

`
export const MenuContainer = styled.div`
width: 30%;
height: inherit;
border: 2px solid black;
background-color: #ffc900;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 20px;
@media only screen and (max-width:900px){
    width: 50%;
}
@media only screen and (max-width:500px){
    width: 100%;
}

`
export const MenuWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;

`
export const MenuElementContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
/* border: 1px solid gray; */
padding-left: 20%;
&:hover{
    background-color:#FF90E8 ;
    /* box-shadow: 5px 5px 7px; */
}


`
export const MenuElement = styled.div`
width: 100%;
max-width: 55%;
/* max-width: max-content; */
height: 50px;
/* border: 1px solid gray; */
font-size: 25px;
font-weight: 600;
display: flex;
align-items: center;
/* justify-content: space-between; */
cursor: pointer;
gap: 10px;
 
 
`
export const ProfileLogoContainer = styled.div`
border: 1px solid gray;
width: 30%;
border-radius: 50%;


`
export const ProfileLogo = styled.img`
width: 100%;
object-fit:fill;
border-radius: 50%;
height: 100%;

`