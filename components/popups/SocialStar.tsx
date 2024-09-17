import React from 'react'
import StarsRating from '../stars-rating'
import Image from 'next/image'
import clsx from 'clsx'

function SocialStar({ transition }: { transition?: boolean }) {
  return (
    <div 
		className={clsx(
				"flex items-center gap-3 p-2 rounded-[20px] bg-white w-[400px]",
				transition &&
					"transition-transform duration-300 ease-in-out group-hover:scale-110"
			)}
		>
        <Image
            width={100}
            height={100}
            alt=''
            src={'/avatar-placeholder.jpg'}
            className='rounded-[20px]'
        />
        <div>
            <div className="block">
                <StarsRating value={5} readonly style={{transform: 'scale(0.8)', marginLeft: '-15px'}}/>
            </div>
            <p className='text-gray-900 font-bold text-[15px]'>I&apos;ve already seen an increase in conversion rate and revenue</p>
            <span className='text-gray-400 font-normal text-[12px]'>Jay Claude / <span className='text-blue-300'>@jayclouse</span></span>
        </div>
    </div>
  )
}

export default SocialStar