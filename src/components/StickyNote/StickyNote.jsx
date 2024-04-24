import React from 'react';
import './stickynote.css';
// import booksImage from '../../../public/images/books.avif'; 

function StickyNote() {
  return (
    <>
      <div className="sticky-note">
        <div className="note-content text-center">
          <h6 className='mt-5 ms-4' style={{ color: "darkgreen" }}>ADMISSION<br />OPEN</h6>
          <p className='text-flicker-in-glow'>2024-2025</p>
        </div>
      </div>
    </>
  );
}

export default StickyNote;
