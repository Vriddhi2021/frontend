import styled from "@emotion/styled";
import { Grid, Link, Typography } from "@mui/material";

export const FooterContainer = styled(Grid)`
    background-color: #18082e;
    width: 100%;
    padding: 60px;
    gap: 60px;
    color: #ffffff;
    justify-content: center;

    @media (max-width: 900px) {
        gap: 40px;
        padding: 40px;
    }
`;

export const FooterAbout = styled(Grid)`
    display: flex;
    flex-direction: column;
    ${'' /* align-items: center; */}
    gap: 10px;

    @media (max-width: 900px) {
        align-items: flex-start;
    }
`;

export const FooterAboutLogo = styled.div`
    font-size: 20px;
`;
export const FooterAboutDescription = styled.div`
    text-align: justify;
    color: #A3A3A3;
`;

export const FooterTitle = styled(Typography)`
    font-size: 20px;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
`;

export const FooterQuickLink = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const FooterLink = styled(Link)`
    cursor: pointer;
    color: inherit;
    padding: 2px 0;
    color: #A3A3A3 !important;
    &:hover {
        color: white;
    }
`;

export const FooterSupport = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const FooterCommunity = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const IconContainer = styled.div`
    display: flex;
    margin-top: 10px;
    gap: 10px;

    & svg {
        font-size: 30px;
        color: #ffffff;
        border: 1px solid #ffffff;
        border-radius: 50%;
        padding: 5px;
        cursor: pointer;

        &:hover {
            color: #ba8ff5;
            border: 1px solid #ba8ff5;
        }
    }
`;
