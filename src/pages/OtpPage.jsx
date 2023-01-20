import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NumButton } from '../components/number/NumButton';


export const OtpPage = () => {
  return (
    <div>
        <div className='loginBackground'>
            <div className='headingMain'>
                <div className='numPageHeading'>Please enter verification code</div>
                <div className='numPageHeading'>sent</div>
                <div className='otpInputMain'>
                    <input type="text" className='singleInput'/>
                    <input type="text" className='singleInput'/>
                    <input type="text" className='singleInput'/>
                    <input type="text" className='singleInput'/>
                    <input type="text" className='singleInput'/>
                    <input type="text" className='singleInput'/>
                </div>
                <div style={{color:'grey', marginLeft:'1rem', marginBottom:'1.5rem'}}>
                    The verification code expires in 2 minutes
                </div>
                <div style={{ marginLeft:'1rem'}}>Didn’t receive the verification code? Resend</div>
                <div className='backContinueMain'>
                    <div className='backContinueOtp'>
                        <div><button className='backButton'><ArrowBackIcon /></button></div>
                        <div><NumButton val='Continue'/></div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
}
