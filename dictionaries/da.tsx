import {
    SiBootstrap,
    SiCplusplus,
    SiGit, SiGithub,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiRedis, SiSocketdotio, SiTailwindcss,
    SiTypescript, SiVercel
} from "react-icons/si";
import {DiJava} from "react-icons/di";

const ICON_SIZE = "2.5rem";

export default {
    "errors": {
        "NotFound": {
            "toast": {
                "title": "Ikke fundet",
                "detail": "Den side du leder efter findes ikke."
            },
            "page": {
                "title": "Side ikke fundet",
                "message": "Du vil blive omdirigeret til forsiden, eller du kan trykke her for at gå til forsiden."
            }
        }
    },
    "navbar": {
        "links": [
            {
                "home": {
                    "id": "hjem",
                    "anchor": "/da",
                    "title": "Hjem"
                },
                "skills": {
                    "id": "færdigheder",
                    "anchor": "#færdigheder",
                    "title": "Færdigheder"
                },
                "projects": {
                    "id": "projekter",
                    "anchor": "#projekter",
                    "title": "Projekter"
                },
                "contact": {
                    "id": "kontakt",
                    "anchor": "#kontakt",
                    "title": "Kontakt"
                },
                "resume": {
                    "id": "cv",
                    "anchor": "/resume.pdf",
                    "title": "CV"
                }
            }
        ],
        "home": "Hjem",
        "about": "Om",
        "contact": "Kontakt",
        "language": "Sprog",
        "theme": "Tema",
        "light": "Lyst",
        "dark": "Mørkt",
        "system": "System",
        "toggleTheme": "Skift tema"
    },
    "languages": {
        "da": "Dansk",
        "en": "Engelsk"
    },
    "footer": {
        "creator": "Lavet med ❤\uFE0F af Daniel Bermann Schmidt",
        "source": "Kildekode på"
    },
    "text": {
        "socials": "Sociale medier",
        "visit": "Besøg",
        "skills": "Færdigheder",
        "skillsDescription": "Her er nogle af de færdigheder, jeg har opnået gennem min uddannelse og projekter.",
        "skillsDescription2": "Disse er de erfaringer, jeg har fået gennem projekter på gymnasiet, universitetet og fritidsprojekter.",
        "hello": `Hej, mit navn er `,
        "about": "Jeg er en 21-årig softwareingeniør. Jeg studerer i øjeblikket Diplomingeniør i Software Teknologi på Syddansk Universitet og er på mit 3. semester.",
        "contact": "Du kan kontakte mig ved at sende en e-mail til ",
        "resume": "Du kan finde mit CV her: ",
        "projects": "Projekter",
        "projectsDescription": "Går lige nu på 3. semester på SDU, hvor jeg læser til softwareingeniør. Her har jeg arbejdet mest med PostgreSQL og Java.",
        "projectsDescription2": "Jeg har arbejdet på et par projekter, både alene og sammen med andre. Så har jeg også arbejdet med frontend og backend, samt med både relationelle og ikke-relationelle databaser.",
        "projectsDescription3": "Derefter har jeg også arbejdet med Next.js og React, hvor Next.js har været min primære erfaring med React. Dette har været i JavaScript og TypeScript (bedst).",
        "technologiesused": "Teknologier brugt",
    },
    "skills": [
        {
            "title": "React",
            "description": "Next.js er bygget på react og er et framework til react; det er min primære erfaring med React",
            "icon": <SiReact size={ICON_SIZE}/>
        },
        {
            "title": "Next.js",
            "description": "Har lavet et par projekter med Next.js, og har derfor erfaring med det",
            "icon": <SiNextdotjs size={ICON_SIZE}/>
        },
        {
            "title": "TypeScript",
            "description": "Meste af hvad jeg laver er skrevet i TypeScript, da det gør tingene nemmere med type-safety",
            "icon": <SiTypescript size={ICON_SIZE}/>
        },
        {
            "title": "Java",
            "description": "Har haft Java på universitetet i et par semestre, hvor jeg har scoret 12 i begge",
            "icon": <DiJava size={ICON_SIZE}/>
        },
        {
            "title": "C++",
            "description": "Da jeg tog HTX (Matematik A - Programmering B), havde jeg C++ i gymnasiet. Så har en god forståelse for C++",
            "icon": <SiCplusplus size={ICON_SIZE}/>
        },
        {
            "title": "Node.js",
            "icon": <SiNodedotjs size={ICON_SIZE}/>
        },
        {
            "title": "Redis",
            "icon": <SiRedis size={ICON_SIZE}/>
        },
        {
            "title": "MongoDB",
            "description": "MongoDB blev brugt i ét enkelt semester på universitet",
            "icon": <SiMongodb size={ICON_SIZE}/>
        },
        {
            "title": "PostgreSQL",
            "description": "PostgreSQL er den form for database, jeg har mest erfaring med. Det var vores primære database på universitetet, samt har selv brugt det tilbage i gymnasiet til et projekt",
            "icon": <SiPostgresql size={ICON_SIZE}/>
        },
        {
            "title": "Git",
            "icon": <SiGit size={ICON_SIZE}/>
        },
    ],
    "projects": [
        {
            "title": "Personlig Hjemmeside",
            "description": "Denne hjemmeside er min personlige hjemmeside, hvor jeg fremviser mine projekter og færdigheder.",
            "image": "/images/projects/personal-website.png",
            "links": [
                {
                    "title": "Kildekode",
                    "url": "https://github.com/danielz1337/personal-website"
                },
                {
                    "title": "Besøg",
                    "url": "https://danielz.dev/"
                }
            ],
            "technologies": [
                "Next.js",
                "React",
                "TypeScript",
                "TailwindCSS",
                "Vercel"
            ],
            "icons": [
                {
                    "icon": <SiNextdotjs size={ICON_SIZE}/>,
                    "title": "Next.js"
                },
                {
                    "icon": <SiReact size={ICON_SIZE}/>,
                    "title": "React"
                },
                {
                    "icon": <SiTypescript size={ICON_SIZE}/>,
                    "title": "TypeScript"
                },
                {
                    "icon": <SiTailwindcss size={ICON_SIZE}/>,
                    "title": "TailwindCSS"
                },
                {
                    "icon": <SiVercel size={ICON_SIZE}/>,
                    "title": "Vercel"
                }
            ]
        },
        {
            "title": "ValorVault",
            "description": "ValorVault er en hjemmeside, der giver dig mulighed for at følge dine Valorant-statistikker. Den er bygget med Next.js og bruger Valorant API'en til at hente data.",
            "image": "/images/projects/valorvault.png",
            "links": [
                {
                    "title": "Kildekode",
                    "url": "https://github.com/danielz1337/valorvault"
                },
                {
                    "title": "Besøg",
                    "url": "https://valorvault.danielz.dev/"
                }
            ],
            "technologies": [
                "Next.js",
                "React",
                "TypeScript",
                "TailwindCSS",
                "Vercel"
            ],
            "icons": [
                {
                    "icon": <SiNextdotjs size={ICON_SIZE}/>,
                    "title": "Next.js"
                },
                {
                    "icon": <SiReact size={ICON_SIZE}/>,
                    "title": "React"
                },
                {
                    "icon": <SiTypescript size={ICON_SIZE}/>,
                    "title": "TypeScript"
                },
                {
                    "icon": <SiTailwindcss size={ICON_SIZE}/>,
                    "title": "TailwindCSS"
                },
                {
                    "icon": <SiVercel size={ICON_SIZE}/>,
                    "title": "Vercel"
                },
                {
                    "icon": <SiGithub size={ICON_SIZE}/>,
                    "title": "GitHub API"
                }
            ]
        },
        {
            "title": "E-Handel",
            "description": "Dette er en e-handels hjemmeside, bygget med Next.js og Commerce.js. Det er en simpel hjemmeside, der giver dig mulighed for at tilføje produkter til din indkøbskurv og foretage betaling.",
            "image": "/images/projects/e-commerce.png",
            "links": [
                {
                    "title": "Kildekode",
                    "url": "https://github.com/danielz1337/e-commerce"
                },
                {
                    "title": "Besøg",
                    "url": "https://e-commerce.danielz.dev/"
                }
            ],
            "technologies": [
                "Next.js",
                "React",
                "TypeScript",
                "Bootstrap",
                "Vercel",
                "PostgreSQL"
            ],
            "icons": [
                {
                    "icon": <SiNextdotjs size={ICON_SIZE}/>,
                    "title": "Next.js"
                },
                {
                    "icon": <SiReact size={ICON_SIZE}/>,
                    "title": "React"
                },
                {
                    "icon": <SiTypescript size={ICON_SIZE}/>,
                    "title": "TypeScript"
                },
                {
                    "icon": <SiBootstrap size={ICON_SIZE}/>,
                    "title": "Bootstrap"
                },
                {
                    "icon": <SiVercel size={ICON_SIZE}/>,
                    "title": "Vercel"
                },
                {
                    "icon": <SiPostgresql size={ICON_SIZE}/>,
                    "title": "PostgreSQL"
                }
            ]
        },
        {
            "title": "GitHub Markdown Notes App",
            "description": "Dette er en simpel app, der giver dig mulighed for at gennemse dine GitHub-repositorier, der har markdown-filer, og se dem. Den er bygget med Next.js og bruger GitHub API'en til at hente data.",
            "image": "/images/projects/github-markdown-notes-app.png",
            "links": [
                {
                    "title": "Kildekode",
                    "url": "https://github.com/danielz1337/github-markdown-notes-app"
                },
                {
                    "title": "Besøg",
                    "url": "https://github-markdown-notes-app.danielz.dev/"
                }
            ],
            "technologies": [
                "Next.js",
                "React",
                "TypeScript",
                "TailwindCSS",
                "Vercel",
                "NextAuth.js",
                "Redis"
            ],
            "icons": [
                {
                    "icon": <SiRedis size={ICON_SIZE}/>,
                    "title": "Redis"
                },
                {
                    "icon": <SiNextdotjs size={ICON_SIZE}/>,
                    "title": "Next.js"
                },
                {
                    "icon": <SiReact size={ICON_SIZE}/>,
                    "title": "React"
                },
                {
                    "icon": <SiTypescript size={ICON_SIZE}/>,
                    "title": "TypeScript"
                },
                {
                    "icon": <SiTailwindcss size={ICON_SIZE}/>,
                    "title": "TailwindCSS"
                },
                {
                    "icon": <SiVercel size={ICON_SIZE}/>,
                    "title": "Vercel"
                },
                {
                    "icon": <SiGithub size={ICON_SIZE}/>,
                    "title": "GitHub API"
                }
            ]
        },
        {
            "title": "Simpel Spil Singleplayer og Multiplayer App",
            "description": "Dette er en simpel app, der giver dig mulighed for at spille spil med andre personer. Den er bygget med Next.js og bruger Socket.IO til multiplayer-funktionaliteten.",
            "image": "/images/projects/simple-games-singleplayer-and-multiplayer-app.png",
            "links": [
                {
                    "title": "Kildekode",
                    "url": "https://github.com/danielz1337/simple-games-singleplayer-and-multiplayer-app"
                },
                {
                    "title": "Besøg",
                    "url": "https://simple-games-singleplayer-and-multiplayer-app.danielz.dev/"
                }
            ],
            "technologies": [
                "Next.js",
                "React",
                "TypeScript",
                "TailwindCSS",
                "Socket.IO",
                "Vercel",
                "NextAuth.js"
            ],
            "icons": [
                {
                    "icon": <SiNextdotjs size={ICON_SIZE}/>,
                    "title": "Next.js"
                },
                {
                    "icon": <SiReact size={ICON_SIZE}/>,
                    "title": "React"
                },
                {
                    "icon": <SiTypescript size={ICON_SIZE}/>,
                    "title": "TypeScript"
                },
                {
                    "icon": <SiTailwindcss size={ICON_SIZE}/>,
                    "title": "TailwindCSS"
                },
                {
                    "icon": <SiSocketdotio size={ICON_SIZE}/>,
                    "title": "Socket.IO"
                },
                {
                    "icon": <SiVercel size={ICON_SIZE}/>,
                    "title": "Vercel"
                }
            ]
        }
    ]
}

