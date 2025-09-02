"use client";

import React from 'react'
import { dataCumpleExpress } from './dataCumpleExpress';
import { Music } from 'lucide-react';
import SimpleMusicPlayerCustom from '../../SimpleMusicPlayerCustom';

/* const musicTracks = [
  { id: 1, title: "Canción 1", url: "/audio/song1.mp3" },
  { id: 2, title: "Canción 2", url: "/audio/song2.mp3" },
  { id: 3, title: "Canción 3", url: "/audio/song3.mp3" },
]; */
const musicTracks = [
  { id: 1, title: "Canción 1", url: "/audio/song1.mp3" },
];

const AudioPlaylist = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
      <div className="flex items-center gap-3 mb-3">
        <Music className="w-5 h-5 text-purple-300" />
        <h3 className="text-purple-100 font-semibold">Music</h3>
      </div>
      <div className="flex justify-center items-center gap-4">
        {musicTracks.map(track => (
          <SimpleMusicPlayerCustom key={track.id} musicUrl={track.url} />
        ))}
      </div>
    </div>
  )
}

export default AudioPlaylist