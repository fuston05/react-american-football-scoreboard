import React, {useState, useEffect} from 'react';
import './App.css';

const Timer= function(props){

    const [secOnes, setSecOnes]= useState(0);
    const [secTens, setSecTens]= useState(0);
    const [minOnes, setMinOnes]= useState(5);
    const [minTens, setMinTens]= useState(1);
    

    useEffect( () => {
        if(props.timerRunning === true){
            // console.log('is timer running: '+props.timerRunning);
            let interval= setInterval( () => {
                
                if( secOnes === 0 ){
                    setSecOnes(9)
                    if( secTens === 0 ){
                        setSecTens(5);
    
                        if( minOnes === 0 ){
                            setMinOnes(9)
                            setMinTens( minTens -1 )
                        }else{
                            setMinOnes(minOnes -1)
                        }
                    }else{
                        setSecTens(secTens -1)
                    }//secTens
                }else{
                    setSecOnes(secOnes-1);
                }//if secOnes
    
                clearInterval(interval);
            }, 1000);//end setInterval

        }else{
            setSecOnes(0)
            setSecTens(0)
            setMinOnes(0)
            setMinTens(0)
            // console.log('timerRunning is false')
        }//end if timerRunning
        
    } );//end useEffect

    return(
    <div className="timer">
        <span class= 'minTens'>{minTens}</span>
        <span class= 'minOnes'>{minOnes}</span>
        <span>:</span>
        <span class= 'secTens'>{secTens}</span>
        <span class= 'secOnes'>{secOnes}</span>
        {/* 00:03 */}
    </div>
    );//end return


}//end timer

export default Timer;