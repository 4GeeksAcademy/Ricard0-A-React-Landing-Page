import React from 'react'


const Jumbotron = () => {

    const lastFix = {
        width: '1112px',
        marginLeft: '2px'
      }
    
    return (
        <div className='row container p-4 bg-light' style={lastFix}>
            <div className='col-12'>
                <h1 className='display-5'>A WARM WELCOME!</h1>
                <p className="fs-5 text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam,
                eligendi, in quo sunt possimus non incidunt odit vero aliquid similique
                quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
                </p>
                <a class="btn btn-primary btn-lg" href="#">Call to action!</a>
            </div>
        </div>
    )
}

export default Jumbotron;