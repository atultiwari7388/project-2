import React from "react";
import { Button } from "./Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaMicrosoft,
  FaLinkedin,
  FaSkype,
} from "react-icons/fa";
import { DiStackoverflow } from "react-icons/di";
import { GrAmazon } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { FiPhoneCall } from "react-icons/fi";
import { SiWhatsapp, SiWechat } from "react-icons/si";

const FooterContainer = styled.div`
  background-color: #008080;
  /* color: #000; */
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterSubscription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bolder;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

const FooterSubHeading = styled.p`
  font-family: "Arial";
  margin-bottom: 24px;
  font-size: 24px;
`;

const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 4px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  /* border: 1px solid #222; */

  &::placeholder {
    color: #242242;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  } ;
`;

const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  } ;
`;

const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  } ;
`;

const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #000;

  @media screen and(max-width:420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  } ;
`;

const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
  color: #000;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #046765;
    transition: 0.3s ease-out;
  }
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  /* background-color: #fff; */
`;

const SocialMediaWrap = styled.div`
  display: flex;
  /* background-color: #222; */
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  /* border-radius: 4px; */

  @media screen and (max-width: 820px) {
    flex-direction: column;
  } ;
`;

const SocialLogo = styled(Link)`
  color: #24b;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const SocialIcon = styled(FaReact)`
  margin-right: 10px;
`;

const WebsiteRights = styled.small`
  color: #000;
  margin-bottom: 16px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  color: #000;
  font-size: 24px;
  font-weight: bolder;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join Our Community to Receive The Latest Topics and Working
        </FooterSubHeading>
        <FooterSubText>You Can Unsubscribe any Time</FooterSubText>
        <FooterSubText>
          <Form>
            <FormInput name="email" type="email" placeholder="xyz@gmail.com" />
            <Button primary>Subscribe</Button>
          </Form>
        </FooterSubText>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/home">Home</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/support">Support</FooterLink>
            <FooterLink to="/github">Github</FooterLink>
          </FooterLinksItems>

          <FooterLinksItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/sign-up">
              <FiPhoneCall />
              &nbsp;&nbsp;
              {"+91-6307537145"}
            </FooterLink>
            <FooterLink to="/">
              <SiWhatsapp />
              &nbsp;&nbsp;
              {"+91-6307537145"}
            </FooterLink>
            <FooterLink to="/">
              <SiWechat />
              &nbsp; WeChat
            </FooterLink>
            <FooterLink to="/">
              <FaLinkedin />
              &nbsp; Atul Tiwari
            </FooterLink>
            <FooterLink to="/">
              <FaSkype />
              &nbsp; Mr. Darling
            </FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Our Partners</FooterLinkTitle>
            <FooterLink to="/sign-up">
              <GrAmazon />
              &nbsp; Amazon
            </FooterLink>
            <FooterLink to="/">
              <FaYoutube />
              &nbsp; YouTube
            </FooterLink>
            <FooterLink to="/">
              <FcGoogle /> &nbsp; Google
            </FooterLink>
            <FooterLink to="/">
              <FaMicrosoft /> &nbsp; MicroSoft
            </FooterLink>
            <FooterLink to="/">
              <DiStackoverflow /> &nbsp; StackOverFlow
            </FooterLink>
          </FooterLinksItems>

          <FooterLinksItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/Facebook">Facebook</FooterLink>
            <FooterLink to="/Twitter">Twitter</FooterLink>
            <FooterLink to="/Instagram">Instagram</FooterLink>
            <FooterLink to="/Github">GitHub</FooterLink>
            <FooterLink to="/">Terms of Services</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            React Dev
          </SocialLogo>
          <WebsiteRights>© React Dev 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Twitter"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href={"https://www.instagram.com/atul_tiwari45/"}
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>

            <SocialIconLink
              href={"https://github.com/atultiwari7388"}
              target="_blank"
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
