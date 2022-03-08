import { Instagram, LinkedIn, Phone, Twitter } from "@mui/icons-material";
import { Link } from "@mui/material";
import React from "react";
import {
    FooterAbout,
    FooterAboutDescription,
    FooterAboutLogo,
    FooterCommunity,
    FooterContainer,
    FooterLink,
    FooterQuickLink,
    FooterSupport,
    FooterTitle,
    IconContainer,
} from "../styles/footer.styles";

function Footer() {
    return (
        <FooterContainer container>
            <FooterAbout item md={4} xs={12}>
                <FooterAboutLogo>LOGO</FooterAboutLogo>
                <FooterAboutDescription>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rerum eveniet ab quasi! Assumenda, non totam! Eum velit odit
                    distinctio sunt quasi nulla sequi, perferendis totam ullam.
                    Rerum laboriosam animi sapiente.
                </FooterAboutDescription>
            </FooterAbout>
            <FooterQuickLink item md={1.3} xs={12}>
                <FooterTitle variant="h1">Quick Links</FooterTitle>
                <FooterLink href="/" underline="none">
                    About Us
                </FooterLink>
                <FooterLink href="/" underline="none">
                    Contact Us
                </FooterLink>
                <FooterLink href="/" underline="none">
                    Tournament
                </FooterLink>
                <FooterLink href="/" underline="none">
                    Available Esports
                </FooterLink>
                <FooterLink href="/" underline="none">
                    Live Video
                </FooterLink>
            </FooterQuickLink>
            <FooterSupport item md={1.3} xs={12}>
                <FooterTitle variant="h1">Support</FooterTitle>
                <FooterLink href="/" underline="none">
                    Privacy Policy
                </FooterLink>
                <FooterLink href="/" underline="none">
                    Terms fo Service
                </FooterLink>
                <FooterLink href="/" underline="none">
                    Legality
                </FooterLink>
            </FooterSupport>
            <FooterCommunity item md={2} xs={12}>
                <FooterTitle variant="h1">Community</FooterTitle>
                <IconContainer>
                    <Link href="/">
                        <Twitter></Twitter>
                    </Link>
                    <Link href="/">
                        <LinkedIn></LinkedIn>
                    </Link>
                    <Link href="/">
                        <Instagram></Instagram>
                    </Link>
                    <Link href="/">
                        <Phone></Phone>
                    </Link>
                </IconContainer>
            </FooterCommunity>
        </FooterContainer>
    );
}

export default Footer;
