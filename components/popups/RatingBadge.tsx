import React from 'react'
import StarsRating from '../stars-rating'
import clsx from 'clsx'

function RatingBadge({ transition }: { transition?: boolean }) {
  return (
    <div
        className={clsx(
            "",
            transition &&
                "transition-transform duration-300 ease-in-out group-hover:scale-110"
        )}
    >
        <div className="flex items-center gap-2">
            <div className="number text-gray-50 py-4 px-6 rounded-[6px] bg-[#000] flex items-center justify-center text-[18px] font-semibold">
                5
            </div>
            <div className="">
                <div className="block">
                    <StarsRating value={5} readonly/>
                </div>
                <span className='text-[#000] text-[14px] font-normal'>from 2k testimonials</span>
            </div>
        </div>
    </div>
  )
}

export default RatingBadge