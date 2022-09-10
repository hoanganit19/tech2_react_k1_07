import React from 'react'
import useClock from './useClock';
import useMagicColor from './useMagicColor';

export default function useCoolClock() {
    //Dữ liệu trả về là 1 object
    //{color: value, clock: value}

    const color = useMagicColor({initialColor: '#fff', timeout: 1000});
    const clock = useClock();

    return {
        color: color,
        clock: clock
    }
}
