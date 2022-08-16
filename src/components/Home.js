import React, {useContext, useState} from 'react'
import Header from './Header'
import { AnimeContent } from '../DataProvider'
import TrendingCarousel from './Carousel/TrendingCarousel'
import styles from '../styles/throwback.module.scss'
import AnimeEpisodes from './AnimeEpisodes'

export default function Home() {

	const {AnimeList} = useContext(AnimeContent)

	const throwBackAnime = AnimeList.filter(item => item.status.includes('throwback'))

	const [isIDtb, setIDtb] = useState(null)

	return (
		<div>
			<Header />
			<section className={styles.container}>
				<div>
					<h2>Trending <span>this week</span></h2>
					<TrendingCarousel />
				</div>
				<div>
					<h2>Throwback Anime!</h2>
					{isIDtb === null ?
						<ul>
							{
								throwBackAnime.map((item, i) => (
									<li onClick={() => (setIDtb(item.id))} key={i}>
										<img src={item.img} alt="" />
									</li>
								))
							}
						</ul>
					:
						<AnimeEpisodes id={isIDtb} setID={setIDtb}/>
					}
				</div>
			</section>
		</div>
	)
}
