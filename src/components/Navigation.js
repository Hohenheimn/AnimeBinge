import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/navigation.module.scss'
import { FaBars } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {

	const Stagger = {
		from: {
			height: 0
		},
		to: {
			height: "100%",
			transition: {
				staggerChildren: 0.2,
				when: "beforeChildren"
			}
		},
		exit: {
			height: 0,
			transition: {
				staggerChildren: 0.2,
				staggerDirection: -1,
				when: "afterChildren"
			}
		}
	}
	const slideX = {
		from: {
			translateX: "80vw",
			
		},
		to: {
			translateX: 0,
			transition: {
				duration: .3, ease: 'easeInOut'
			}
		},
		exit: {
			translateX: "-80vw",
		}
	}

	const [isMenu, setMenu] = useState(false);
	
	return (
		<nav>
			<h4>AnimeBinge</h4>
			<ul className='hideTablet'>
				<li><Link to="">Home</Link></li>
				<li><Link to="">Discover</Link></li>
				<li><Link to="">About Us</Link></li>
				<li><Link to="">Sign Up</Link></li>
				<li><Link to="">Login</Link></li>
			</ul>
			<AnimatePresence>
				{isMenu && (
					<motion.ul variants={Stagger} initial="from" animate="to" exit="exit">
						<motion.li variants={slideX}><Link to="">Home</Link></motion.li>
						<motion.li variants={slideX}><Link to="">Discover</Link></motion.li>
						<motion.li variants={slideX}><Link to="">About Us</Link></motion.li>
						<motion.li variants={slideX}><Link to="">Sign Up</Link></motion.li>
						<motion.li variants={slideX}><Link to="">Login</Link></motion.li>
					</motion.ul>
				)}
			</AnimatePresence>
			<aside onClick={()=>{setMenu(!isMenu)}}><FaBars /></aside>
		</nav>
	)
}
