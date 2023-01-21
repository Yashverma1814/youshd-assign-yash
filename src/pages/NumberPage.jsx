import React, { useState } from 'react'
import MuiPhoneNumber from 'material-ui-phone-number';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NumButton } from '../components/number/NumButton';
import { Link } from 'react-router-dom';

export const NumberPage = () => {

  return (
    <div>
        <div className='loginBackground'>
            <div className='headingMain'>
                <div className='numPageHeading'>Please enter your phone number </div>
                <div className='numPageHeading'>to get started</div>
            </div>
            <div style={{marginLeft:'3rem'}}>
                <MuiPhoneNumber defaultCountry={'us'} className='numInput'/>
            </div>
            <div className='backContinueMain'>
                <div className='backContinue'>
                    <div><button className='backButton'><ArrowBackIcon /></button></div>
                    <Link to='/enter-otp'>
                    <div><NumButton val='Continue'/></div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
