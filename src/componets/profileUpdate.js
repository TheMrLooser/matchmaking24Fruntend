import React, { useContext, useEffect, useState } from "react";
import { BtnsWrapper, ComponentWrapper, Container, DetailElement, DetailWrapper, FormContainer, FormTitle, HeadingTitleContainer, HeadingTitleImg, Img, ImgContainer, LeftPart, LeftPartTaglineContainer, LeftPartTagLineHeading, LeftPartTagLinePara, LowerPart, LowerPartFormWrapper, OrContainer, OrLeft, OrRigth, OrWrapper, ProfileBasicDetailContainer, RightPart, UpperPart, Wrapper } from "../styledComponents/Profile";
import logo from '../images/MatchMaking24-friendship-dating-matrimony-match-logo.svg'

import snale from '../images/MatchMaking24-best-matrimonial-for-working-profetionals-snaleImg.svg'
import { BtnContainer, MovingTextContainer, TopBannarLeftPartBTN } from "../styledComponents/Landingpage";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { ProfileLogo, ProfileLogoContainer } from "../styledComponents/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { CardProfileName, CardProfileType } from "../styledComponents/Card";
import { UserProfileData } from "../App";
import axios from "axios";
import { HOST_NAME } from "../hostName";
import Box from '@mui/material/Box';
import counrtyList from '../JsonData/countryName.json' 
import IndustryList from '../JsonData/IndustryData.json' 
//year picker
import {DesktopDatePicker,LocalizationProvider, } from '@mui/x-date-pickers';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Alert, Collapse, FormHelperText, IconButton } from "@mui/material";

// import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Loader from "../loder/loder";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
PaperProps: {
    style: {
    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    width: 250,
    },
},
};


    const names = [
        'Hindi', 
        'English',
        'Urdu',
        'Tamil',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];

    const LookingforTags = [
        "Dating","Matrimonial","Friendship"
    ]



    



