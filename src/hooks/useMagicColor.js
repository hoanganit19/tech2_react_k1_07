import React, {useState, useEffect} from 'react'

export default function useMagicColor({initialColor='#fff', timeout=2000}) {

  const [backgroundColor, setColor] = useState(initialColor);
  
  useEffect(() => {
     setTimeout(() => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        setColor(color);
     }, timeout);

  }, [backgroundColor]);

  return backgroundColor;
}
