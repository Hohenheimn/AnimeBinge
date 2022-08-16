import React, {useContext} from 'react'
import { AnimeContent } from '../DataProvider'
import styles from '../styles/animeEpisodes.module.scss'
import { AiFillStar } from 'react-icons/ai'
import { motion } from 'framer-motion'
import {AiOutlineClose} from 'react-icons/ai'

export default function AnimeEpisodes({id, setID}) {

    const {AnimeList} = useContext(AnimeContent)

    const filtered = AnimeList.filter(item => (
        item.id === id
    ))

    const SlideUp = {
        from: {
            translateY: "200px"
        },
        to:{
            translateY: 0
        },
        exit: {
            translateY: "200px"
        }
    }

    return (
        <motion.section variants={SlideUp} initial="from" animate="to" exit="exit" className={styles.container}>
             <AiOutlineClose className={styles.svg} onClick={()=>(setID(null))}/>
            <div className={styles.left}>
                <article>
                    <img src={filtered[0].img} alt="" />
                    <aside>
                        <div>
                            <h3>{filtered[0].title}</h3>
                            <span>Category: 
                                {
                                    filtered[0].category.map((item , index) => (
                                        filtered[0].category.length - 1 === index ? `${item}` : `${item}, `
                                    ))
                                }
                            </span>
                            <aside><AiFillStar /> {filtered[0].rating}</aside>
                        </div>
                    </aside>
                </article>
                <p>{filtered[0].description}</p>
            </div>
            <div className={styles.right}>

                <div className={styles.header}>
                    <h3>Episodes</h3>
                    <h3>Season1</h3>
                </div>

                <div className={styles.body}>

                    {
                        filtered[0].episodes.map((item, index) => (
                            <ul key={index}>
                                <li>
                                    {item.img.map((item2, index2)=> (
                                        <img key={index2} src={item2} alt="" />
                                    ))}
                                </li>
                                <li>
                                    <p className={styles.title}>Episode 1</p>
                                    <p>{item.title}</p>
                                </li>
                            </ul>
                        ))
                    }
                </div>
            </div>
        </motion.section>
    )
}
