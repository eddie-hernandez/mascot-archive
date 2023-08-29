import React, { useState } from 'react';
import './DropdownMenu.css'

export function DropdownMenu({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-menu">
      <h2 onClick={() => setIsOpen(!isOpen)}>
        {title} ({content.length})
      </h2>
      {isOpen && <div className="dropdown-content">{content}</div>}
    </div>
  );
}