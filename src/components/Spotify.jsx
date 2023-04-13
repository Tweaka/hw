import React from 'react';
import '../../src/custom.css';

export default function Spotify() {
  return (
    <div className="pt-6">
      <div className="spotify ">
        <iframe
          src="https://open.spotify.com/embed/playlist/0EIFErlsvlhd1xhU3bVGnN?"
          width="100%"
          height="100%"
          style={{ minHeight: '360px' }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />

      </div>
    </div>
  );
}
