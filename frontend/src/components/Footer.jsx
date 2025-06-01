import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
            <div className="flex items-center space-x-2">
                <img src={assets.logo_icon} alt="PixGen Logo" className="w-6 sm:w-7 lg:w-8" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">PixGen</h2>
            </div> 
            <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'> Copyrights @PixGen | All right reserved.</p>
            <div className='flex gap-2.5'>
                <img src={assets.facebook_icon} alt='' width={35}/>
                <img src={assets.instagram_icon} alt='' width={35}/>
                <img src={assets.twitter_icon} alt='' width={35}/>
            </div>
    </div>
  )
}

export default Footer