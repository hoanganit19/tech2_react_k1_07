import React, {useState, useEffect} from 'react'
import useMagicColor from '../hooks/useMagicColor';

export default function Products() {
  
  const color = useMagicColor({initialColor: 'green', timeout: 1000});  
    
  return (
    <div style={{background: color}}>
        <h1>Tên sản phẩm</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  )
}
