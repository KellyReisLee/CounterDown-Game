import Player from './components/Player.jsx';

import TimerChallenger from './components/TimerChallenger.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenger time='Easy' targetTime={1} />
        <TimerChallenger time='Not Easy' targetTime={5} />
        <TimerChallenger time='Getting tough' targetTime={10} />
      </div>
    </>
  );
}

export default App;
