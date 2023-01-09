import styled from 'styled-components';
import Slider from '@mui/material/Slider';
import { Select } from 'antd'; 


export const Container  = styled.div`
width: 100%;
min-height: 100vh;
background-color: #FFF0E5;
position: relative;
margin-top: 5px;

`
export const Wrapper  = styled.div`
width: 100%;
max-width: 99%;
min-height: 100vh;
display: grid;
grid-template-columns:2fr 7fr;
padding-top:10px;
padding-top: 50px;
/* border: 2px solid red; */
@media only screen and (max-width:900px){
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;

};

`
// Filter

export const FilterOpenerContainer = styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: center;

@media only screen and (min-width:900px) {
    display: none;
}
`
export const FilterOpener = styled.div`
width: 100%;
max-width: 70%;
height: 50px;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
font-weight: 600;
border-radius: 3px;
cursor: pointer;
`

export const FilterContainer  = styled.div`
width: 100%;
min-width: 200px;
max-height: fit-content;
min-height: 100px;
background-color: #FFF0E5;
/* border: 1px solid red; */
margin-left: 30px;
@media only screen and (max-width:1300px){
  margin-left: 10px;

}
@media only screen and (max-width:900px){
    width: 300px;
    max-height: 100%;
    overflow: auto;
    position:fixed ;
    z-index: 50;
    top: 70px;
    left: 0px;
    &::-webkit-scrollbar {
    display: none;
    };
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    display: ${(props) => props.status =="show" ? "block" :"none" };

};


`
export const FilterWrapper  = styled.div`
/* padding: 10px; */
border: 1px solid black;
border-radius: 3px;
padding-bottom: 40px;
`
export const FilterElement  = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:15px;
`

export const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    // backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#FFC900',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

export const FilterH2  = styled.h2`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 600;
letter-spacing: 1px;
display: flex;
align-items: center;
justify-content: center;
background-color: #FFC900;
margin-top: 0px;
height: 70px;
border-radius: 3px;
`
export const FilterH5  = styled.h4`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 600;
letter-spacing: 1px;
color: black;
font-size: 18px;
padding-left: 10px;
margin-top: 20px;
margin-bottom: 10px;
`

 

export const FilterSelect = styled.select`
width:100%;
max-width: 80%;
height:40px;
font-size:18px;
background: #FFF0E5;
border-radius: 0px;
cursor: pointer;
display: inline-block;
border: 1px solid black;
border-radius: 3px;
font-size: 15px;
padding-left: 5px;
-webkit-appearance: none;
-moz-appearance: none;

// select arrow designe
background-image:
linear-gradient(45deg, transparent 50%, gray 50%),
linear-gradient(135deg, gray 50%, transparent 50%),
radial-gradient(#ddd 70%, transparent 70%);
background-position:
calc(100% - 20px) calc(1em + 2px),
calc(100% - 15px) calc(1em + 2px),
calc(100% - .6em) .5em;
background-size:
5px 5px,
5px 5px,
1.5em 1.5em;
background-repeat: no-repeat;

&:focus{
  background-image:
linear-gradient(45deg, white 50%, transparent 50%),
linear-gradient(135deg, transparent 50%, white 50%),
radial-gradient(gray 70%, transparent 72%);
background-position:
calc(100% - 15px) 1em,
calc(100% - 20px) 1em,
calc(100% - .6em) .5em;
background-size:
5px 5px,
5px 5px,
1.5em 1.5em;
background-repeat: no-repeat;
border-color: green;
outline: 0;
}

`
export const FilterOption = styled.option`
  background: #FFF0E5;
  color: gray;
font-size: 15px;


&:checked{
    background: white
};


`
export const FilterInputRange = styled.input`
width: 100%;
max-width: 70%;
`
export const FilterInputRangeOutput = styled.span`
width: 100%;
max-width: 40px;
height: 20px;
/* border: 1px solid black; */
display: flex;
align-items: center;
justify-content: center;


`
export const FilterCustomInput = styled.input`
width: 100%;
max-width: 80%;
height: 40px;
border-radius: 3px;
border: 1px solid black;
padding-left: 5px;
background-color: #FFF0E5;
`

export const FilterButtonContainer = styled.div`
width: 100%;
display: flex;
gap:20px;
align-items: center;
justify-content: center;
/* border: 1px solid red; */
margin-top: 40px;
padding: 10px;
@media only screen and (max-width:900px){
margin-top: 20px;
margin-bottom: 20px;

}
`
export const FilterButtonWrapper = styled.div`
width:100%;
max-width:fit-content;
background-color:black;
border-radius:5px;
`

export const FilterButton = styled.button`
width:100%;
max-width:fit-content;
padding:5px 15px;
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

// Card 

export const CardMainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:30px;
padding-bottom: 50px;
/* border: 2px solid black; */
width:100%;
`
export const CardWrapper = styled.div`
width: 90%;
height: max-content;
/* border: 2px solid red; */
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`
export const CardContainer  = styled.div`
width: 100%;
/* border: 2px solid black; */
min-height:100vh ;
display: flex;
flex-wrap: wrap;
gap: 40px;
justify-content: center;
/* align-items: center; */
padding-top: 20px;
padding-bottom: 50px;

`

export const TopBannerContainer = styled.div`
width: 100%;
height: 70px;
background-color: #FFC900;
border-radius: 3px ;
display: flex;
align-items: center;
justify-content: center;
font-size: 22px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 600;
letter-spacing: 1px;
@media only screen and (max-width:900px) {
    max-width: 70%;

}
`
export const Title = styled.div`
width: 100%;
font-size: 25px;
font-weight: 600;
@media only screen and (max-width:900px) {
    width: 70%;

}
`
export const PaginationContainer = styled.div`
  
`
export const PaginationWrapper = styled.div`

`