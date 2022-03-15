import { Instagram, LinkedIn, Phone, Twitter } from "@mui/icons-material";
import { Link } from "@mui/material";
import footerImg from '../public/logoBranding.png';
import logos from '../public/logos.png';
// import jq from './jquery';

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
        <>
            <span id="circle" class="circleCursor"></span>
            <FooterContainer container>
            <FooterAbout item md={3} xs={12}>
            <FooterTitle variant="h1">About</FooterTitle>
                <FooterAboutDescription>
                Vriddhi 2021 intends to feature major E-sports tournaments and events such as Bgmi, Valorant, Chess, Fortnite, and much more.
                </FooterAboutDescription>
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
            </FooterAbout>
            <FooterQuickLink item md={1.5} xs={12}>
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
            <FooterCommunity item md={3} xs={12}>
            <img className="footerLogoBranding" src={footerImg.src} alt="logoBranding"/>
            <img className="logosFooter" src={logos.src} alt="logos"/>
               
            </FooterCommunity>
        </FooterContainer>
        </>
    );
}

export default Footer;
