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
        pdfLink:
            "https://docs.google.com/document/d/1v2zTFVSaARu_qXkoxB4cCvH982ar2CTanLuyMJGkPPc/edit#heading=h.lul8rqi8wzfh",
        day: 3,
        date: 27,
        discord: "https://discord.gg/BPzYSaSjGK",
        img: pubg.src,
    },
    {
        id: 2,
        name: "Battle Ground Mobile India (Squad)",
        category: "Major Event",
        description: "Battle Royale Squad Event",
        teamSize: 4,
        prize: "15,500",
        pdfLink:
            "https://docs.google.com/document/d/1v2zTFVSaARu_qXkoxB4cCvH982ar2CTanLuyMJGkPPc/edit#heading=h.lul8rqi8wzfh",
        day: 2,
        date: 26,
        discord: "https://discord.gg/BPzYSaSjGK",
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
            "https://docs.google.com/document/d/1fWV8YZFjznWdi7Af4u5KiUUdq_KMAPES/edit?usp=drivesdk&ouid=113652035161026772828&rtpof=true&sd=true",
        day: "1,02",
        date: 25,
        discord: "https://discord.gg/BPzYSaSjGK",
        img: valorant.src,
    },
    {
        id: 4,
        name: "CSGO",
        category: "Major Event",
        description: "5v5 tactical FPS",
        teamSize: 5,
        prize: "7,500",
        pdfLink:
            "https://docs.google.com/document/d/1o-SPpYM4btaOjwBx7L4zPY0pQiDTgQg60Qi2OT4n4aQ/edit?usp=sharing",
        day: 3,
        date: 27,
        discord: "https://discord.gg/BPzYSaSjGK",
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
            "https://docs.google.com/document/d/1p0kOgxOjsuaPab0PVqCMjz2xxLERz6eKvX7PiF995_M/edit",
        day: 2,
        date: 26,
        discord: "https://discord.gg/BPzYSaSjGK",
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
            "https://docs.google.com/document/d/1DtpnZaoO23tQDrZPT5pvIUhwcejpDVdOlx8owNy1yEg/edit?usp=sharing",
        day: 3,
        date: 27,
        discord: "https://discord.gg/BPzYSaSjGK",
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
            "https://docs.google.com/document/d/1JKYPcd8ZOZmMz1p5V_Jiu_uTnxMnkfQdBZkmN1JLGw0/edit?usp=sharing",
        day: 2,
        date: 26,
        discord: "https://discord.gg/BPzYSaSjGK",
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
            "https://docs.google.com/document/d/1jDTpTpT7RwAgyxbHFlhZACh7SW2aLZOEq078jHpcqLk/edit",
        day: 2,
        date: 26,
        discord: "https://discord.gg/BPzYSaSjGK",
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
            "https://docs.google.com/document/d/1A6zfvBV-L95pkCxedACR-lJXe39ut-5Fng3vox2jlzE/edit?usp=sharing",
        day: "2,03",
        date: 26,
        discord: "https://discord.gg/BPzYSaSjGK",
        img: fantasyCricket.src,
    },
    {
        id: 10,
        name: "World of Quiz(Inquizzitive)",
        category: "Events with Clubs",
        description: "Quiz Competition",
        teamSize: 2,
        prize: "2,500",
        pdfLink: "https://drive.google.com/file/d/1B8WJ35gx4fTr0sC-IXw-2VW62zk7O3RM/view?usp=sharing",
        day: 2,
        date: 26,
        discord: "https://discord.gg/BPzYSaSjGK",
        img: img.src,
    },
    {
        id: 11,
        name: "Gamejam (GTA)",
        category: "Events with Clubs",
        description: "Game making Competition",
        teamSize: 4,
        prize: "6,000",
        pdfLink: "https://docs.google.com/document/d/1Z0vJEQ2f_ewtfvhhwvb07i_ykMoIXMk2/edit?usp=sharing&ouid=102876265138722691772&rtpof=true&sd=true",
        day: 1,
        date: 25,
        discord: "https://discord.gg/BPzYSaSjGK",
        img: img.src,
    },
    {
        id: 12,
        name: "Housie (Rotract)",
        category: "Events with Clubs",
        description: "Online Indian Bingo",
        teamSize: 1,
        prize: "2,500",
        pdfLink: "https://docs.google.com/document/d/1r2n88ymC6tjutBXfBDfDtLcb4hKYfXmo/edit?usp=sharing&ouid=102876265138722691772&rtpof=true&sd=true",
        day: 2,
        date: 26,
        discord: "https://discord.gg/BPzYSaSjGK",
        img: img.src,
    },
    {
        id: 13,
        name: "Chess (Knights)",
        category: "Events with Clubs",
        description: "Chess workshop + Game",
        teamSize: 1,
        prize: "4,500",
        pdfLink: "https://docs.google.com/document/d/1mf4GzwcPWwJ_voTjWpU2MhSg3YgmNKBR/edit?usp=sharing&ouid=102876265138722691772&rtpof=true&sd=true",
        day: 3,
        date: 27,
        discord: "https://discord.gg/BPzYSaSjGK",
        img: img.src,
    },
    {
        id: 14,
        name: "Wrangle of Wits (Clarion)",
        category: "Events with Clubs",
        description: "Debate Event",
        teamSize: 1,
        prize: "3,000",
        pdfLink: "https://drive.google.com/file/d/1B8WJ35gx4fTr0sC-IXw-2VW62zk7O3RM/view?usp=sharing",
        day: 3,
        date: 27,
        discord: "https://discord.gg/BPzYSaSjGK",
        img: img.src,
    },
    {
        id: 15,
        name: "Fanart",
        category: "Events with Clubs",
        description: "Artmaking Event",
        teamSize: 1,
        prize: "1,500",
        pdfLink: "https://drive.google.com/file/d/1eK8ADSkxbgcNUS-7953XfBWHfOleJ7UT/view?usp=sharing",
        day: "",
        date: 23,
        discord: "https://discord.gg/BPzYSaSjGK",
        img: img.src,
    },
    {
        id: 16,
        name: "Skribble.io",
        category: "Fun-event",
        description: "Drawing and Guessing event",
        teamSize: 1,
        prize: 500,
        pdfLink:
            "https://docs.google.com/document/d/16pP-VjuNEa4wxIr8laN5opc5CoiBl1cz/edit?usp=drivesdk&ouid=113988085220362124424&rtpof=true&sd=true",
        day: 1,
        date: 25,
        discord: "https://discord.gg/BPzYSaSjGK",
        img: skribble.src,
    },
    {
        id: 17,
        name: "Among Us",
        category: "Fun-event",
        description: "Party game of teamwork and betrayal Event",
        teamSize: 1,
        prize: 500,
        pdfLink:
            "https://docs.google.com/document/d/1OxWtwYljoE1Aox0z3p5UPKlzlR0wy0fm-8rVp5YVWIE/edit?usp=sharing",
        day: 1,
        date: 25,
        discord: "https://discord.gg/BPzYSaSjGK",
        img: amongUs.src,
    },
    {
        id: 18,
        name: "Sudoku",
        category: "Fun-event",
        description: "Puzzle Games",
        teamSize: 1,
        prize: 500,
        pdfLink:
            "https://docs.google.com/document/d/1n1lK-SF2u8V7FFdASaiJ3H8pWJ4OKieO0bUolvP89cY/edit?usp=sharing",
        day: 3,
        date: 27,
        discord: "https://discord.gg/BPzYSaSjGK",
        img: sudduko.src,
    },
    {
        id: 19,
        name: "Type Racer",
        category: "Fun-event",
        description: "",
        teamSize: 1,
        prize: 500,
        pdfLink:
            "https://docs.google.com/document/d/1N3Q-oY9McfjtwzpxkqVRVjQFQoLBiCWw2f8-UFzlJU4/edit?usp=sharing",
        day: 2,
        date: 26,
        discord: "https://discord.gg/BPzYSaSjGK",
        img: typeracer.src,
    },
    {
        id: 20,
        name: "Ludo",
        category: "Fun-event",
        description: "A strategy board game",
        teamSize: 1,
        prize: 500,
        pdfLink:
            "https://docs.google.com/document/d/12H_ZEJzWfwS0PeIAZflIzU61uTBsPJm-sRTb-KF_FY4/edit",
        day: 1,
        date: 25,
        discord: "https://discord.gg/BPzYSaSjGK",
        img: ludo.src,
    },
    {
        id: 21,
        name: "Mini Militia",
        category: "Fun-event",
        description: "2D intense multiplayer combat game",
        teamSize: 1,
        prize: 500,
        pdfLink:
            "https://docs.google.com/document/d/1rGsX3YePx7p3HSIlX5179v7ZQZj1WhPKUSMNMfaVMLI/edit?usp=sharing",
        day: 2,
        date: 26,
        discord: "https://discord.gg/BPzYSaSjGK",
        img: img.src,
    },
    {
        id: 22,
        name: "Stumble Guys",
        category: "Fun-event",
        description: "Battle Royale Party Game",
        teamSize: 1,
        prize: 500,
        pdfLink:
            "https://docs.google.com/document/d/1mv5dhtere5EmiwdfbIBnRasjKpl0BPgbpq1zjcNdnVo/edit",
        day: 3,
        date: 27,
        discord: "https://discord.gg/BPzYSaSjGK",
        img: img.src,
    },
    {
        id: 23,
        name: "Valorant with Cheats on",
        category: "Fun-event",
        description: "",
        teamSize: 1,
        prize: 500,
        pdfLink:
            "https://docs.google.com/document/d/1rW0Kztg2wazKtLYNgv2BOB_TO4iM6Rzb/edit?usp=sharing&ouid=113652035161026772828&rtpof=true&sd=true",
        day: 2,
        date: 26,
        discord: "https://discord.gg/BPzYSaSjGK",
        img: valorant.src,
    },
    {
        id: 24,
        name: "Card Game UNO",
        category: "Fun-event",
        description: "",
        teamSize: 1,
        prize: 500,
        pdfLink:
            "https://docs.google.com/document/d/1kA5TR8FPjkNEkumkFVYFctoy_cOZ_4Ft86NNxqNDjfQ/edit?usp=sharing",
        day: 2,
        date: 26,
        discord: "https://discord.gg/BPzYSaSjGK",
        img: img.src,
    },
];

export default Events;
