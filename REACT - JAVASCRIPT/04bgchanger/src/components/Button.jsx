import React from 'react'

function Button({ butname, txtbg, changecolor }) {
  return (
    <button
      className="outline-none px-4 rounded-xl"
      style={{ backgroundColor: txtbg }}
      onClick={changecolor}
    >
      {butname}
    </button>
  );
}

export default Button