const ProfileUpdate = ()=>{
        // alert section
        const [alertOpen, setAlertOpen] = useState(false);
        const [alertText, setAlertText] = useState("Somthing");
        const [alertType, setAlertType] = useState("success");

        const setAlert = (type,text,status)=>{
        setAlertType(type)
        setAlertText(text)
        setAlertOpen(status)
        }

        if(alertOpen){
        setTimeout(() => {
            setAlertOpen(false)
        }, 10000);
        }


        const {userData} = useContext(UserProfileData)
        const { loginWithRedirect,isAuthenticated ,isLoading } = useAuth0();
         
        const [city, setCity] = useState(userData&&userData.city&&userData.city);
        const [country, setCountry] = useState(userData&&userData.country&&userData.country);
        const [gender, setGender] = useState(userData&&userData.gender?userData.gender:"female");
        const [year, setYear] = useState(dayjs(userData&&userData.year&&userData.year));
        const [month, setMonth] = useState(dayjs(userData&&userData.month&&userData.month));
        const [day, setDay] = useState(dayjs(userData&&userData.day&&userData.day));
        const [language, setLanguage] = useState(userData&&userData.language?userData.language:[]);
        const [qualification, setQualification] = useState(userData&&userData.higherQualification&&userData.higherQualification);
        const [fieldOfStudy, setFieldOfStudy] = useState(userData&&userData.fieldOfStudy&&userData.fieldOfStudy);
        const [schoolName, setSchoolName] = useState(userData&&userData.schoolName&&userData.schoolName);
        const [collageName, setCollageName] = useState(userData&&userData.collageName&&userData.collageName);
        const [industry, setIndustry] = useState(userData&&userData.industry&&userData.industry);
        const [companyName, setCompanyName] = useState(userData&&userData.companyName&&userData.companyName);
        const [lokingFor, setLookingFor] = useState(userData&&userData.lokingFor?userData.lokingFor:[]);
        const [telegram, setTelegram] = useState(userData&&userData.telegram&&userData.telegram);
        const [instagram, setInstagram] = useState(userData&&userData.instagram&&userData.instagram);
        const [twiter, setTwiter] = useState(userData&&userData.twiter&&userData.twiter);
        const [calendly, setCalendly] = useState(userData&&userData.calendly&&userData.calendly);
        // const [age, setAge] = useState(userData&&userData.age&&userData.age);
         
        
        const handleCheckBOXChange = (event) => {
            const {
                target: { value },
            } = event;
            setLanguage(
                // On autofill we get a stringified value.
                typeof value === 'string' ? value.split(',') : value,
                );
            };
        const handleCheckBOXChange_LookingFor = (event) => {
            const {
                target: { value },
            } = event;
            setLookingFor(
                // On autofill we get a stringified value.
                typeof value === 'string' ? value.split(',') : value,
                );
            };

    const [openLoader,setOpenLoader] = useState(false)
    const updateProfile = async()=>{
        if(!city||!country||!gender||!year||!month||!day||!language||!fieldOfStudy||!schoolName||!collageName||!industry||!companyName||!lokingFor){
            setAlert("error",'Fill all the required field first',true)

        }
        else{
            setOpenLoader(true)
            const res = await axios.put(`${HOST_NAME}/user/update-user`, 
            {calendly,city,country,gender,email:userData.email,year,month,day,language,higherQualification:qualification,fieldOfStudy,schoolName,collageName,industry,companyName,lokingFor,telegram,instagram,twiter})
            if(res.data.error){
                return setAlert("error",res.data.message,true);
               }
            setAlert("success",res.data.message,true)
            setOpenLoader(false)
        }

    }



    const countryList = [...new Set(counrtyList.map(items=>items.countryName))]
    countryList.sort()
    const cityList = [...new Set(counrtyList.map(items=>(items.countryName ===country  )?items.cityNameList:""))]
    const FieldOfStudyList = ["Medicine",'Engineering','Aarchitecture','Science','Business','Humanitiese & Arts' ,'Hotel Management','Management','Fashion','Law','Design','Psychology','Finance','Other']
    

    const [dataLoading,setDataLoading] = useState(false)
    const nevigate = useNavigate()
    useEffect(()=>{ 
        if(userData&&userData.name){
            setDataLoading(true)
        }
    },[ userData])
        

     

     return (<>
        <Container>
         
            <Wrapper>
                <LeftPart>
                    <UpperPart>
                        <HeadingTitleContainer><HeadingTitleImg src={logo} /></HeadingTitleContainer>
                    </UpperPart>
                    <LowerPart>
                        <LeftPartTaglineContainer>
                            <LeftPartTagLineHeading>Profile!</LeftPartTagLineHeading>
                            <LeftPartTagLinePara><br/>Welcome to profile<br/> View And Update!</LeftPartTagLinePara>
                        </LeftPartTaglineContainer>
                    {dataLoading&&
                        <FormContainer>
                            <ProfileBasicDetailContainer>
                                <ProfileLogoContainer style={{width:"100px",height:'100px'}}><ProfileLogo  src={isLoading?"Loading...":userData && userData.img} alt=""/></ProfileLogoContainer>
                                <DetailWrapper>
                                    <CardProfileName style={{gap:'20px'}}>{isLoading?"Loading...":`${userData&&userData.name}`} <CardProfileType style={{position:'relative',top:'0px'}}>Basic</CardProfileType></CardProfileName>
                                    <DetailElement>{isLoading?"Loading...":userData&&userData.email}</DetailElement>
                                </DetailWrapper>
                            </ProfileBasicDetailContainer>

                            <LowerPartFormWrapper>

                             

                                <ComponentWrapper> 
                                    <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>WHERE ARE YOU? *</FormTitle>
 
                                    <div style={{width:'100%',display:'flex',alignItems:'center',gap:'10px'}}>
                                        <FormControl sx={{ m: 1,width:'40%' }}>
                                        <InputLabel id="demo-simple-select-helper-label" sx={{backgroundColor:'white'}}>{userData&&userData.country?userData.country:"Country"}</InputLabel>
                                            <Select    
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={country}
                                            label="Country"
                                            onChange={(e)=>{setCountry(e.target.value)}}
                                            
                                            > 
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                             {
                                                countryList && countryList.map((item,index)=>
                                                    <MenuItem value={item} key={index}>{item}</MenuItem>
                                                )
                                             }
                                            </Select>
                                        </FormControl>

                                        <FormControl sx={{ m: 1, width:'40%' }}>
                                        <InputLabel sx={{backgroundColor:'white'}} id="demo-simple-select-helper-label">{userData&&userData.city?userData.city:"City"}</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={city}
                                            label="City"
                                            onChange={(e)=>{setCity(e.target.value)}}
                                            sx={{":focus":{ border:"3px solid red", backgroundColor: '#ffddec',borderColor: 'brown'}}}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {
                                                cityList[1]&&cityList[1].map((data,index)=>
                                                    <MenuItem key={index} value={data.name}>{data.name}</MenuItem>
                                                ) 
                                            }
                                             
                                            </Select>
                                        </FormControl>
                                    </div>
                                </ComponentWrapper>

                                <ComponentWrapper>
                                    <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>WHAT IS YOUR GENDER? *</FormTitle>
                                    <FormControl  sx={{paddingLeft:1}}>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        row
                                        value={gender}
                                        onChange={(e)=>{setGender(e.target.value)}}
                                    >
                                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                    </FormControl>
                                </ComponentWrapper>

                                 


                                <ComponentWrapper>
                                    <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>LOOKING FOR *</FormTitle>
                                    <FormControl sx={{ m: 1, width: '98%' }}>
                                    <InputLabel id="demo-multiple-checkbox-label" style={{backgroundColor:'white'}} >Looking For</InputLabel>
                                    <Select
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={lokingFor}
                                    onChange={handleCheckBOXChange_LookingFor}
                                    input={<OutlinedInput label="Tag" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                    >
                                    {LookingforTags.map((name) => (
                                        <MenuItem key={name} value={name}>
                                        <Checkbox checked={lokingFor.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                    </Select>
                                    </FormControl>
                                </ComponentWrapper>

                                <ComponentWrapper>
                                    <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>WHEN'S YOUR BIRTHDAY *</FormTitle>
                                    <FormControl  sx={{paddingLeft:1}}>
                                    
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <Stack spacing={3}>
                                                <div style={{width:'100%',display:'flex',alignItems:'center',gap:'10px',marginTop:'15px'}}>
                                                    <DesktopDatePicker
                                                    views={['year']}
                                                    label="Year"
                                                    value={year}
                                                    disableFuture
                                                    onChange={(newValue)=>{setYear(newValue)}}
                                                    renderInput={(params) => <TextField {...params} />}
                                                    />
                                                    <DesktopDatePicker
                                                    views={['month']}
                                                    label="Month"
                                                    inputFormat="MM"
                                                    value={month}
                                                    onChange={(newValue)=>{setMonth(newValue)}}
                                                    renderInput={(params) => <TextField {...params} />}
                                                    />
                                                    <DesktopDatePicker
                                                    views={['day']}
                                                    label="Day"
                                                    value={day}
                                                    inputFormat = "DD"
                                                    onChange={(newValue)=>{setDay(newValue)}}
                                                    renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </div>
                                            </Stack>
                                        </LocalizationProvider>
                                    </FormControl>
 
                                </ComponentWrapper>


                                <ComponentWrapper>
                                    <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>WHAT'S YOUR LANGUAGE *</FormTitle>
                                    <FormControl sx={{ m: 1, width: '98%' }}>
                                    <InputLabel id="demo-multiple-checkbox-label" style={{backgroundColor:'white'}} >Language</InputLabel>
                                    <Select
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={language}
                                    onChange={handleCheckBOXChange}
                                    input={<OutlinedInput label="Tag" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                    
                                    >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name}>
                                        <Checkbox checked={language.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                    </Select>
                                    </FormControl>
                                </ComponentWrapper>


                                <ComponentWrapper>
                                    <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>WHAT'S YOUR QUALIFICATION'S *</FormTitle>
                                    <div style={{width:'100%',display:'flex',alignItems:'baseline',gap:'10px'}}>
                                        <FormControl sx={{ m: 1,width:'40%' }}>
                                        <InputLabel id="demo-simple-select-helper-label"  style={{backgroundColor:'white'}}>Qualification</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={qualification}
                                            // label="City" 
                                            onChange={(e)=>{setQualification(e.target.value)}}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={"Bachelors"}>Bachelors</MenuItem>
                                            <MenuItem value={"Masters"}>Masters</MenuItem>
                                            <MenuItem value={"PHD"}>PHD</MenuItem>
                                            <MenuItem value={"Post Doc"}>Post Doc</MenuItem>
                                            <MenuItem value={"Other"}>Other</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <FormControl sx={{ m: 1, width:'40%' }}>
                                        <InputLabel id="demo-simple-select-helper-label" style={{backgroundColor:'white'}}>Field Of Study *</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={fieldOfStudy}
                                            onChange={(e)=>{setFieldOfStudy(e.target.value)}}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {FieldOfStudyList.map((item,index)=><MenuItem key={index} value={item}>{item}</MenuItem>)}
                                            </Select>
                                        </FormControl>
                                        

                                        
                                    </div>
                                    <FormControl  sx={{m:1,width:'100%'}}>
                                    <div style={{width:'100%',display:'flex',alignItems:'baseline',gap:'10px'}}>
                                        <TextField sx={{width:'45%'}} id="outlined-basic" label={schoolName?schoolName:"Institute I"} variant="outlined" onChange={(e)=>{setSchoolName(e.target.value)}} />
                                        <TextField sx={{width:'45%'}} id="outlined-basic" label={collageName?collageName:"Institute II"} variant="outlined" onChange={(e)=>{setCollageName(e.target.value)}} />
                                    </div>
                                    </FormControl>

                                </ComponentWrapper>


                                <ComponentWrapper>
                                <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>IN WHICH INDUSTRY YOU WORK *</FormTitle>
                                    <div style={{width:'100%',display:'flex',alignItems:'baseline',gap:'10px'}}>
                                        <FormControl sx={{ m: 1, width:'40%' }}>
                                            <InputLabel id="demo-simple-select-helper-label" sx={{backgroundColor:"white"}}>Industry</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={industry}
                                            onChange={(e)=>{setIndustry(e.target.value)}}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {
                                                IndustryList&&IndustryList.map((item,index)=>
                                                <MenuItem value={item.name} key={index}>{item.name}</MenuItem>
                                                )
                                            }
                                            
                                             
                                            </Select>
                                        </FormControl>
                                        <TextField id="outlined-basic" label={companyName?companyName:"Company Name"} variant="outlined" onChange={(e)=>{setCompanyName(e.target.value)}} />
                                        
                                    </div>
                                </ComponentWrapper>


                                <ComponentWrapper>
                                    <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>YOUR SOCIAL MEDIA HANDALS</FormTitle>
                                         
                                    <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '100%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label={telegram?telegram:"telegram.com/______"} variant="outlined" onChange={(e)=>{setTelegram(e.target.value)}} />
                                         
                                    </Box>
                                    <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '100%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label={instagram?instagram:"instagram.com/________"} variant="outlined"  onChange={(e)=>{setInstagram(e.target.value)}}/>
                                         
                                    </Box>
                                    <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '100%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label={twiter?twiter:"twiter.com/_______"} variant="outlined" onChange={(e)=>{setTwiter(e.target.value)}} />
                                         
                                    </Box>
                                    <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '100%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label={calendly?calendly:"calendly.com/_______"} variant="outlined" onChange={(e)=>{setCalendly(e.target.value)}} />
                                         
                                    </Box>
                                </ComponentWrapper>

                                <BtnsWrapper>
                                    <Collapse in={alertOpen} id="alert"> 
                                    <Alert
                                        action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"
                                            onClick={() => {
                                            setAlertOpen(true);
                                            }}
                                        >
                                        </IconButton>
                                        }
                                        sx={{ mb: 2 }}
                                        severity={alertType}
                                    >
                                    {alertText}
                                    </Alert>
                                    </Collapse>
                                    <div className="btnWrapper">
                                        <BtnContainer style={{maxWidth:'200px'}}><TopBannarLeftPartBTN style={{maxWidth:'300px'}} onClick={updateProfile}>{openLoader?<Loader/>:"Save Prfofile"}</TopBannarLeftPartBTN></BtnContainer>
                                        <Link className='Links' to={(!city||!country||!gender||!year||!month||!day||!language||!fieldOfStudy||!schoolName||!collageName||!industry||!companyName||!lokingFor)?null:'/right-match-for-friendship-dating-matrimony'}><BtnContainer><TopBannarLeftPartBTN>Find Match<ArrowForwardIcon/></TopBannarLeftPartBTN></BtnContainer></Link>
                                    </div>
                                </BtnsWrapper>

                            </LowerPartFormWrapper> 

                        </FormContainer>
                    }
                    </LowerPart>
                </LeftPart>
                <RightPart>
                    <ImgContainer>
                        <Img src={snale}/>
                    </ImgContainer>
                </RightPart>
            </Wrapper>
            <MovingTextContainer> <marquee style={{marginLeft: '20px', marginRight: '20px'}} behavior="scroll" scrollamount="12"> Join Now  •  Make it Happen    &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen   </marquee></MovingTextContainer>
         
        </Container>
       
    </>)
}

export default ProfileUpdate