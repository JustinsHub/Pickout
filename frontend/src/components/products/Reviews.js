import React from 'react'
import fiveStar from '../styles/logos/5star.png'
import '../styles/Reviews.css'

//add review stars
const Reviews = () => {

    return (
    <div>
    <div id="carouselExampleControls" className="carousel slide col-md" data-bs-ride="carousel">
        <h1 className="Reviews-title mb-5">What people are saying</h1>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <img className="Reviews-img" alt="5star"src={fiveStar}/>
                        <span className="Reviews-sf">I couldn't make up my mind!</span>
                        <p className="Reviews-pf">Pickout really came to save the day for me! Service is amazing and fast! <p>- Dexter</p></p>
                    </div>

                    <div className="col-md">
                        <img className="Reviews-img" alt="5star"src={fiveStar}/>
                        <span className="Reviews-sf">If I could add more stars I would!</span>
                        <p className="Reviews-pf">This website is an innovative decision maker. I need more of this! <p>- Joe</p></p>
                    </div>

                    <div className="col-md">
                        <img className="Reviews-img" alt="5star"src={fiveStar}/>
                        <span className="Reviews-sf">Stress builds up when I'm indecisive</span>
                        <p className="Reviews-pf">Sometimes you just can't think of something to eat and this is where Pickout comes in! <p>- Bee Gees</p></p>
                    </div>
                </div>
            </div>
            </div>

            <div className="carousel-item">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <img className="Reviews-img" alt="5star"src={fiveStar}/>    
                        <span className="Reviews-sf">No more fighting!</span>
                        <p className="Reviews-pf">No more fighting with my girlfriend on what food to get! Pickout chooses for me! <p>- Everyone</p></p>
                    </div>
                    <div className="col-md">
                        <img className="Reviews-img" alt="5star"src={fiveStar}/>
                        <span className="Reviews-sf">My daily guidance</span>
                        <p className="Reviews-pf">This app just shows me on how not to stress out about picking food<p>- A stressed person</p></p>
                    </div>
                    <div className="col-md">
                        <img className="Reviews-img" alt="5star"src={fiveStar}/>
                        <span className="Reviews-sf">Conveniency is important</span>
                        <p className="Reviews-pf">Pickout provides not only great service but the convenience of their service is amazing!<p>- I don't know</p></p>
                    </div>
                </div>
            </div>
            </div>

            <div className="carousel-item">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <img className="Reviews-img" alt="5star"src={fiveStar}/>
                        <span className="Reviews-sf">So much thought went into this!</span>
                        <p className="Reviews-pf">Pickout really impressed me the way they came up with this idea in the first place! <p>- Boba</p></p>
                    </div>
                    <div className="col-md">
                        <img className="Reviews-img" alt="5star"src={fiveStar}/>
                        <span className="Reviews-sf">Where has this been all my life?</span>
                        <p className="Reviews-pf">Finally an app I can appreciate to make make a decision for food.<p>- Mac M1</p></p>
                    </div>
                    <div className="col-md">
                        <img className="Reviews-img" alt="5star"src={fiveStar}/>
                        <span className="Reviews-sf">When in need, is this indeed.</span>
                        <p className="Reviews-pf">I was looking for the right platform and came across Pickout! The best! <p>- Someone</p></p>
                    </div>
                </div>
            </div>
            </div>
    
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    </div>
    )
}

export default Reviews