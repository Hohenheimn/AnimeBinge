import React, {useRef, useEffect, useState, useContext} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../../styles/trendingCarousel.module.scss'
import { AnimeContent } from '../../DataProvider'
import { AiFillStar } from 'react-icons/ai'
import AnimeEpisodes from '../AnimeEpisodes'


export default function TrendingCarousel() {

    const {AnimeList} = useContext(AnimeContent)

    const trendingAnime = AnimeList.filter(item => item.status.includes('trending'))

    const [isCarWidth, setCarWidth] = useState(0)

    const carouselContainer = useRef()

    useEffect(() => {
        const ScrollWidth = carouselContainer.current.scrollWidth
        const carConWidth = carouselContainer.current.offsetWidth
        const OverWidth = ScrollWidth - carConWidth
        setCarWidth(OverWidth)
    }, [])

    const [isAnimeID, setAnimeID] = useState(null);

    return (
            <div>
                <AnimatePresence exitBeforeEnter>
                    {isAnimeID === null ?
                        (
                            <motion.div ref={carouselContainer}  className={styles.trendCarousel}>
                                <motion.section drag="x" dragConstraints={{right: 0, left: -isCarWidth}} whileTap={{cursor: "grabbing"}}>
                                    {trendingAnime.map((item, i) => (
                                        <motion.aside key={i} onClick={() => (setAnimeID(item.id))}>
                                            <img src={item.img} alt={item.title} />
                                            <motion.article whileHover={{top: 0, background: "linear-gradient(360deg, black, rgba(0, 0, 0, 0.552)"}}>
                                                <h4>{item.title}</h4>
                                                <ul>
                                                    <li>Category: {item.category + ', '}</li>
                                                    <li><AiFillStar /> {item.rating}</li>
                                                </ul>
                                                <p>{item.description}</p>
                                            </motion.article>
                                        </motion.aside>
                                    ))}
                                </motion.section>
                            </motion.div>
                        )
                        :
                        (
                            <AnimeEpisodes id={isAnimeID} setID={setAnimeID}/>
                        )
                    }
                </AnimatePresence>
            </div>
    )
}
