import React from 'react'
import { Link } from 'react-router-dom'

export const AuthorizeSocial = () => {
  return (
    <div>
        <div className='loginBackground'>
            <div className='headingMain'>
                <div className='numPageHeading'>Verify your social</div>
                <div className='numPageHeading'>media accounts</div> 
                <div className='socialHead'>
                    <a href="" style={{textDecoration:'none'}}>
                    <div className='socialMain'>
                        <div className='insta-icon'></div>
                        <div className='social-name'>Instagram</div>
                    </div>
                    </a>
                    <a href="" style={{textDecoration:'none'}}>
                    <div className='socialMain'>
                        <div className='tiktok-icon'></div>
                        <div className='social-name'>TikTok</div>
                    </div>
                    </a>
                </div>
                <Link to='/dashboard'>
                    <div className='skip-continue'>
                            <div><button className='skipButton'>Skip for now</button></div>
                            <div><button className='continueButton'disabled>Continue</button></div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
