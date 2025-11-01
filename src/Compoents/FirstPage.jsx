import React, { useState } from 'react'

const FirstPage = () => {
  const [value,setValue]=useState(0)
  return (
    <div>

<div>FirstPage</div>
<div>{value}</div>
<div onClick={()=>{setValue(value+1)}}>Click me</div>
    </div>
  )
}

export default FirstPage