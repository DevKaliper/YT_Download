import React from 'react'

const Header = () => {
  return (
    <nav className='sticky top-0 left-0 ' >
      <div className=' text-white w-full bg-[#120d26] rounded-3xl  justify-between mt-5 flex -center md:w-[65%] h-[4rem] mx-auto px-8 py-4 backdrop-blur'>
        <div className='ml-4'>logo</div>
        <div className='mx-auto ' >sectiones</div>
        <div className='mr-4'>socials</div>

      </div>
    </nav>
  )
}

export default Header