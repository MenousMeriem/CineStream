import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div>
        <div className='flex flex-wrap justify-around pt-10 pb-10 pr-10 pl-10'>
            <Card/>
            <Card/>
            <Card/>
        </div>
       
    </div>
  )
}

export default Cards