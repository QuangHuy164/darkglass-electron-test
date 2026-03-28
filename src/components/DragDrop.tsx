/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface BlockItemProps {
  id: number;
  name: string;
  color: string;
}

function DragDrop() {
  const navigate = useNavigate();
  const [items, setItems] = useState<BlockItemProps[]>([
    { id: 1, name: 'Blue Block', color: '#124ceb' },
    { id: 2, name: 'Red Block', color: '#e20b0b' },
    { id: 3, name: 'Yellow Block', color: '#caeb0e' },
    { id: 4, name: 'Green Block', color: '#08bd08' },
    { id: 5, name: 'Purple Block', color: '#da0bec' },
  ]);
  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);
  function handleDragStart(index: number) {
    setDraggedItemIndex(index);
  }
  function handleDragEnter(targetIndex: number) {
    if (draggedItemIndex === null || draggedItemIndex === targetIndex) {
      return;
    }
    const newList = [...items];
    // get the item
    const itemBeingMoved = newList[draggedItemIndex];
    // remove from old pos
    newList.splice(draggedItemIndex, 1);
    // put in new position
    newList.splice(targetIndex, 0, itemBeingMoved);
    // update index let React knows where the item is
    setDraggedItemIndex(targetIndex);
    // update state
    setItems(newList);
  }

  function handleDragEnd() {
    setDraggedItemIndex(null);
  }
  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }
  return (
    <div>
      <h2>Drag and Drop control</h2>
      <div>
        {items.map((item, index) => (
          <div
            key={item.id}
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
              backgroundColor: item.color,
              margin: '20px',
            }}
          >
            <span>{item.name}</span>
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
