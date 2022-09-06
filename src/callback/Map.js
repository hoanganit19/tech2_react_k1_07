import React, {memo} from 'react'

function Map({iframe}) {
console.log('re-render map');
  return (
    <div dangerouslySetInnerHTML={{__html: iframe}}></div>
  )
}

export default memo(Map);