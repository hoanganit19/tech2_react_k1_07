import React, {memo} from 'react'

function Content({onUp}) {
  console.log('re-render');
  return (
    <>
      <div>Content</div>
      <button type={'button'} onClick={onUp}>Up</button>
    </>
    
  )
}

export default memo(Content);