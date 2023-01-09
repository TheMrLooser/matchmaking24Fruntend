import styled from "styled-components";


export const Container = styled.div`
width:100%;
min-height:100vh;
display:flex;
align-items:center;
justify-content:center;
 
`
export const Wrapper = styled.div`
width:100%;
max-width:100%;
min-height:inherit;
padding-top:2px;
display:flex;
align-items:center;
flex-direction:column;
`

export const TopBannarWrapper = styled.div`
width:100%;
height:fit-content;
display:flex;
align-items:center;
justify-content:center;
animation: changeBg 6s  infinite;
padding-top:20px;
@keyframes changeBg{ 
    10%{background: rgb(255, 165, 0)}
    40%{background: rgb(255,201,0) }
    80%{background: rgb(255,144,232) }
    100%{background: rgb(255,255,255,0.5) }
    
};
 

`
export const TopBannarContainer = styled.div`
width:100%;
max-width:80%;
display:flex;
align-items:center;
justify-content:center;
min-height:500px;
margin-bottom:50px;
@media only screen and (max-width:900px){
    flex-direction:column
};

`
export const TopBannerImgContainer = styled.div`
position:relative;
height:50%;
${'' /* border:1px solid red; */}
display:flex;
justify-content:flex-end;
@media only screen and (max-width:900px){
     height: 70%;
     width:100%;
    justify-content:center;
    padding-top:20px;

}
`
export const TopBannarImg = styled.img`
height:80%;
width:80%;
border:2px solid black;
@media only screen and (max-width:900px){
     height: 100%;
     width:100%;
  

}
`
export const SmilyImg = styled.img`
position:absolute;
right:-15px;
bottom:-40px;
animation: spin 5s linear infinite;
border-radius:50%;
height:20%;
@keyframes spin{
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
@media only screen and (max-width:900px){
    right: -10px;
    bottom:-30px;
    height:20%;
}
`

export const TopBannarLeftPartContainer = styled.div`
width:100%;
max-width:100%;
display:flex;
flex-direction:column;
gap:50px;
${'' /* border:1px solid red; */}
`
export const TopBannarLeftPartHeading = styled.h1`
font-size:40px;
color:white;
 width:540px; 
 height: 30vh;
//  border:1px solid red; 
 line-height: 60px;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 @media only screen and (max-width:600px){
font-size:30px;
 width:100%; 
/* border:1px solid red;  */
 line-height: 50px;
 height: fit-content;
     
};
 @media only screen and (max-width:500px){
font-size:35px;
 width:fit-content; 
     
};
`
export const BtnContainer  = styled.div`
width:100%;
max-width:200px;
min-width:180px;
background-color:black;
border-radius:5px;

`
export const TopBannarLeftPartBTN = styled.button`
width:100%;
max-width:200px;
min-width:180px;
padding:15px 20px;
display:flex;
align-items:center;
justify-content:center;
border-radius:5px;
background-color:#FFC900;
color:black;
font-size:22px;
font-weight:600;
gap:5px;
border:none;
transform: translate(-8px, -8px);
cursor:pointer;
transition: transform 0.5s;
&:hover{
transform: translate(-2px, -2px);
}

`
export const TopBannarLeftPartElementWrapper = styled.div`
width:100%;
max-width:100%;
display:flex;
align-items:center;
gap:35px;
@media only screen and (max-width:500px){
    gap: 10px;
}
`
export const TopBannarLeftPartElement = styled.span`
width:100%;
max-width:150px;
font-size:30px;
font-weight:600;

@media only screen and (max-width:550px){
font-size:20px;

}
`

// moving text 

export const MovingTextContainer = styled.div`
width:100%;
height:70px;
background:black;
color:white;
display:flex;
align-items:center;
font-size:35px;
font-weight:600;

`


// bnner 2

export const Banner_2_container = styled.div`
background-color:pink;
padding-bottom:100px;
padding-top:100px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:10px;
`
export const Banner_2_heading = styled.div`
font-size:50px;
color:white;
display:flex;
align-items:center;
justify-content:center;
width:100%;
max-width:100%;
text-align:center;
@media only screen and (max-width:550px){
font-size:30px;
}
`
export const Banner_4_heading = styled.div`
font-size:70px;
color:white;
display:flex;
align-items:center;
justify-content:center;
width:100%;
max-width:100%;
text-align:center;
text-align:left;
justify-content:flex-start;
@media only screen and (max-width:550px){
font-size:50px;
}
`
export const BannerHeadingContainer = styled.div`
${'' /* border:1px solid red; */}

`
export const Banner_2_headingElement = styled.h1`
font-size:50px;
display:flex;
align-items:center;
justify-content:center;
width:100%;
max-width:90%;
color:white;
`
export const Banner_2_ElementContainer = styled.div`
width:100%;
display:flex;
gap:30px;
justify-content:center;
margin-top:50px;
flex-wrap:wrap;
align-items:center;
@media only screen and (max-width:800px){
    flex-direction:column
}

`
export const Banner_2_ElementWrapper = styled.div`
width:100%;
max-width:20%;
${'' /* border:1px solid black; */}
display:flex;
flex-direction:column;
gap:30px;
justify-content:center;
align-items:center;
padding:20px;
@media only screen and (max-width:800px){
     max-width:80%;
}
`
export const Banner_2_ElementImg = styled.img`
height:70%;
width:70%;
`
export const Banner_2_ElementText = styled.p`
justify-content:flex-start;
display:flex;
flex-direction:column;
gap:30px;
text-align: justify;
text-justify: inter-word;
font-size:20px;
margin-top: 10px;
`
export const Banner_1_ElementText = styled.p`
justify-content:flex-start;
display:flex;
flex-direction:column;
text-align: center;
text-justify: inter-word;
font-size:30px;
@media only screen and (max-width:550px){
    font-size: 25px;
}
@media only screen and (max-width:450px){
    font-size: 20px;
}
`
export const Banner_6_ElementText = styled.p`
text-align: center;
font-size:24px; 
width: 80%;
@media  only screen and (max-width: 550px) {
    font-size: 18px;
    width: 90%;
}
`

  

