import React from 'react'
import styles from '../../styles/HeaderCarousel.module.scss'
import { Link } from 'react-router-dom'
import { AiFillStar, AiFillHeart } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
import { FlipY, FadeDown, FadeRight, FadeIn } from '../Animation'
import { motion } from 'framer-motion'

export default function ({image, title, category, rating, description, link}) {


    return (
        <div className={styles.hCarousel}>

            <FadeIn>
                <motion.img src={image} alt="AnimeImage" />
            </FadeIn>

            <motion.div className={styles.bg}></motion.div>

            <article>
                <FlipY><h1>{title}</h1></FlipY>
                <FadeDown>
                    <div className={styles.rnc}>
                        <p><AiFillStar /> {rating + ".0"}</p>
                        <p>Category: 
                            {category.map(item => (
                                item + ', '
                            ))}
                        </p>
                    </div>
                </FadeDown>
                <FadeRight>
                    <p>{description}</p>
                </FadeRight>
                <div className={styles.button}>
                    <Link to={link}><BsFillPlayFill /> Watch Now!</Link>
                    <input type="checkbox" name="" id="checkbox" />
                    <label for="checkbox"><AiFillHeart /></label>
                </div>
                
            </article>
            
            <ul>
                <li className={styles.active}><Link to="#">Overview</Link></li>
                <li><Link to="#">Episodes</Link></li>
                <li><Link to="#">Episodes</Link></li>
            </ul>

        </div>
    )
}
