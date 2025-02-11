import React, { useContext } from 'react'
import { AppContext } from '../context/ThemeContext'
import { MdDarkMode } from "react-icons/md"
import { CiLight } from "react-icons/ci";
const ToogleButton = () => {
    const {isDarkMode,toogleIcon} = useContext(AppContext)
  return (
    <section className='toggle-container'>
       <button onClick={toogleIcon} className='dark-toogle'>{isDarkMode? (<div><MdDarkMode className='toggle-icon bg-indigo-600'/>dark</div>) : (<div><CiLight className='toggle-icon'/>light</div>)}</button>
    </section>
  )
}

export default ToogleButton