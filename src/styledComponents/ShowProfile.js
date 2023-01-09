import styled from "styled-components";

export const Container = styled.div`
width: 100%;
max-width: 100%;
min-height: 100vh;

`
export const Wrapper = styled.div`
width: 100%;
max-width: 100%;
display: grid;
grid-template-columns: 3fr 1fr;
min-height: inherit;
padding-top: 2px;
@media only screen and (max-width:930px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

}
`
export const RightPart = styled.div`
border-left: 2px solid black;
display: flex;
align-items:flex-end;
justify-content: center;
min-height: inherit;
background-color: #FFC900;
@media only screen and (max-width:930px) {
    display: none;
}
`
export const ImgContainer = styled.div`
width: 100%;
max-width: 90%;
height: fit-content;
margin-left: -60%;
position: relative;
margin-bottom: 25%;
`
export const Img = styled.img`
height: 100%;
width: 100%;
`
export const LeftPart = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
height: 100%;
/* border: 1px solid black; */
`
export const UpperPart = styled.div`
width: 100%;
height: 100px;
max-width: 80%;
padding-top: 50px;
/* border: 1px solid black; */

`
export const HeadingTitleContainer = styled.div`

`
export const HeadingTitleImg = styled.img`

`
export const LowerPart = styled.div`
width: 100%;
max-width: 80%;
min-height: 30vh;
/* border: 1px solid black; */
display: flex;
gap: 40px;
margin-bottom: 100px;
@media only screen and (max-width:800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
`
export const LeftPartTaglineContainer = styled.div`

`
export const LeftPartTagLineHeading = styled.h1`
font-size:40px;
font-weight: 800;
font-family: Verdana, Geneva, Tahoma, sans-serif;
/* border: 1px solid black; */

`
export const LeftPartTagLinePara = styled.div`
/* border: 1px solid black; */
color: gray;
margin-top: -20px;
font-size: 17px;
font-family: Verdana, Geneva, Tahoma, sans-serif;

`
export const FormContainer = styled.div`
/* border: 1px solid black; */
width: 70%;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
@media only screen and (max-width:800px) {
    width: 100%;

}
`
export const FormTitle = styled.div`
font-size: 15px;
color: #23A094;
width: 100%;
font-weight: 600;
`
export const ProfileBasicDetailContainer = styled.div`
/* border: 1px solid black ; */
display: flex;
align-items: center;
width: 100%;
height: max-content;
gap:20px;
@media only screen and (max-width:450px){
    flex-direction: column;
}
`
export const DetailWrapper = styled.div`
/* border: 1px solid black; */
height: inherit;
`
export const DetailElement = styled.div`

`
export const Div = styled.div`
    border: 1px solid #c9c9c9;
    border-radius: 3px;
    width: 100%;
    min-height:55px;
    max-width: ${props=>props.maxWidth}%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
    font-size: 20px;
    font-weight: 370;
    margin: 1%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    @media only screen and (max-width:470px){

    }
`
 
export const LowerPartFormWrapper = styled.div`
/* border: 1px solid black; */
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap:20px;
`
export const ComponentWrapper = styled.div`
/* border: 1px solid black; */
width: 100%;
/* display: flex;
flex-direction: column;
align-items:flex-start ; */
`






