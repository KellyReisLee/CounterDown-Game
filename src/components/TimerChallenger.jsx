import React from 'react'
import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

function TimerChallenger({ title, targetTime }) {
  // The values in 'Ref' are not lost when the app re-executes
  const timer = useRef();
  const dialog = useRef();


  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current)
    dialog.current.open();
  }

  function HandleReset() {
    setTimeRemaining(targetTime * 1000)
  }

  //console.log(timeRemaining);
  // setTimeout - executa a função assin que o tempo determinado acabar. Always in miliseconds..
  function handleStart() {
    // Timers started!!!

    timer.current = setInterval(() => {
      // Timer finished!
      //setTimerExpided(true);
      setTimeRemaining(prevTime => prevTime - 10)


    }, 10)
  }

  function handleStop() {
    // Used to stop a timer.
    clearInterval(timer.current)
    dialog.current.open();
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} timeRemaining={timeRemaining} onReset={HandleReset} />
      <section className='challenge'>
        <h2>{title}</h2>

        <p className='challenge-time'>

          {targetTime} {targetTime > 1 ? 'seconds' : 'second'}
        </p>

        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerIsActive ? 'active' : ''}>
          {timerIsActive ? 'Time is running... ' : 'Time inactive'}
        </p>


      </section>
    </>
  )
}

export default TimerChallenger