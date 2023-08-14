import './App.css';
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import images from './img'


function App() {

  const [width, setWidth] = useState(0);

  const carousel = useRef()
  
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div className="App">

    <motion.div className='carousel'>

        <motion.div className='inner-carousel' drag='x' ref={carousel} whileTap={{cursor:"grapping"}}
          dragConstraints={{ right: 0, left: -width }}>
          {
            images.map((item) =>
            (<motion.div className='item'>
              <img src={item} alt='not found' />
            </motion.div>)
            )
          }

        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
