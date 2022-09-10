import React, {useState, useEffect} from 'react'

export default function useClock() {

const [date, setDate] = useState(new Date());

useEffect(() => {
    setTimeout(() =>{
        setDate(new Date);
    }, 1000);
}, [date]);

  return `${date.getHours()}:${date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()}:${date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds()}`;
}
