import React, { useContext, useEffect, useState } from "react";
import { ComponentWrapper, Container, DetailElement, DetailWrapper, Div, FormContainer, FormTitle, HeadingTitleContainer, HeadingTitleImg, Img, ImgContainer, LeftPart, LeftPartTaglineContainer, LeftPartTagLineHeading, LeftPartTagLinePara, LowerPart, LowerPartFormWrapper, OrContainer, OrLeft, OrRigth, OrWrapper, ProfileBasicDetailContainer, RightPart, UpperPart, Wrapper } from "../styledComponents/ShowProfile";
import logo from '../images/MatchMaking24-friendship-dating-matrimony-match-logo.svg'
import snale from '../images/MatchMaking24-best-matrimonial-for-working-profetionals-snaleImg.svg'
import { BtnContainer, MovingTextContainer, TopBannarLeftPartBTN } from "../styledComponents/Landingpage";
import { ProfileLogo, ProfileLogoContainer } from "../styledComponents/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { CardProfileName, CardProfileType } from "../styledComponents/Card";
import { UserProfileData } from "../App";
import { Link, useNavigate } from "react-router-dom";
import { BtnsWrapper } from "../styledComponents/Profile";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
    



const ShowProfile = ()=>{
        const {userData} = useContext(UserProfileData)
        const { loginWithRedirect,isAuthenticated ,isLoading } = useAuth0();
          
        const [dataLoading,setDataLoading] = useState(false)
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
                        <HeadingTitleContainer><HeadingTitleImg src={logo}/></HeadingTitleContainer>
                    </UpperPart>
                    <LowerPart>
                        <LeftPartTaglineContainer>
                            <LeftPartTagLineHeading>Profile!</LeftPartTagLineHeading>
                            <LeftPartTagLinePara><br/>Welcome to profile<br/> View And Update!</LeftPartTagLinePara>
                        </LeftPartTaglineContainer>
                    {(dataLoading)&&
                        <FormContainer>
                            <ProfileBasicDetailContainer>
                                <ProfileLogoContainer style={{width:"100px",height:'100px'}}><ProfileLogo  src={isLoading?"Loading...":userData && userData.img} alt=""/></ProfileLogoContainer>
                                <DetailWrapper>
                                    <CardProfileName style={{gap:'20px'}}>{isLoading?"Loading...":`${userData&&userData.name}`} <CardProfileType style={{position:'relative',top:'0px'}}>Basic</CardProfileType></CardProfileName>
                                    <DetailElement>{isLoading?"Loading...":userData&&userData.email}</DetailElement>
                                </DetailWrapper>
                            </ProfileBasicDetailContainer>

                            <LowerPartFormWrapper>
                            {
                              (userData&&userData.country)?<>
                                <ComponentWrapper> 
                                    <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>WHERE ARE YOU?</FormTitle>
 
                                    <div style={{width:'100%',display:'flex',alignItems:'center',gap:'10px'}}>
                                        <Div maxWidth={30}>{isLoading?"Loading...":userData&&userData.country}</Div>
                                        <Div maxWidth={30}>{isLoading?"Loading...":userData&&userData.city}</Div>

                                    </div>
                                </ComponentWrapper>

                                <ComponentWrapper>
                                    <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>WHAT IS YOUR GENDER?</FormTitle>
                                    <Div maxWidth={30}>{isLoading?"Loading...":userData&&userData.gender}</Div>
                                     
                                </ComponentWrapper>

                                <ComponentWrapper>
                                <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>WHAT'S YOUR AGE?</FormTitle>
                                    <Div maxWidth={100}>{isLoading?"Loading...":userData&&userData.age} Year</Div>
                                     
                                </ComponentWrapper>


                                <ComponentWrapper>
                                    <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>LOOKING FOR</FormTitle>
                                    <Div maxWidth={100}>
                                    {
                                        userData.lokingFor.map((data,index)=> <h8> {data} ,</h8>)
                                    } 
                                    </Div>
                                     
                                </ComponentWrapper>

                                <ComponentWrapper>
                                    <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>WHEN'S YOUR BIRTHDAY</FormTitle>
                                    <Div maxWidth={100}>
                                    {isLoading?"Loading...":userData&&userData.day.split("T")[0].split("-")[2]}-
                                    {isLoading?"Loading...":userData&&userData.month.split("T")[0].split("-")[1]}- 
                                    {isLoading?"Loading...":userData&&userData.year.split("T")[0].split("-")[0]} 
                                    </Div>
                                     
                                </ComponentWrapper>


                                <ComponentWrapper>
                                    <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>WHAT'S YOUR LANGUAGE</FormTitle>
                                    <Div maxWidth={100}>
                                    {
                                        userData.language.map((data,index)=> <h8> {`${data},`} </h8>)
                                    } 
                                    </Div>
                                </ComponentWrapper>


                                <ComponentWrapper>
                                    <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>WHAT'S YOUR QUALIFICATION'S</FormTitle>
                                    <div style={{width:'100%',display:'flex',alignItems:'baseline',gap:'10px'}}>
                                        <Div maxWidth={100}>{isLoading?"Loading...":userData&&userData.higherQualification} </Div>
                                          
                                        <Div maxWidth={100}>{isLoading?"Loading...":userData&&userData.fieldOfStudy} </Div>
                                     
                                    </div>
                                    <div style={{width:'100%',display:'flex',alignItems:'baseline',gap:'10px'}}>
                                        <Div maxWidth={100}>{isLoading?"Loading...":userData&&userData.collageName} </Div>
                                        <Div maxWidth={100}>{isLoading?"Loading...":userData&&userData.schoolName} </Div>
                                    </div>

                                </ComponentWrapper>


                                <ComponentWrapper>
                                <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>IN WHICH INDUSTRY YOU WORK</FormTitle>
                                    <Div maxWidth={100}>{isLoading?"Loading...":userData&&userData.industry} </Div>
                                    <Div maxWidth={100}>{isLoading?"Loading...":userData&&userData.companyName} </Div>
                                </ComponentWrapper>


                                <ComponentWrapper>
                                    <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>YOUR SOCIAL MEDIA HANDALS</FormTitle>
                                    {userData&&userData.telegram&&<Div maxWidth={100}>{isLoading?"Loading...":userData&&userData.telegram} </Div>}
                                    {userData&&userData.twiter&&<Div maxWidth={100}>{isLoading?"Loading...":userData&&userData.twiter} </Div>}
                                    {userData&&userData.instagram&&<Div maxWidth={100}>{isLoading?"Loading...":userData&&userData.instagram} </Div>}
                                    {userData&&userData.calendly&&<Div maxWidth={100}>{isLoading?"Loading...":userData&&userData.calendly} </Div>}
                                         
                                   
                                </ComponentWrapper>

                                </>:null
                                }

                                <BtnsWrapper style={{marginTop:'30px'}}>
                                    <BtnContainer style={{maxWidth:'200px'}}><Link className="Links" to={'/profile/edit'}> <TopBannarLeftPartBTN style={{maxWidth:'300px'}} >Edit Profile <ArrowForwardIcon/></TopBannarLeftPartBTN></Link></BtnContainer>
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

export default ShowProfile