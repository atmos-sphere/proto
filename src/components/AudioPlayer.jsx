import React, { useState, useEffect, useRef } from "react";

const defaultTracks = [
  {
    title: "Short Sound",
    artist: "Test",
    audioSrc: "/music/Short Sound.wav",
  },
  {
    title: "Beyond the Fog",
    artist: "Monster Hunter",
    audioSrc: "/music/Monster Hunter - Beyond the fog.mp3",
  },
  {
    title: "Pokke Village",
    artist: "Monster Hunter 2",
    audioSrc: "/music/Monster Hunter 2 - Pokke Village Theme.mp3",
  },
];

const AudioPlayer = ({ tracks }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const setTrackProgress = useState(0)[1];
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Destructure for conciseness
  const { title, artist, audioSrc } = tracks[trackIndex];

  // Refs
  const audioRef = useRef();
  const intervalRef = useRef();
  const isReady = useRef(false);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
  }, []);

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isMuted) {
      audioRef.current.volume = 0;
    } else {
      audioRef.current.volume = 1;
    }
  }, [isMuted]);

  const toggleMute = () => setIsMuted(!isMuted);

  // Handle setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      if (isMuted) {
        audioRef.current.volume = 0;
      } else {
        audioRef.current.volume = 1;
      }
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    isReady.current = true;
  });

  return (
    <div className="audio-player">
      <div className="track-info">
        <h2 className="title">{title}</h2>
        <h3 className="artist">{artist}</h3>
        <button type="button" onClick={toggleMute}>
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
export { AudioPlayer, defaultTracks };
