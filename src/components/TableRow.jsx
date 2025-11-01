// src/components/TableRow.jsx
import React from 'react';
import AudioPlayer from './AudioPlayer';

const TableRow = ({ track, onAddToPlaylist }) => (
  <tr>
    <td><img src={track.artwork} alt={track.trackName} className="track-artwork" /></td>
    <td>{track.trackName}</td>
    <td>{track.artistName}</td>
    <td>${track.price.toFixed(2)}</td> 
    <td>
      {track.previewUrl ? (
        <AudioPlayer url={track.previewUrl} />
      ) : (
        'N/A'
      )}
    </td>
    <td>
      <button className="add-button" onClick={() => onAddToPlaylist(track)}>
        + Playlist
      </button>
    </td>
  </tr>
);

export default TableRow;