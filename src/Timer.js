import React, {useState, useEffect} from 'react';
import './App.css';

const Timer= function(props){

    const [secOnes, setSecOnes]= useState(0);
    const [secTens, setSecTens]= useState(0);
    const [minOnes, setMinOnes]= useState(5);
    const [minTens, setMinTens]= useState(1);
    

    useEffect( () => {
        if(props.timerRunning === true && props.resetTimer === false){
            //start/stop timer based on 'timerRunning'
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

        }//if timerRunning

        //reset Timer
        if(props.resetTimer === true){
            setSecOnes(0)
            setSecTens(0)
            setMinOnes(5)
            setMinTens(1)
        }//if resetTimer
        
    }, [secOnes, secTens, minOnes, minTens, props.timerRunning,props.resetTimer] );//end useEffect

    return(
    <div className="timer">
        <span className= 'minTens'>{minTens}</span>
        <span className= 'minOnes'>{minOnes}</span>
        <span>:</span>
        <span className= 'secTens'>{secTens}</span>
        <span className= 'secOnes'>{secOnes}</span>
        {/* 00:03 */}
    </div>
    );//end return


}//end timer

export default Timer;