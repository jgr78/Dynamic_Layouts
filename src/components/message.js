import React from "react";
const styles = `
  .message_container {
      position: absolute;
      top: 50px;
      color: #222;
      font-size: 1.4em;
      font-family: sans-serif;
      margin: 0 auto;
      width: 100%;
      text-align: center;
  }
  `
export default ({message}) => (
  <>
    <div className="message_container">
      {message}
    </div>
    <style>{styles}</style>
  </>
);

