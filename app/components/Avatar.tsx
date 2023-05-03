'use client'

import Image from 'next/image'

const Avatar = () => {
   return (
      <Image
         className='rounded-full bg-slate-300'
         height='30'
         width='30'
         alt='avatar'
         src='/images/placeholder.svg'
      />
   )
}

export default Avatar
