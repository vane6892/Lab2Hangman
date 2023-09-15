import React from 'react';
import "../styles.css";


export const ItemKeyComponent = ({ key, myKey, state, handlerClick }) => {
  return (
    <div
      key={key}
      className={state ? "disablediv" : ""}
      onClick={() => {
        handlerClick(key);
      }}
    >
      {key}
    </div>

  );
};

export default ItemKeyComponent;