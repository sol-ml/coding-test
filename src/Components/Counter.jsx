import { useTimer } from 'react-timer-hook'

 export function Counter ({ expiryTimestamp  }) {
    const {
      seconds,
      minutes,
      start
    } = useTimer ({expiryTimestamp, autoStart: false });
    
     const time = new Date();
    time.setMinutes(time.getMinutes());
    
          return (
           <div className='space-x-2 font-semibold text-3x1' style= {{ width:100 }}>
            <span>{minutes}</span> : <span>{seconds}</span> 
            <button onClick= {start} >start</button>
           </div>
           )
        } 

export default Counter