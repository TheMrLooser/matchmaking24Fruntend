import styled from 'styled-components';

export const FooterContainer = styled.footer`
width:100%;
min-height:40vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background-color:#23A094;
padding-top:50px;
`
export const FooterWrapper = styled.div`
width:inherit;
min-height:inherit;
display:flex;
align-items:center;
justify-content:center;
${'' /* border:1px solid red; */}
@media only screen and (max-width:700px){
    flex-direction:column;
    
}
`
export const FooterElementContainer = styled.div`
width:100%;
max-width:30%;
min-height:inherit;
display:flex;
flex-direction:column;
/* border:1px solid red; */
@media only screen and (max-width:700px){
    display:${(props)=>props.hide=='hide' ? "none":''};
    max-width:90%;
    align-items:center;

}
`
export const ImagesCOntainer = styled.div`
width:100%;
height:inherit;
display:flex;
align-items:center;
justify-content:flex-end;
@media screen and (max-width: 700px) {
justify-content:center;
   
}
`
export const FooterElement = styled.div`
width:100%;
max-width:80%;
min-width: fit-content;
display:flex;
align-items:center;
border:3px solid black;
min-height:40px;
margin-top:20px;
background-color:#fbb02f;
gap:20px;
font-size:20px;
overflow: hidden;
padding-right: 10px;
@media only screen and (max-width:700px){
    margin-left: 10%;
}
`
export const FooterElementIcon = styled.div`
width:100%;
width:50px;
display:flex;
${'' /* flex-direction:column; */}
align-items:center;
justify-content:center;
border-right:3px solid black;
min-height:inherit;
background-color:white;
`

export const FooterImg = styled.img`
width:70%;
max-width:70%;
display:${(props)=>props.hide=='hide' ? "none":'block'};

`

export const FooterCopyRightSection = styled.div`
width:100%;
max-width:90%;
display:flex;
justify-content:space-around;
margin:20px 0px;
font-size:10px;
letter-spacing:2px;
@media only screen and (max-width:700px){
    flex-direction: column;
    gap:20px;
    justify-content:center;
    align-items:center;
    ${'' /* margin-left:30px; */}
}
`