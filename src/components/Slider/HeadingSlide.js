import React from 'react'
import CategoryList from './CategoryList'
import Slider from './Slider'

function HeadingSlide() {
    return (
        <div className="container" >
            <div className="row pt-4">
                <CategoryList />
                <Slider />
            </div>
        </div>
    )
}

export default HeadingSlide
