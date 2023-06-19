import { useEffect, useRef, useState } from 'react';

const App = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  useEffect(() => {
    // canvas render
    const canvas = canvasRef.current;
    canvas.height = window.innerHeight * 2;
    canvas.width = window.innerWidth * 2;
    canvas.style.height = `${window.innerHeight}px`;
    canvas.style.width = `${window.innerWidth}px`;

    // canvas context
    const context = canvas.getContext('2d');
    context.scale(2, 2);
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);
  const startDrawing = ({ clientX, clientY }) => {
    contextRef.current.beginPath();
    contextRef.current.moveTo(clientX, clientY);
    setIsDrawing(true);
  };
  const stopDrwaing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };
  const draw = ({ clientX, clientY }) => {
    if (!isDrawing) return;
    contextRef.current.lineTo(clientX, clientY);
    contextRef.current.stroke();
  };
  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={stopDrwaing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
};
export default App;
