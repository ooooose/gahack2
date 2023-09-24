import React, { useRef } from 'react';

interface DrawingProps {
  width: number;
  height: number;
  lineWidth: number;
  strokeColor: string;
  handleMouseDown: (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void
  handleMouseUp: (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void
  handleMouseMove: (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void
}
import useDrawing from '../../hooks/useDrawing';

const Canvas: React.FC<DrawingProps> = ({ 
  width, 
  height}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { handleMouseDown, handleMouseUp, handleMouseMove } = useDrawing(canvasRef);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ border: '1px solid black' }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    />
  );
};

export default Canvas;
