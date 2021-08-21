import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
    return (
        <div class="d-md-flex align-items-center justify-content-center" style={{paddingTop:'130px'}}>
            <div class="container text-center p-5 p-md-0">
                <div class="row mb-4">
                    <div class="col-md-4 m-auto">
                        <figure>
                            <img class="img-fluid" src="./assets/svg/404.svg" alt="image" />
                        </figure>
                    </div>
                </div>
                <h2 class="display-6">Page not found</h2>
                <p class="text-muted my-4">The page you want to go is not currently available</p>
                <div class="d-flex gap-3 justify-content-center">
                    <Link to="/"><a href="#" class="btn btn-primary">Home Page</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Error404
