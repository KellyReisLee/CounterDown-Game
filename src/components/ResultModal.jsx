import React from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';


const ResultModal = forwardRef(function ResultModal({ targetTime, timeRemaining, onReset }, ref) {
  const dialog = useRef();

  let timeInSeconds = (timeRemaining / 1000).toFixed(2);
  const userLost = timeRemaining <= 0;
  const score = Math.round(100 - ((timeInSeconds * 100) / targetTime)) + '%';
  //console.log(score);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }

    }
  })
  return (
    <dialog onClose={onReset} ref={dialog} className='result-modal' >
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2> Your score: {score}</h2>}
      <p> The target time was <strong>{targetTime} seconds left.</strong></p>

      <p> The stopped time was <strong>{timeInSeconds} seconds left.</strong></p>
      <form method='dialog' onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  )
})

export default ResultModal;