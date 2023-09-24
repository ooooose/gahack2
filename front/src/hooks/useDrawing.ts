import { useState } from 'react';

interface DrawingData {
  drawing: boolean;
  context: CanvasRenderingContext2D | null;
  handleMouseDown: (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void
  handleMouseUp: (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void
  handleMouseMove: (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void
}

const useDrawing = (canvasRef: React.RefObject<HTMLCanvasElement>): DrawingData => {
  const [drawing, setDrawing] = useState(false);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (context) {
      context.beginPath();
      context.moveTo(
        e.clientX - (canvasRef.current?.offsetLeft || 0),
        e.clientY - (canvasRef.current?.offsetTop || 0)
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
        e.clientY - (canvasRef.current?.offsetTop || 0)
      );
      context.stroke();
    }
  };

  return {
    drawing,
    context,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  };
};

export default useDrawing;
