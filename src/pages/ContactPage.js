import React from "react";
import { ComponentWrapper, Container, DetailElement, DetailWrapper, FormContainer, FormTitle, HeadingTitleContainer, HeadingTitleImg, Img, ImgContainer, LeftPart, LeftPartTaglineContainer, LeftPartTagLineHeading, LeftPartTagLinePara, LowerPart, LowerPartFormWrapper, OrContainer, OrLeft, OrRigth, OrWrapper, ProfileBasicDetailContainer, RightPart, UpperPart, Wrapper } from "../styledComponents/Profile";
import logo from '../images/MatchMaking24-friendship-dating-matrimony-match-logo.svg'

import snale from '../images/MatchMaking24-best-matrimonial-for-working-profetionals-snaleImg.svg'
import {  MovingTextContainer } from "../styledComponents/Landingpage";
 


const ContactPage = ()=>{
    return (<>
         
        <Container>
         
            <Wrapper>
                <LeftPart>
                    <UpperPart>
                        <HeadingTitleContainer><HeadingTitleImg src={logo}/></HeadingTitleContainer>
                    </UpperPart>
                    <LowerPart>
                        <LeftPartTaglineContainer>
                            <LeftPartTagLineHeading style={{fontSize:'25px'}}>Contact Us!</LeftPartTagLineHeading>
                            <LeftPartTagLinePara style={{marginTop:'10px'}}>If you have any<br/> query fill the form  <br/> get support from us</LeftPartTagLinePara>
                        </LeftPartTaglineContainer>
                        <FormContainer>
                            <iframe style={{width:'100%'}} src="https://docs.google.com/forms/d/e/1FAIpQLScT-Q4ex37RDwKCzuwyZLt0UgLokpxjcC77FeCay8ottFHJOg/viewform?embedded=true" width="640" height="1092" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        </FormContainer>
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

export default ContactPage
