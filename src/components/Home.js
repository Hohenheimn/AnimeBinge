import React, {useContext} from 'react'
import Header from './Header'
import { AnimeContent } from '../DataProvider'
import TrendingCarousel from './Carousel/TrendingCarousel'
import styles from '../styles/throwback.module.scss'

export default function Home() {

	const {AnimeList} = useContext(AnimeContent)

	const throwBackAnime = AnimeList.filter(item => item.status.includes('throwback'))

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
					<ul>
						{
							throwBackAnime.map((item, i) => (
								<li key={i}>
									<img src={item.img} alt="" />
								</li>
							))
						}
					</ul>
				</div>
			</section>
		</div>
	)
}
