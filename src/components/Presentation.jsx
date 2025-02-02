import { motion } from 'framer-motion'
import Starfield from 'react-starfield'

const Presentation = () => {
  return (
    <>
        <header>
            <motion.h1

            initial={{
                x: '-100vw'
            }}
            animate={{
                x: 0
            }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            >Hola! Soy Andrés, FrontEnd Developer 🚀</motion.h1>
        </header>
        <div className="solutions">
                <Starfield
                starCount={1000}
                starColor={[255, 255, 255]}
                speedFactor={0.05}
                backgroundColor="black"
            />
            <motion.h2
            whileInView={{
                y: '0vw'
            }}
            initial={{
                y: '-25vw'
            }}
            viewport={{once: true}}
            transition={{ type: 'spring', stiffness: 20, damping: 20 }}
            >
                Creo soluciones digitales creativas y modernas 🎯
                con las últimas y mejores tecnologías ✨🌌
            </motion.h2>

        </div>

        <div className="stack">
            <motion.h2
            
            initial={{
                x: '-50vw'
            }}
            whileInView={{
                x: 0
            }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            >
                Mi stack tecnológico:
            </motion.h2>
            <motion.ul
             initial={{
                x: '50vw'
            }}
            whileInView={{
                x: 0
            }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            >
                <li>Next</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>JavaScript Vanilla</li>
                <li>TailwindCSS</li>
                <li>CSS</li>
                <li>Y más: Angular, SASS, Framer-motion...</li>
            </motion.ul>
        </div>
    </>
  )
}

export default Presentation