import lion  from "./video/lion.mp4";
import { forwardRef, useImperativeHandle, useRef} from "react";

const Video = ( props, ref ) => {
    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play () {
            videoRef.current.play()
        },
        pause () {
            videoRef.current.pause()
        }
    }))
    return (
        <video 
            src={lion}
            width={500}
            ref={videoRef}
        >    
        </video>
    )
}

export default forwardRef(Video)