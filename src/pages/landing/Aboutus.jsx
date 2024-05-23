import React from 'react'
import { Navbars } from './components/Navbars'
import Footers from './components/Footers'

function Aboutus() {
  return (
    <div className=' bg-[#F5F6FA]'>
    <Navbars/>
    <section className=' px-12 py-12 ' id={"#Aboutus"}>
    <h2 className='text-[2.7rem] text-[#1E1E1E] font-[600] text-center'>About Us</h2>
    <div className='  justify-center py-24 md:px-24 flex'>
    <div className=' block'>
    
    <h3 className=' font-[600] text-[2rem] '>Header</h3>
    <p className='leading-[2rem]'>Eleifend dui sit vitae eu non hendrerit malesuada convallis bibendum. Nisi cras id at urna id. Velit nam et integer bibendum pharetra eu consequat fringilla. Platea felis erat nibh neque porttitor enim in.
    Eleifend dui sit vitae eu non hendrerit malesuada convallis bibendum. Nisi cras id at urna id. Velit nam et integer bibendum pharetra eu consequat fringilla. Platea felis erat nibh neque porttitor enim in.
    Eleifend dui sit vitae eu non hendrerit malesuada convallis bibendum. Nisi cras id at urna id. Velit nam et integer bibendum pharetra eu consequat fringilla. Platea felis erat nibh neque porttitor enim in.</p>
     
    </div>

    
    </div>
    </section>
    <Footers/>
    
    </div>
  )
}

export default Aboutus