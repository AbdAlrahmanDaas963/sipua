import React, {useState} from 'react'
import {motion} from 'framer-motion'

function Svg() {
    const [viewBox, setviewBox] = useState("0 0 200 200")
    return (
        <motion.svg 
            animate={{viewBox: "0 0 600 600", transition:{delay: 1, duration: 1}}}
            class="svg1"
            viewBox={viewBox}
            xmlns='http://www.w3.org/2000/svg'>

            <filter id='noiseFilter'>
                <feTurbulence 
                type='fractalNoise' 
                baseFrequency='0.65' 
                numOctaves='3' 
                stitchTiles='stitch' />
            </filter>

            <rect
                width='100%' 
                height='100%' 
                filter='url(#noiseFilter)' />
        </motion.svg>
    )
}

export default Svg
