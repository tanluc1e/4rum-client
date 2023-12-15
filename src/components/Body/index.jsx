import React from 'react'
import Top from './Top'
import Listing from './Listing'
import Activity from './Activity'
import './style.css'

export default function Body() {
    return (
        <div className='mainContent'>
            <Top />

            <div className='bottom flex'>
                <Listing />
                <Activity />
            </div>
        </div>
    )
}
