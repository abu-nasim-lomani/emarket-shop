import React from 'react'
import NewArrival from './NewArrival'
import TopRank from './TopRank'

function HeadingSection() {
    return (
        <div className="container mt-5 mb-5 pb-5">
            <div className="row">
                <NewArrival />
                <TopRank />
            </div>            
        </div>
    )
}

export default HeadingSection
