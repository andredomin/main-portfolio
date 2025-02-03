import { motion } from 'framer-motion'
import Starfield from 'react-starfield'

const Presentation = () => {
  return (
    <>
        <header>
        <Starfield
                starCount={300}
                starColor={[255, 255, 255]}
                speedFactor={0.05}
                backgroundColor="black"
            />
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
            <motion.h2
            whileInView={{
                y: '0vh'
            }}
            initial={{
                y: '-15vh'
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