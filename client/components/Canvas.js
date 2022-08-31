import React from "react";

  const Canvas = (props) => {
    return (
      <div className="column">
        <canvas id="canvas" className="canvas" height="280" width="280" />
        <div className="row">
          <button
            onClick={() => {
              props.clearCanvas(props.context);
            }}
          >
            clear
          </button>
          <button
            onClick={() => {
              if (!stack.length) return;
              if (!undoing) {
                undoing = true;
                stack.pop();
              }
              context.putImageData(stack.pop(), 0, 0);
            }}
          >
            Undo
          </button>
        </div>
      </div>
    );
  };

export default Canvas;
