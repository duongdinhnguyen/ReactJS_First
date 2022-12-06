import React, {useRef} from "react";
import Video from "./Video";

function App() {
  const videoRef = useRef()

  const playVideo = () => {
    videoRef.current.play()
  }

  const pauseVideo = () => {
    videoRef.current.pause()
  }

  return (
    <>
      <Video ref={videoRef}/>
      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>
    </>
  );
}

export default App;
