import React from 'react'
import thumbnail from '../assets/thumbnail.webp'
import vert from '../assets/more_vert.svg'

const Thumbnail = () => {
  return (
    <div>

        <div className='border-2 box-border'>
            <img src={thumbnail} className='w-xl' />
        </div>

        <div>
            <div>
                <img src={thumbnail} />
            </div>
            <div>
                title
            </div>
            <div>
                <img src={vert} />
            </div>
        </div>

        <div>
            Channel Name
        </div>
        <div>
            <span>10k Views</span>
            <span>3 Days Ago</span>
        </div>

    </div>
  )
}

export default Thumbnail