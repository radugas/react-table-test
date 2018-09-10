import React from 'react';

function Popover({ style }) {
  return (
    <div 
      className='btn-warning btn-lg'
      //onLoadStart={onLoad}

      style={{
        ...style,
        position: 'absolute',
        top: '50%',
        left: '40%'
        
      }}
    >
      <strong>Данные загружаются!</strong> 
    </div>
  );
}

export default Popover;