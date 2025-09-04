import { ReactComponent as UnityLogo } from "icons/icons8-unity.svg";
//import { ReactComponent as GodotLogo } from "icons/Logo_Godot_Color.svg";
import { ReactComponent as CSLogo } from "icons/Logo_C_sharp.svg";
import { ReactComponent as JSLogo } from "icons/worldvectorlogo-javascript.svg";
import { ReactComponent as LuaLogo } from "icons/Logo_Lua.svg";
import { ReactComponent as CPPLogo } from "icons/icons8-c++.svg";
import { ReactComponent as MongoDBLogo } from "icons/icons8-mongodb.svg";
import { ReactComponent as ReactLogo } from "icons/Logo_React.svg";
import { ReactComponent as ElectronLogo } from "icons/Logo_Electron.svg";
import MQTTLogo from "icons/mqtt.png";
import VueLogo from "icons/icons8-vue.png";
import ProcessingLogo from "icons/processing-1024.png";
import WebLogo from "icons/weblogos.png";
import ASPLogo from "icons/aspnet.png";
import GodotLogo from "icons/logo-godot-color.png";

const ListOfProjectCards = [
    {
        name: "Furfare",
        coverUrl: "/images/FurfareGameplay_Cover.png",
        tags: ["Group Projects", "Unity", "UI", "Games", "Practical"],
        durationDescriber: "Duration",
        durationProperty: "8 weeks",
        teamDescriber: "",
        teamProperty: "2 programmers (Group project)",
        clientDescriber: "Client",
        clientProperty: "WIRWAR - Gaming Festival Twente (Netherlands)",
        expandableIcons: [
            { icon: <UnityLogo width="30px" height="30px"/>, propertyValue: "Unity"}, 
            { icon: <CSLogo width="30px" height="30px"/>, propertyValue: "C#"}, 
        ],
        cardText: `A "Bomberman Dodgeball" multiplayer party game where animals hit each other with whatever they can pick up!`
    },
    {
        name: "Tower defense prototype",
        coverUrl: "/images/SA_TD_Game.png",
        tags: ["Student Assignments", "Unity", "Games", "Practical"],
        durationDescriber: "Duration",
        durationProperty: "5 weeks",
        teamDescriber: "",
        teamProperty: "Individual",
        clientDescriber: "",
        clientProperty: "Personal/School assignment",
        expandableIcons: [
            { icon: <UnityLogo width="30px" height="30px"/>, propertyValue: "Unity"}, 
            { icon: <CSLogo width="30px" height="30px"/>, propertyValue: "C#"}, 
        ],
        cardText: `A game created according to OOP design patterns, making possible a variety of towers, shot effects, 
                    and enemies (with a couple of each included). "Targeted" at people who dislike grass!`
    },
    {
        name: "Godot - First mechanics",
        coverUrl: "/images/Godot_Cover.png",
        tags: ["Student Assignments", "Godot", "Games"],
        durationDescriber: "Duration",
        durationProperty: "2 weeks",
        teamDescriber: "",
        teamProperty: "Individual",
        clientDescriber: "",
        clientProperty: "Personal/School assignment",
        expandableIcons: [
            { icon: /*<GodotLogo width="30px" height="30px"/>, propertyValue: "Godot"*/
                <img src={GodotLogo} alt="Godot Engine logo" width="30px" height="30px" />, propertyValue: "Godot"}, 
            { icon: <CSLogo width="30px" height="30px"/>, propertyValue: "C#"}, 
        ],
        cardText: `A sandbox with 5 functional platformer-related assets and 3 small gameplay levels! First project in Godot Engine.`
    },
    {
        name: "Desk Research: Game Feel",
        coverUrl: "/images/GameFeel_Poster_Cover.png",
        tags: ["Writeups", "Games", "Research"],
        durationDescriber: "Duration",
        durationProperty: "2 weeks",
        teamDescriber: "",
        teamProperty: "Individual",
        clientDescriber: "",
        clientProperty: "Personal/School assignment",
        expandableIcons: [
        ],
        cardText: `White paper on the topic of game feel, its definition(s) and the need for its better understanding 
                    and unified vocabulary.`
    },
    {
        name: "Research: Embedding languages for game modding",
        coverUrl: "/images/TTT_embed_flow_Cover.png",
        tags: ["Writeups", "JavaScript", "Research"],
        durationDescriber: "Duration",
        durationProperty: "2 weeks",
        teamDescriber: "",
        teamProperty: "Individual",
        clientDescriber: "",
        clientProperty: "Personal/School assignment",
        expandableIcons: [
            { icon: <LuaLogo width="30px" height="30px"/>, propertyValue: "Lua"}, 
            { icon: <JSLogo width="30px" height="30px"/>, propertyValue: "JavaScript"}, 
            { icon: <CPPLogo width="30px" height="30px"/>, propertyValue: "C++"}, 
        ],
        cardText: `I embedded Lua and JavaScript in C++ to measure their performance in simple operations, 
                    briefly exploring the usage of embedded languages for game modding and scripting.`
    },

];

export default ListOfProjectCards;


