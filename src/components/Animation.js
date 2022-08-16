import { motion } from 'framer-motion'

export const FlipY = ({children}) => {
    const flip = {
        from: {rotateX: "90deg"},
        to: {
            rotateX: 0,
            transition: {
                duration: .5,
                ease: "easeInOut"
            }
        },
        exit: {
           rotateX: "90deg",
            transition: {
                duration: .5,
                ease: "easeInOut"
            }
        }
    }
    return(
        <motion.div variants={flip} initial="from" animate="to" exit="exit">
            {children}
        </motion.div>
    )   
}

export const FadeRight = ({children}) => {
    const fadeRight = {
        from: {translateX: "-50px", opacity: 0},
        to: {
            translateX: 0, opacity: 1,
            transition: {
                duration: .5,
                ease: "easeInOut"
            }
        },
        exit: {
            translateX: "50px", opacity: 0,
            transition: {
                duration: .5,
                ease: "easeInOut"
            }
        }
    }
    return(
        <motion.div variants={fadeRight} initial="from" animate="to" exit="exit">
            {children}
        </motion.div>
    )   
}

export const FadeDown = ({children}) => {
    const fadeDown = {
        from: {translateY: "-50px", opacity: 0},
        to: {
            translateY: 0, opacity: 1,
            transition: {
                duration: .5,
                ease: "easeInOut"
            }
        },
        exit: {
            translateY: "50px", opacity: 0,
            transition: {
                duration: .5,
                ease: "easeInOut"
            }
        }
    }
    return(
        <motion.div variants={fadeDown} initial="from" animate="to" exit="exit">
            {children}
        </motion.div>
    )   
}

export const FadeIn = ({children}) => {
    const FadeIn = {
        from: {opacity: 0.1},
        to: {
            opacity: 1,
            transition: {
                duration: .5,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0.1,
            transition: {
                duration: .5,
                ease: "easeInOut"
            }
        }
    }
    return(
        <motion.div variants={FadeIn} initial="from" animate="to" exit="exit">
            {children}
        </motion.div>
    )   
}

export const Stagger = ({children}) => {
    const Stagger = {
        to: {
            transition: {
                staggerChildren: 0.2
            }
        },
        exit: {
            transition: {
                staggerChildren: 0.2
            }
        }
    }
    return(
        <motion.div variants={Stagger} initial="from" animate="to" exit="exit">
            {children}
        </motion.div>
    )   
}

