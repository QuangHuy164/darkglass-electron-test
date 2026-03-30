/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface BlockProps {
  id: number;
  name: string;
  color: string;
}

function DragDrop() {
  const navigate = useNavigate();
  const [blocks, setBlocks] = useState<BlockProps[]>([
    { id: 1, name: 'Blue Block', color: '#124ceb' },
    { id: 2, name: 'Red Block', color: '#e20b0b' },
    { id: 3, name: 'Yellow Block', color: '#caeb0e' },
    { id: 4, name: 'Green Block', color: '#08bd08' },
    { id: 5, name: 'Purple Block', color: '#da0bec' },
  ]);
  const [draggedBlockIndex, setDraggedBlockIndex] = useState<number | null>(null);
  function handleDragStart(index: number) {
    setDraggedBlockIndex(index);
  }
  function handleDragEnter(index: number) {
    if (draggedBlockIndex === null || draggedBlockIndex === index) {
      return;
    }
    const newList = [...blocks];
    // get the item
    const blockToMove = newList[draggedBlockIndex];
    // remove from old pos
    newList.splice(draggedBlockIndex, 1);
    // put in new position
    newList.splice(index, 0, blockToMove);
    // update state and index
    setDraggedBlockIndex(index);
    setBlocks(newList);
  }

  function handleDragEnd() {
    setDraggedBlockIndex(null);
  }
  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }
  return (
    <div>
      <h2>Drag and Drop control</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        {blocks.map((block, index) => (
          <div
            key={block.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            style={{
              width: '100px',
              height: '60px',
              display: 'flex',
              alignItems:'center',
              justifyContent: 'center',
              backgroundColor: block.color,
              margin: '20px',
              cursor: 'move',
            
            }}
          >
            <span>{block.name}</span>
          </div>
        ))}
      </div>

      <button type="button" onClick={() => navigate('/')}>
        Return to homepage
      </button>
    </div>
  );
}

export default DragDrop;
