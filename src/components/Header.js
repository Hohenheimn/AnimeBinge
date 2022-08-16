import React, {useContext, useState} from 'react'
import styles from '../styles/HeaderCarousel.module.scss'
import HeaderCarousel from './Carousel/HeaderCarousel'
import { AnimeContent } from '../DataProvider'
import { AnimatePresence } from 'framer-motion'

export default function Header() {

    const {AnimeList} = useContext(AnimeContent);

    const newAnime = AnimeList.filter(item => item.status.includes('new'));

    const [isCounter, setCounter] = useState(0);

    return (
        <div style={{position: "relative"}}>

            <AnimatePresence exitBeforeEnter>
                {newAnime.map((item, i) => (
                    isCounter === i && (
                        <HeaderCarousel key={i} image={item.img} title={item.title} category={item.category} rating={item.rating} description={item.description} link={item.link} />
                    )
                ))}
            </AnimatePresence>
            
            <ul className={styles.dots}>
                {
                    newAnime.map((item, i) => (
                        <li key={i} className={ isCounter === i ? styles.active : ''} onClick = {() => { setCounter(i)}}></li>
                    ))
                }
            </ul>
        </div>
    )
}
