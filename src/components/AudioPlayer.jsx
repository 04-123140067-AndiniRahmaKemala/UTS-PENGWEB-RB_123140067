// src/components/AudioPlayer.jsx
import React from 'react';

const AudioPlayer = ({ url }) => (
  <audio controls>
    <source src={url} type="audio/mp4" />
    Browser Anda tidak mendukung elemen audio.
  </audio>
);

export default AudioPlayer;