// 
// ====== SHELVED PROJECTS ======
/**
    {
        name: "Web Development Projects",
        coverUrl: "/images/EASV_WebDev_Cover.png",
        tags: ["JavaScript", "Practical"],
        durationDescriber: "",
        durationProperty: "Various",
        teamDescriber: "",
        teamProperty: "Individual",
        clientDescriber: "Minor",
        clientProperty: "Web Development (EASV, Denmark)",
        expandableIcons: [
            { icon: <img src={WebLogo} alt="HTML+CSS+JS logo" width="30px" height="30px" />, propertyValue: "Web"}, 
            { icon: <img src={VueLogo} alt="Vue logo" width="30px" height="30px" />, propertyValue: "Vue"}, 
            { icon: <img src={ASPLogo} alt="ASP.NET MVC logo" width="30px" height="30px" />, propertyValue: "ASP.NET"}, 
            { icon: <MongoDBLogo width="30px" height="30px"/>, propertyValue: "MongoDB"}, 
        ],
        cardText: `A collection of smaller projects where I learned about various Web aspects - frontend, backend, CI/CD, frameworks.
            Integral to building my portfolio site!`
    },
    {
        name: "Game jam experiences",
        coverUrl: "/images/GameJamGame2_Cover.png",
        tags: ["Unity", "Games"],
        durationDescriber: "Duration",
        durationProperty: "2 weeks",
        teamDescriber: "",
        teamProperty: "Individual",
        clientDescriber: "",
        clientProperty: "Personal/School assignment",
        expandableIcons: [
            { icon: <UnityLogo width="30px" height="30px"/>, propertyValue: "Unity"}, 
            { icon: <CSLogo width="30px" height="30px"/>, propertyValue: "C#"}, 
        ],
        cardText: `XP Game Jam 2024 with the theme "You can't save them all", approached in two ways - team and solo!
                    Featuring a small raindrop collection game and reflections on the experiences.`
    },
    {
        name: "City games concept prototype",
        coverUrl: "/images/Unity_Prototype_Overview.png",
        tags: ["Unity", "Practical", "Games"],
        durationDescriber: "Duration",
        durationProperty: "2 weeks",
        teamDescriber: "",
        teamProperty: "Individual (Group project)",
        clientDescriber: "Client",
        clientProperty: "EU ACuTe for Nova Gorica (Slovenia)",
        expandableIcons: [
            { icon: <UnityLogo width="30px" height="30px"/>, propertyValue: "Unity"}, 
            { icon: <CSLogo width="30px" height="30px"/>, propertyValue: "C#"}, 
        ],
        cardText: `Concept prototype under fast development for several minigames with real-world elements.`
    },
    {
        name: "Phone-controllable screens experience",
        coverUrl: "/images/ScrMult_Cover.png",
        tags: ["JavaScript", "Practical", "Device Communication", "Installations"],
        durationDescriber: "Duration",
        durationProperty: "4 weeks",
        teamDescriber: "",
        teamProperty: "Individual (Group project)",
        clientDescriber: "Client",
        clientProperty: "EU ACuTe for Nova Gorica (Slovenia)",
        expandableIcons: [
            { icon: <img src={MQTTLogo} alt="MQTT logo" width="30px" height="30px" />, propertyValue: "MQTT"}, 
            { icon: <JSLogo width="30px" height="30px"/>, propertyValue: "JavaScript"}, 
            { icon: <ReactLogo width="30px" height="30px"/>, propertyValue: "React"}, 
            { icon: <ElectronLogo width="30px" height="30px"/>, propertyValue: "Electron"}, 
        ],
        cardText: `Mechanism for toggling images on selected screens via a specialized phone app.`
    },
    {
        name: "RFID Interactive Video Experience",
        coverUrl: "/images/100FAT_Palthe_Cover.png",
        tags: ["Unity", "Practical", "Device Communication", "Installations"],
        durationDescriber: "Duration",
        durationProperty: "8 weeks",
        teamDescriber: "",
        teamProperty: "Individual (Internship)",
        clientDescriber: "Client",
        clientProperty: "Museum \"Het Palthe Huis\" (Netherlands)",
        expandableIcons: [
            { icon: <UnityLogo width="30px" height="30px"/>, propertyValue: "Unity"}, 
            { icon: <CSLogo width="30px" height="30px"/>, propertyValue: "C#"}, 
        ],
        cardText: `Software and UI work for turning a video story into a smooth "RPG" experience with scannable real-world items.`
    },
    {
        name: "Deuvels tikken game",
        coverUrl: "/images/100FAT_Deuvels_IRL.png",
        tags: ["Unity", "Practical", "UI", "Device Communication", "Games", "Installations"],
        durationDescriber: "Duration",
        durationProperty: "4.5 weeks",
        teamDescriber: "",
        teamProperty: "Individual (Internship)",
        clientDescriber: "Client",
        clientProperty: "Regionale Stichting Enterse Zomp (Netherlands)",
        expandableIcons: [
            { icon: <UnityLogo width="30px" height="30px"/>, propertyValue: "Unity"}, 
            { icon: <CSLogo width="30px" height="30px"/>, propertyValue: "C#"}, 
        ],
        cardText: `A minigame teaching about hammering dowels to build a ship, with a rotatable and hammerable controller. 
                    I implemented the software, including a step-by-step tutorial and a game state loop.`
    },
    {
        name: "Practical Research: Game Juice",
        coverUrl: "/images/gamejuiceoverview.jpg",
        tags: ["Unity", "Games", "UI", "Practical", "Research"],
        durationDescriber: "Duration",
        durationProperty: "2 weeks",
        teamDescriber: "",
        teamProperty: "Individual",
        clientDescriber: "",
        clientProperty: "Personal/School assignment",
        expandableIcons: [
            { icon: <UnityLogo width="30px" height="30px"/>, propertyValue: "Unity"}, 
            { icon: <CSLogo width="30px" height="30px"/>, propertyValue: "C#"}, 
            { icon: <img src={ProcessingLogo} alt="Processing engine logo" width="30px" height="30px" />, propertyValue: "Processing (Java)"}, 
        ],
        cardText: `I researched and added "juicy" audiovisual effects to two games I worked on previously, 
                    in an attempt to make them more appealing.`
    },

/**/