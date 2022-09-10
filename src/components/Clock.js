import React from 'react'
// import useMagicColor from '../hooks/useMagicColor';
// import useClock from '../hooks/useClock'
import useCoolClock from '../hooks/useCoolClock'

export default function Clock() {
//   const clock = useClock();  
//   const color = useMagicColor({initialColor: '#fff', timeout: 1000});

    const {color, clock} = useCoolClock();

  return (
    <>
        <h1 style={{background: color}}>{clock}</h1>
        <h1 style={{color: 'red'}}>{clock}</h1>
    </>
  )
}
