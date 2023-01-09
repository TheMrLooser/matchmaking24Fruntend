import React from "react";
import { ComponentWrapper, Container, DetailElement, DetailWrapper, FormContainer, FormTitle, HeadingTitleContainer, HeadingTitleImg, Img, ImgContainer, LeftPart, LeftPartTaglineContainer, LeftPartTagLineHeading, LeftPartTagLinePara, LowerPart, LowerPartFormWrapper, OrContainer, OrLeft, OrRigth, OrWrapper, ProfileBasicDetailContainer, RightPart, UpperPart, Wrapper } from "../styledComponents/Profile";
import logo from '../images/MatchMaking24-friendship-dating-matrimony-match-logo.svg'

import snale from '../images/MatchMaking24-best-matrimonial-for-working-profetionals-snaleImg.svg'
import { BtnContainer, MovingTextContainer, TopBannarLeftPartBTN } from "../styledComponents/Landingpage";
 


const AboutPage = ()=>{
    return (<>
         
        <Container>
         
            <Wrapper>
                <LeftPart>
                    <UpperPart>
                        <HeadingTitleContainer><HeadingTitleImg src={logo}/></HeadingTitleContainer>
                    </UpperPart>
                    <LowerPart>
                        <LeftPartTaglineContainer>
                            <LeftPartTagLineHeading>About Us!</LeftPartTagLineHeading>
                            <LeftPartTagLinePara><br/>Know more about <br/> Matchmaking24.com</LeftPartTagLinePara>
                        </LeftPartTaglineContainer>
                        <FormContainer>
                            <h3>About Us</h3>
                            <LeftPartTagLinePara style={{textAlign:'justify'}}>
                            <br/><br/>Have you ever been on a date with someone, and it’s going great, until they mention something about themselves that is a total game changer for you, and it changes your entire opinion of them? Well, that’s going to happen slightly less often now, because people are using MatchMaking24.com to find dates! 
                            <br/><br/>But Why? Because we verify profiles from LinkedIn.
                            <br/><br/>That means that people are either finding dates in real life or via a dating app/site, and then doing a background check on every social media, or even just looking for dates directly on social medias from LinkedIn to Instagram. Sounds kinda crazy, but it makes sense; LinkedIn and social media such as Instagram is just another source to get a little bio information about someone and see if they’re right for you- no harm in that. 
                            <br/><br/>Now, you do have to approach it a bit differently since it isn’t a dating site, but rather one meant for professional connections; asking someone out the first time you have any kind of correspondence with them might not be the best approach. If you really want to date this person, see if they’re online anywhere else (Twitter, Facebook, etc.) and approach them via that site or app. 
                            <br/><br/>When you think about it for a moment, there are more than a couple solid reasons to use LinkedIn verified profiles through MatchMaking24.com to find or vet a date; in fact, here is a list of seven reasons why you need to use LinkedIn verified profiles for dating. 
                            <br/><br/>1. (Relatively) Honest Profiles 
                            <br/><br/>When you visit someone’s dating profile, you never know what’s real or factual and what’s not; they’re there to get a date, and people will embellish at length in order to get what they want. Things are a little different when it comes to their career, though; while people may lie on their LinkedIn profile, it’s not done nearly as frequently as it is done on casual dating sites and apps. 
                            <br/><br/>2. Easy Vetting 
                            <br/><br/>Find someone on MatchMaking24.com (LinkedIn verified profiles) you’d love to go out with? To make sure they’re not some catfish or robot, you should do some quick vetting, which consists of just searching through their profile and checking out their connections- if they have very few, ditch them and move on. When you encounter someone on a dating site, it’s hard to do background checks; it’s not like they’ve got their own Wikipedia page and tons of content written about them. With Instagram, Twitter, and LinkedIn you get a good overview of their career, education and social life, which can say a lot about them; you might not find honest details like that on someone’s dating profile. 
                            <br/><br/>3. Great dating pool 
                            <br/><br/>LinkedIn verified profiles on MatchMaking24.com is full of professional, ambitious people with goals just like you, people who want to be successful at whatever they do; if that doesn’t sound like a great dating pool, then I don’t know what is. 
                            <br/><br/>Of course there will be a good amount accounts you see that are well below par, just like every dating site. Although LinkedIn isn’t a dating site, there’s a ton of great accounts with potential suitors, so if a couple people aren’t up to your standards, you’ve got plenty more to choose from, rather than having to jump ship and try another resource altogether. 
                            <br/><br/>4. No fake accounts 
                            <br/><br/>Dating sites are chalk full of bots and fake accounts, but it doesn’t make sense to have a fake LinkedIn account to verify their profile on MatchMaking24.com. Like literally, I can’t come up with a good reason why anyone would make a fake LinkedIn account. 
                            <br/><br/>5. Avoid directly jumping to date or matrimony stuff, be a friend first
                            <br/><br/>Find a right matrimonial match is a journey, not a instant thing. After an unsuccessful date with someone, they’re basically out of your life forever, which sometimes can be a drag if you felt like you could’ve been friends despite what may or may not have happened between you. 
                            <br/><br/>6. You know they’re serious people capable of commitment (or can’t commit to a goldfish) 
                            <br/><br/>MatchMaking24.com completely having LinkedIn verified profiles, not Club Penguin; people are on MatchMaking24.com because they’re serious. They’re also totally capable of commitment (that’s for you ladies out there); see that one guy? Yeah, he’s had three great jobs and each one has lasted longer than 5 years - sounds like this gentleman knows how to commit. 
                            <br/><br/>7. They could be the source of your success 
                            <br/><br/>Let’s say you’ve found someone on MatchMaking24.com who you’d like to date, and you manage to set up a meeting without sounding overly creepy. This person has knowledge on a professional level that you can learn from and apply to your own career; whether you end up together or not, this person can share with you their business experiences and all they’ve learned. 
                            <br/><br/>If you’re not compatible on a personal level, maybe you’d be great together in a professional setting, where you can combine resources and create something that advances your careers. Honestly, it’s a win-win if you use LinkedIn verified profiles for dating; if you are great together, great- if you’re not meant for each other, maybe you can do business together. 
                            <br/><br/>With MatchMaking24.com, though, you give yourself a great chance at success.
                            <br/><br/>
                            </LeftPartTagLinePara>
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

export default AboutPage