import img from "../public/events/commonImg.png";
import valorant from "../public/events/vALORANT.jpg";
import csgo from "../public/events/CSGO-Operation-10-Details.jpg";
import codm from "../public/events/CODM.jpg";
import clashRoyale from "../public/events/ClashRoyale.png";
import rocketLeague from "../public/events/Rocketleague.jpg";
import freeFire from "../public/events/FreeFiremax.png";
import fantasyCricket from "../public/events/FanatsyCricketBetting.jpeg";
import skribble from "../public/events/Skribble.png";
import amongUs from "../public/events/AmongUs.jpg";
import sudduko from "../public/events/sudoku.jpg";
import typeracer from "../public/events/typeracer.jpg";
import ludo from "../public/events/Ludo.jpg";
import pubg from "../public/events/PUBG.png";

const Events = [
    {
        id: 1,
        name: "Battle Ground Mobile India (Solo)",
        category: "Major Event",
        description: "Battle Royale Solo Event",
        teamSize: 1,
        prize: "4,500",
        pdfLink: "#",
        day: 3,
        date: 27,
        discord: "#",
        img: pubg.src,
    },
    {
        id: 2,
        name: "Battle Ground Mobile India (Squad)",
        category: "Major Event",
        description: "Battle Royale Squad Event",
        teamSize: 4,
        prize: "15,500",
        pdfLink: "#",
        day: 2,
        date: 26,
        discord: "#",
        img: pubg.src,
    },
    {
        id: 3,
        name: "Valorant",
        category: "Major Event",
        description: "5v5 character-based tactical FPS",
        teamSize: 5,
        prize: "20,000",
        pdfLink:
            "https://docs.google.com/document/d/1NGDTX5HF8aDsKyP5mpu5Q4DveD1n6ARopIMyJgF34Xs/edit?usp=sharing",
        day: "1,02",
        date: 25,
        discord: "#",
        img: valorant.src,
    },
    {
        id: 4,
        name: "CSGO",
        category: "Major Event",
        description: "5v5 tactical FPS",
        teamSize: 5,
        prize: "7,500",
        pdfLink: "#",
        day: 3,
        date: 27,
        discord: "#",
        img: csgo.src,
    },
    {
        id: 5,
        name: "Call of Duty Mobile",
        category: "Major Event",
        description: "5v5 Multiplayer",
        teamSize: 5,
        prize: "6,000",
        pdfLink:
            "https://docs.google.com/document/d/1m71K7n124S6lpnIh4Jp03hrqr0J1Z9ADhD0lgAfeKT4/edit?usp=sharing",
        day: 2,
        date: 26,
        discord: "#",
        img: codm.src,
    },
    {
        id: 6,
        name: "Clash Royale",
        category: "General Games & events",
        description: "1 V 1  Real-time Battle",
        teamSize: 1,
        prize: "4,500",
        pdfLink:
            "https://docs.google.com/document/d/1O_nB3t4WmOXpRqN7CCei2v0uUFlCIp8pcQBiVD290Ys/edit?usp=sharing",
        day: 3,
        date: 27,
        discord: "#",
        img: clashRoyale.src,
    },
    {
        id: 7,
        name: "Rocket League",
        category: "General Games & events",
        description: "Arcade-style soccer and vehicular mayhem Game",
        teamSize: 3,
        prize: "4,500",
        pdfLink:
            "https://docs.google.com/document/d/1OUcK32V1CEl_66OieS6N-KWtxtqhoF7nw3CY0VXLWGc/edit?usp=sharing",
        day: 2,
        date: 26,
        discord: "#",
        img: rocketLeague.src,
    },
    {
        id: 8,
        name: "Free fire max",
        category: "General Games & events",
        description: "Battle Royale Squad Event",
        teamSize: 4,
        prize: "4,500",
        pdfLink:
            "https://docs.google.com/document/d/145E3Yf9DjRVIoVJ5Rmmq8UmFmiNDbNP436B8Enc07FI/edit?usp=sharing",
        day: 2,
        date: 26,
        discord: "#",
        img: freeFire.src,
    },
    {
        id: 9,
        name: "Fantasy Cricket Betting",
        category: "General Games & events",
        description: "Fanatasy Betting",
        teamSize: 1,
        prize: "3,000",
        pdfLink:
            "https://docs.google.com/document/d/1cH1QFjHo2wDaQyTZRP2psKe1QN0pnq8LCE3xLvzyWn0/edit?usp=sharing",
        day: "2,03",
        date: 26,
        discord: "#",
        img: fantasyCricket.src,
    },
    {
        id: 10,
        name: "Game Quiz (Inquizzitives)",
        category: "Events with Clubs",
        description: "Quiz Competition",
        teamSize: 1,
        prize: "2,500",
        pdfLink: "#",
        day: 2,
        date: 26,
        discord: "#",
        img: img.src,
    },
    {
        id: 11,
        name: "Gamejam (GTA)",
        category: "Events with Clubs",
        description: "Game making Competition",
        teamSize: 4,
        prize: "6,000",
        pdfLink: "#",
        day: 1,
        date: 25,
        discord: "#",
        img: img.src,
    },
    {
        id: 12,
        name: "Housie (Rotract)",
        category: "Events with Clubs",
        description: "Online Indian Bingo",
        teamSize: 1,
        prize: "2,500",
        pdfLink: "#",
        day: 2,
        date: 26,
        discord: "#",
        img: img.src,
    },
    {
        id: 13,
        name: "Chess (Knights)",
        category: "Events with Clubs",
        description: "Chess workshop + Game",
        teamSize: 1,
        prize: "4,500",
        pdfLink: "#",
        day: 2,
        date: 26,
        discord: "#",
        img: img.src,
    },
    {
        id: 14,
        name: "Wrangle of Wits (Clarion)",
        category: "Events with Clubs",
        description: "Debate Event",
        teamSize: 1,
        prize: "3,000",
        pdfLink: "#",
        day: 3,
        date: 27,
        discord: "#",
        img: img.src,
    },
    {
        id: 15,
        name: "Fanart",
        category: "Events with Clubs",
        description: "Artmaking Event",
        teamSize: 1,
        prize: "1,500",
        pdfLink: "#",
        day: "",
        date: 23,
        discord: "#",
        img: img.src,
    },
    {
        id: 16,
        name: "Skribble.io",
        category: "Fun-event",
        description: "Drawing and Guessing event",
        teamSize: 1,
        prize: 500,
        pdfLink: "#",
        day: 1,
        date: 25,
        discord: "#",
        img: skribble.src,
    },
    {
        id: 17,
        name: "Among Us",
        category: "Fun-event",
        description: "Party game of teamwork and betrayal Event",
        teamSize: 1,
        prize: 500,
        pdfLink: "#",
        day: 1,
        date: 25,
        discord: "#",
        img: amongUs.src,
    },
    {
        id: 18,
        name: "Sudoku",
        category: "Fun-event",
        description: "Puzzle Games",
        teamSize: 1,
        prize: 500,
        pdfLink: "#",
        day: 3,
        date: 27,
        discord: "#",
        img: sudduko.src,
    },
    {
        id: 19,
        name: "Type Racer",
        category: "Fun-event",
        description: "",
        teamSize: 1,
        prize: 500,
        pdfLink: "#",
        day: 2,
        date: 26,
        discord: "#",
        img: typeracer.src,
    },
    {
        id: 20,
        name: "Ludo",
        category: "Fun-event",
        description: "A strategy board game",
        teamSize: 1,
        prize: 500,
        pdfLink: "#",
        day: 1,
        date: 25,
        discord: "#",
        img: ludo.src,
    },
    {
        id: 21,
        name: "Mini Militia",
        category: "Fun-event",
        description: "2D intense multiplayer combat game",
        teamSize: 1,
        prize: 500,
        pdfLink: "#",
        day: 2,
        date: 26,
        discord: "#",
        img: img.src,
    },
    {
        id: 22,
        name: "Stumble Guys",
        category: "Fun-event",
        description: "Battle Royale Party Game",
        teamSize: 1,
        prize: 500,
        pdfLink: "#",
        day: 3,
        date: 27,
        discord: "#",
        img: img.src,
    },
    {
        id: 23,
        name: "Valorant with Cheats on",
        category: "Fun-event",
        description: "",
        teamSize: 1,
        prize: 500,
        pdfLink: "#",
        day: 2,
        date: 26,
        discord: "#",
        img: valorant.src,
    },
    {
        id: 24,
        name: "Card Game UNO",
        category: "Fun-event",
        description: "",
        teamSize: 1,
        prize: 500,
        pdfLink: "#",
        day: "",
        date: "",
        discord: "",
        img: img.src,
    },
];

export default Events;