// banner 3
export const Banner_3_Maincontainer = styled.div`
background-color:white; 
width:100%;
max-width:100%;
min-height:400px;
${'' /* padding:5px; */}
${'' /* box-shadow:5px 5px 5px #d7d7d7,-2px -2px 5px #d7d7d7; */}
display:flex;
position:relative;
@media only screen and (max-width:1000px){
    flex-direction:column;
}

`
export const Banner_3_container = styled.div`
background-color:#FF90E8;
width:100%;
min-height:inherit;
position:relative;
padding:50px 0px;


`
export const Banner_3_Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
min-height:inherit;

`
export const Banner_3_Text = styled.div`
width:100%;
max-width:75%;
font-size:30px;
letter-spacing:2px;
text-align:center;
display:flex;
flex-direction :column;
gap:30px;
${'' /* font-family: 'Fredoka One', cursive; */}
@media only screen and (max-width:550px){
    font-size: 25px;
}

`
export const Banner_3_StarImg = styled.img`
position:absolute;
right:50px;
top:20px;
animation:zoomOut 0.5s linear infinite;
height:20%;
@media only screen and (max-width:1000px){
    height: 10%;
    right:10px;
    top:20px;
    animation:zoomOut_1 0.5s linear infinite;
    
};

@keyframes zoomOut {
    0%{height: 20%}
    50%{height: 25%}
    100%{height: 20%}
    
}
@keyframes zoomOut_1 {
    0%{height: 8%}
    50%{height: 11%}
    100%{height: 8%}
    
}

`
export const Banner_3_HandImg = styled.img`
position:absolute;
left:40px;
bottom:-70px;
height:50%;
z-index:10;
animation:vibes 3s linear infinite;
@media only screen and (max-width:1000px){
    height: 100px;
    left:30px;
    bottom:-40px;
};
@media only screen and (max-width:500px){
    left:20px;
};

@keyframes vibes{
    0%{ transform: rotate(-35deg)}
    25%{ transform: rotate(0deg)}
    50%{ transform: rotate(65deg)}
    75%{ transform: rotate(0deg)}
    100%{ transform: rotate(-35deg)}
}

`


// banner 4

export const Banner_4_LeftContainer = styled.div`
width:100%;
max-width:100%;
min-height:200px;
border:2px solid black;
display:flex;
align-items:center;
justify-content:center;
background-image:url('https://uploads-ssl.webflow.com/62b828ca8c56f580b8092140/62b828ca8c56f53c9a09215e_grid_yellower.svg');
background-repeat: repeat;
background-position: 50% 50%;
background-size: 100px;
${'' /* padding:20px; */}
`
export const Banner_4_Img = styled.img`
width:85%;
height:85%;
margin-top:80px;
margin-bottom:60px;


`
export const Banner_4_Arrow = styled.div`
position:absolute;
bottom:10px;
right:20px;
${'' /* transform:translate(50%, 50%); */}
${'' /* border:1px solid red; */}
z-index:10;
@media only screen and (max-width:1050px){
    bottom:10px;
    right:30px;
    width:50px;
    height:50px;
}
`
export const ArrowImg = styled.img`
width:100%;
height:100%;
animation:animate 1s infinite;
@keyframes animate {
    0%{
        transform:  translate(20px,20px)
    }
    50%{
        transform:  translate(-40px,-40px)
    }
    100%{
        transform:  translate(20px,20px)
    }
     
}
`

export const Banner_4_elements = styled.div`
margin-top:20px;
text-align:left;
${'' /* border:1px solid red; */}
@media only screen and (max-width:450px){
    font-size:22px
}
`
export const Banner_4_elementWrapper = styled.div`
${'' /* border:1px solid red; */}
display:${(props)=>props.bannarNO==5&& "flex"};
gap:${(props)=>props.bannarNO==5&& "30px"};
align-items:${(props)=>props.bannarNO==5&& "center"};
justify-content:${(props)=>props.bannarNO==5&& "center"};
@media only screen and (max-width:550px){
    flex-direction: ${(props)=>props.bannarNO==5&& "column"};
}
`
export const Banner_4_RightContainer = styled.div`
width:100%;
max-width:100%;
border:2px solid black;
border-left:none;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:relative;
padding:50px 0px;
gap:40px;

`

export const FunStar = styled.img`
position:absolute;
right:50px;
animation:vibe 2s linear infinite;
bottom:50px;
@keyframes vibe{
    0%{ transform: rotate(-45deg)}
    25%{ transform: rotate(0deg)}
    50%{ transform: rotate(45deg)}
    75%{ transform: rotate(0deg)}
    100%{ transform: rotate(-45deg)}
};
@media only screen and (max-width:750px){
   height: 100px;
   width:100px;
   top:0px;
}
`
export const SunStar = styled.img`
position:absolute;
left:40px;
bottom:20px;

animation:zoomOut 0.5s linear infinite;
@keyframes zoomOut {
    0%{height: 30%; }
    50%{height: 35%; }
    100%{height: 30%; }
};
@media only screen and (max-width:750px){
   height: 50%;
   max-width:40%;
   bottom:10px;
   left:10px;
   @keyframes zoomOut {
    0%{height: 10%; }
    50%{height: 15%; }
    100%{height: 10%; }
};
}


`