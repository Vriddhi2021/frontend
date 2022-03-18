import { Facebook, Instagram, LinkedIn, Phone, Twitter, YouTube } from "@mui/icons-material";
import { Link } from "@mui/material";
import footerImg from '../public/logoBranding.png';
import logos from '../public/logos.png';
// import jq from './jquery';

import {
    FooterAbout,
    FooterAboutDescription,
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
            <span id="circle" className="circleCursor"></span>
            <FooterContainer container>
            <FooterAbout item md={3} xs={12}>
            <FooterTitle variant="h1">About</FooterTitle>
                <FooterAboutDescription>
                Vriddhi 2021 intends to feature major E-sports tournaments and events such as Bgmi, Valorant, Chess, Fortnite, and much more.
                </FooterAboutDescription>
                <IconContainer>
                    <Link href="https://twitter.com/NitrVriddhi?t=uiMvSdfbn5s8VIN2tLcKUQ&s=09">
                        <Twitter></Twitter>
                    </Link>
                    <Link href="https://www.facebook.com/nitrkl.vriddhi/">
                        <Facebook></Facebook>
                    </Link>
                    <Link href="https://youtube.com/channel/UCy6TG8YOKd4_RrB_qj9bTVg">
                        <YouTube></YouTube>
                    </Link>
                    <Link href="https://www.linkedin.com/in/vriddhi-nit-rourkela-456664234">
                        <LinkedIn></LinkedIn>
                    </Link>
                    <Link href="https://instagram.com/vriddhi.nitr">
                        <Instagram></Instagram>
                    </Link>
                    <Link href="tel:8114826866">
                        <Phone></Phone>
                    </Link>
                </IconContainer>
            </FooterAbout>
            <FooterQuickLink item md={1.5} xs={12}>
                <FooterTitle variant="h1">Quick Links</FooterTitle>
                <FooterLink href="/about" underline="none">
                    About Us
                </FooterLink>
                <FooterLink href="/contact" underline="none">
                    Contact Us
                </FooterLink>
                <FooterLink href="/tournaments" underline="none">
                    Tournament
                </FooterLink>
                <FooterLink href="/#esports" underline="none">
                    Available Esports
                </FooterLink>
                <FooterLink href="/#trendingV" underline="none">
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
