import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NumButton } from '../components/number/NumButton';
import { useNavigate } from 'react-router-dom';


export const OtpPage = () => {
    const [one,setOne] = useState('')
    const [two,setTwo] = useState('')
    const [three,setThree] = useState('')
    const [four,setFour] = useState('')
    const [five,setFive] = useState('')
    const [six,setSix] = useState('')
    const navigate = useNavigate();
    const checkOtp = () =>{
        var flag = true;
        const arr = [one,two,three,four,five,six];
        for(var i=1;i<=6;i++){
            if(i!=arr[i-1]){
                flag=false;
                break;
            }
        }
        if(flag){
            navigate('/dashboard');
        }
        else{
            navigate('/enter-otp')
        }
    }


  return (
    <div>
        <div className='loginBackground'>
            <div className='headingMain'>
                <div className='numPageHeading'>Please enter verification code</div>
                <div className='numPageHeading'>sent</div>
                <div className='otpInputMain'>
                    <input type="text" className='singleInput' maxLength={1} value={one} onChange={(e)=>setOne(e.target.value)}/>
                    <input type="text" className='singleInput' maxLength={1} value={two} onChange={(e)=>setTwo(e.target.value)}/>
                    <input type="text" className='singleInput' maxLength={1} value={three} onChange={(e)=>setThree(e.target.value)}/>
                    <input type="text" className='singleInput' maxLength={1} value={four} onChange={(e)=>setFour(e.target.value)}/>
                    <input type="text" className='singleInput' maxLength={1} value={five} onChange={(e)=>setFive(e.target.value)}/>
                    <input type="text" className='singleInput' maxLength={1} value={six} onChange={(e)=>setSix(e.target.value)}/>
                </div>
                <div style={{color:'grey', marginLeft:'1rem', marginBottom:'1.5rem'}}>
                    The verification code expires in 2 minutes
                </div>
                <div style={{ marginLeft:'1rem'}}>Didn’t receive the verification code? Resend</div>
                <div className='backContinueMain'>
                    <div className='backContinueOtp'>
                        <div><button className='backButton'><ArrowBackIcon /></button></div>
                        <div onClick={checkOtp}><NumButton val='Continue'/></div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
}
