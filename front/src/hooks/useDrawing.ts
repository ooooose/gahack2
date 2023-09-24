import { useState } from 'react';

interface DrawingData {
  drawing: boolean;
  handleMouseDown: (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void;
  handleMouseUp: (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void;
  handleMouseMove: (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void;
}

const useDrawing = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
): DrawingData => {
  const [drawing, setDrawing] = useState(false);
  const canvas = canvasRef.current;
  const context = canvas?.getContext('2d');

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (context) {
      context.beginPath();
      context.moveTo(
        e.clientX - (canvasRef.current?.offsetLeft || 0),
        e.clientY - (canvasRef.current?.offsetTop || 0),
      );
      setDrawing(true);
    }
  };

  const handleMouseUp = () => {
    if (context) {
      context.closePath();
    }
    setDrawing(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (drawing && context) {
      context.lineTo(
        e.clientX - (canvasRef.current?.offsetLeft || 0),
        e.clientY - (canvasRef.current?.offsetTop || 0),
      );
      context.stroke();
    }
  };

  return {
    drawing,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  };
};

export default useDrawing;
