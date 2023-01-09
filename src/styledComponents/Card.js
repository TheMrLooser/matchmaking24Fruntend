import styled from "styled-components";

export const CardBaggroundContainer = styled.div`
width: 100%;
max-width:500px;
height: min-content;
background-color:#FFC900;
border-radius:5px;
@media only screen and (max-width:580px){
max-width: 400px;
};
@media only screen and (max-width:400px){
max-width: 300px;
}
`
export const CardContainer = styled.div`
max-width: inherit;
/* max-height: 10vh; */
border: 1px solid gray;
background-color: white;
border-radius: 3px;
padding: 15px;
transition: transform 0.5s;
&:hover{
transform: translate(10px, -10px);
}
@media only screen and (max-width:580px){
/* min-width: 400px; */
};
`
export const CardWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
position: relative;

`
export const CardUpperSection = styled.div`
width: 100%;
max-width: 500px;
display: flex;
/* border: 1px solid red; */
gap: 10px;
position: relative;
`

export const CardProfileImgSection = styled.div`
width: 100%;
max-width: 80px;
height: 80px;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
border: 1px solid black;
border-radius: 50%;
background-color: gray;
@media only screen and (max-width:580px){
max-width:50px;
height: 50px;
};

`
export const CardProfileImg = styled.img`
width: 98%;
height: 99%;
border-radius: 50%;
`
export const CardProfileNameContainer = styled.div`
width: 100%;
max-width: 100%;
height: inherit;
/* border: 1px solid black; */
display: flex;
flex-direction: column;
justify-content: center;
gap: 10px;
`
export const CardProfileName = styled.div`

font-weight: 600;
font-size: 25px;
display: flex;
align-items: center;
justify-content: space-between;
/* border: 1px solid red; */

@media only screen and (max-width:580px){
    font-size: 18px;
};
`
export const CardRelationshipTypeContainer = styled.div`
width: 100%;
/* max-width: fit-content; */
/* border: 1px solid red; */
display: flex;
gap: 10px;
/* flex-wrap: wrap; */
`
export const CardRelationshipTypes = styled.div`
width: 100%;
max-width: fit-content;
padding: 2px 10px;
border: 1px solid black;
color: black;
border-radius: 3px;
font-size: 12px;
@media only screen and (max-width:580px){
    font-size: 10px;
};
`
export const CardProfileType = styled.div`
border: 1px solid #FFC900;
position: absolute;
right: 0px;
top:15px;
padding: 0px 10px;
background-color: #FFC900;
color: black;
border-radius: 3px;
font-size: 16px;
font-weight: 600;
margin-right: 20px;
@media only screen and (max-width:580px){
    margin-top: -15px;
     
};
`



export const CardLowerSection = styled.div`
display: grid;
/* border: 1px solid black; */
grid-template-columns:1fr 1fr;
min-height: 100px;
max-height: fit-content;
@media only screen and (max-width:580px){
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     

};
`

export const CardLeftContainer = styled.div`
/* border: 1px solid red; */
display: flex;
flex-direction: column;
gap: 10px;
padding-right: 10px;
@media only screen and (max-width:580px){
    width: 100%;
    max-width: 80%;
     align-items: center;
     justify-content: center;
};

`
export const CardRightContainer = styled.div`

/* border: 1px solid red; */
display: flex;
flex-direction: column;
gap: 10px;
@media only screen and (max-width:580px){
    width: 100%;
    max-width: 80%;
     align-items: center;
     justify-content: center;
};
`

export const CardElementContaienr = styled.div`
width: 100%;
display: flex;
gap: 10px;
position: relative;
`
export const CardElementKey = styled.div`
height: 25px;
min-width: fit-content;
`
export const CardElementvalue = styled.div`
/* border: 1px solid black; */
height: 25px;
overflow: hidden;
/* display: flex; */
/* color: #6b6b6b; */
&:hover{
    overflow: visible;
    height: fit-content;
}
`
export const CardSocialMediaIconContainer = styled.div`
width: 100%;
border: 1px solid gray;
height: 40px;
display: flex;
align-items: center;
gap: 10px;
justify-content: space-between;
@media only screen and (max-width:580px){
    flex-direction: column;
};
`
export const CardSocialMediaIconWrapper = styled.div`
/* border: 1px solid gray; */
/* width: 100%; */
height: 40px;
display: flex;
align-items: center;
gap: 10px;

`

export const CardSocialMediaIcon = styled.img`
width: 15px;
height: 15px;
cursor: pointer;
`

