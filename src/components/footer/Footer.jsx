import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles.js";
import './FooterStyles.css';
const Footer = () => {
    return (
        <Box className="footer-box"> 
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">Aim</FooterLink>
                        <FooterLink href="#">Vision</FooterLink>
                        <FooterLink href="#">Testimonials</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">Writing</FooterLink>
                        <FooterLink href="#">Internships</FooterLink>
                        <FooterLink href="#">Coding</FooterLink>
                        <FooterLink href="#">Teaching</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">Uttar Pradesh</FooterLink>
                        <FooterLink href="#">Ahmedabad</FooterLink>
                        <FooterLink href="#">Indore</FooterLink>
                        <FooterLink href="#">Mumbai</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-facebook-f"></i>
                            <span style={{ marginLeft: "10px" }}>Facebook</span>
                        </FooterLink>
                        <FooterLink
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-instagram"></i>
                            <span style={{ marginLeft: "10px" }}>Instagram</span>
                        </FooterLink>
                        <FooterLink
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-twitter"></i>
                            <span style={{ marginLeft: "10px" }}>Twitter</span>
                        </FooterLink>
                        <FooterLink
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin"></i>
                            <span style={{ marginLeft: "10px" }}>LinkedIn</span>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};

export default Footer;
