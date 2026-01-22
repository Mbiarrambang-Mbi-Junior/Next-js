import React from 'react'
import Image from 'next/image'
import data from '@/utils/data.json'

function PaveWay() {

  return (
    <div>
      <Image src={data.images[0].href}
      alt="PaveWay" 
      width={100} 
      height={100} 
      />
    </div>
  )
}

export default PaveWay