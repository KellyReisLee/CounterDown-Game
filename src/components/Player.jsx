import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enterPlayerName, setEnterPlayerName] = useState();


  // E não preciso usar o evento para pegar o valor que foi inputado. 
  function handleClick() {
    setEnterPlayerName(playerName.current.value)

  }
  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
