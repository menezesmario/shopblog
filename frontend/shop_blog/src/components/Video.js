import React from 'react';
import './Video.css';
import '../App.css';



function Video() {
    return (
        <div>
        <video src='/videos/coffeebanner.mp4' autoPlay loop muted />
        </div>
    )}

export default Video;