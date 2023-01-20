import React, { useState } from 'react'
import MuiPhoneNumber from 'material-ui-phone-number';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NumButton } from '../components/number/NumButton';

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
                    <div><NumButton val='Continue'/></div>
                </div>
            </div>
        </div>
    </div>
  )
}
