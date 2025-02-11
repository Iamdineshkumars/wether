import React from 'react'
import ToogleButton from './ToogleButton'

const Header = () => {
  
  return (
    <nav className='mt-8 lg:flex justify-center '> {/* headrer page*/}
       <div ><h1 className=' text-4xl font-bold flex justify-center max-sm:text-2xl max-sm:font-bold max-sm:flex justify-center'>WETHER DASHBOARD</h1></div>
       <div className='mb-2 pl-8 pt-4 lg:relative left-[20%]'><ToogleButton/></div>
    </nav>
  )
}

export default Header