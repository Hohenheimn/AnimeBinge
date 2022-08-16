import React, { createContext } from "react";

export const AnimeContent = createContext();

export const AnimeProvider = ({children}) => {
    const AnimeList = [
        {
            id: 1,
            img: require('./images/kimetsu.png'),
            title: "Kimetsu no Yaiba",
            category: ["Adventure fiction", "Dark Fantasy", "Martial Arts"],
            rating: 5.0,
            description: "Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtered and his younger sister Nezuko turned into a demon.",
            link: "/kimetsu-no-yaiba",
            status: "new",
            episodes: [
                {
                    title: "The citizens worry they will be at the Titans' mercy after many years of peace."
                },
                {
                    title: "The Shiganshina citizens are under attack from the Titans."
                },
                {
                    title: "Eren butt heads with Jean Kirschtein, a cadet who wants to be in the Military Police Regiment. Berholt and Reiner help Eren learn during training."
                }
            ]
        },
        {
            id: 2,
            img: require('./images/slamdunk.png'),
            title: "Slam Dunk",
            category: ["Adventure fiction", "Dark Fantasy", "Martial Arts"],
            rating: 5.0,
            description: "Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtered and his younger sister Nezuko turned into a demon.",
            link: "/kimetsu-no-yaiba",
            status: "new",
            episodes: [
                {
                    title: "The citizens worry they will be at the Titans' mercy after many years of peace."
                },
                {
                    title: "The Shiganshina citizens are under attack from the Titans."
                },
                {
                    title: "Eren butt heads with Jean Kirschtein, a cadet who wants to be in the Military Police Regiment. Berholt and Reiner help Eren learn during training."
                }
            ]
        },
        {
            id: 3,
            img: require('./images/flameofrecca.png'),
            title: "Flame of Recca",
            category: ["Adventure fiction", "Dark Fantasy", "Martial Arts"],
            rating: 5.0,
            description: "Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtered and his younger sister Nezuko turned into a demon.",
            link: "/kimetsu-no-yaiba",
            status: "new",
            episodes: [
                {
                    title: "The citizens worry they will be at the Titans' mercy after many years of peace."
                },
                {
                    title: "The Shiganshina citizens are under attack from the Titans."
                },
                {
                    title: "Eren butt heads with Jean Kirschtein, a cadet who wants to be in the Military Police Regiment. Berholt and Reiner help Eren learn during training."
                }
            ]
        },
        {
            id: 4,
            img: require('./images/aot9.png'),
            title: "Attack on Titan",
            category: ["Adventure fiction", "Dark Fantasy", "Martial Arts"],
            rating: 5.0,
            description: "When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the human…",
            link: "/attack-on-titan",
            status: "trending",
            episodes: [
                {
                    title: "The citizens worry they will be at the Titans' mercy after many years of peace.",
                    img: [require('./images/aot1.png'), require('./images/aot2.png')]
                },
                {
                    title: "The Shiganshina citizens are under attack from the Titans.",
                    img: [require('./images/aot3.png'), require('./images/aot4.png')]
                },
                {
                    title: "Eren butt heads with Jean Kirschtein, a cadet who wants to be in the Military Police Regiment. Berholt and Reiner help Eren learn during training.",
                    img: [require('./images/aot5.png'), require('./images/aot6.png')]
                }
            ]
        },
        {
            id: 6,
            img: require('./images/jujutsu.png'),
            title: "Jujutsu Kaisen",
            category: ["Adventure fiction", "Dark Fantasy", "Martial Arts"],
            rating: 5.0,
            description: "When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the human…",
            link: "/jujutsu kaisen",
            status: "trending",
            episodes: [
                {
                    title: "The citizens worry they will be at the Titans' mercy after many years of peace.",
                    img: [require('./images/aot1.png'), require('./images/aot2.png')]
                },
                {
                    title: "The Shiganshina citizens are under attack from the Titans.",
                    img: [require('./images/aot3.png'), require('./images/aot4.png')]
                },
                {
                    title: "Eren butt heads with Jean Kirschtein, a cadet who wants to be in the Military Police Regiment. Berholt and Reiner help Eren learn during training.",
                    img: [require('./images/aot5.png'), require('./images/aot6.png')]
                }
            ]
        },
        {
            id: 7,
            img: require('./images/onepiece.png'),
            title: "One Piece",
            category: ["Adventure fiction", "Dark Fantasy", "Martial Arts"],
            rating: 5.0,
            description: "When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the human…",
            link: "/one-piece",
            status: "trending",
            episodes: [
                {
                    title: "The citizens worry they will be at the Titans' mercy after many years of peace.",
                    img: [require('./images/aot1.png'), require('./images/aot2.png')]
                },
                {
                    title: "The Shiganshina citizens are under attack from the Titans.",
                    img: [require('./images/aot3.png'), require('./images/aot4.png')]
                },
                {
                    title: "Eren butt heads with Jean Kirschtein, a cadet who wants to be in the Military Police Regiment. Berholt and Reiner help Eren learn during training.",
                    img: [require('./images/aot5.png'), require('./images/aot6.png')]
                }
            ]
        },
        {
            id: 8,
            img: require('./images/ghostfighter.png'),
            title: "Ghost Fighter",
            category: ["Adventure fiction", "Dark Fantasy", "Martial Arts"],
            rating: 5.0,
            description: "When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the human…",
            link: "/attack-on-titan",
            status: "throwback",
            episodes: [
                {
                    title: "The citizens worry they will be at the Titans' mercy after many years of peace.",
                    img: [require('./images/aot1.png'), require('./images/aot2.png')]
                },
                {
                    title: "The Shiganshina citizens are under attack from the Titans.",
                    img: [require('./images/aot3.png'), require('./images/aot4.png')]
                },
                {
                    title: "Eren butt heads with Jean Kirschtein, a cadet who wants to be in the Military Police Regiment. Berholt and Reiner help Eren learn during training.",
                    img: [require('./images/aot5.png'), require('./images/aot6.png')]
                }
            ]
        },
        {
            id: 9,
            img: require('./images/slamdunk.png'),
            title: "Slam Dunk",
            category: ["Adventure fiction", "Dark Fantasy", "Martial Arts"],
            rating: 5.0,
            description: "When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the human…",
            link: "/attack-on-titan",
            status: "throwback",
            episodes: [
                {
                    title: "The citizens worry they will be at the Titans' mercy after many years of peace.",
                    img: [require('./images/aot1.png'), require('./images/aot2.png')]
                },
                {
                    title: "The Shiganshina citizens are under attack from the Titans.",
                    img: [require('./images/aot3.png'), require('./images/aot4.png')]
                },
                {
                    title: "Eren butt heads with Jean Kirschtein, a cadet who wants to be in the Military Police Regiment. Berholt and Reiner help Eren learn during training.",
                    img: [require('./images/aot5.png'), require('./images/aot6.png')]
                }
            ]
        },
        {
            id: 10,
            img: require('./images/flameofrecca.png'),
            title: "Flame of Recca",
            category: ["Adventure fiction", "Dark Fantasy", "Martial Arts"],
            rating: 5.0,
            description: "When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the human…",
            link: "/attack-on-titan",
            status: "throwback",
            episodes: [
                {
                    title: "The citizens worry they will be at the Titans' mercy after many years of peace.",
                    img: [require('./images/aot1.png'), require('./images/aot2.png')]
                },
                {
                    title: "The Shiganshina citizens are under attack from the Titans.",
                    img: [require('./images/aot3.png'), require('./images/aot4.png')]
                },
                {
                    title: "Eren butt heads with Jean Kirschtein, a cadet who wants to be in the Military Police Regiment. Berholt and Reiner help Eren learn during training.",
                    img: [require('./images/aot5.png'), require('./images/aot6.png')]
                }
            ]
        }
    ]

    return (
        <AnimeContent.Provider value = {{AnimeList}}>
            {
                children
            }
        </AnimeContent.Provider>
    )
}