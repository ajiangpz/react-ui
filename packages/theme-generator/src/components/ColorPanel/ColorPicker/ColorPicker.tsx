import React, { useState, useRef, useEffect } from "react";
import "../ColorPicker.css";

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
}

export default function ColorPicker({ value, onChange }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="color-picker" ref={pickerRef}>
      <div
        className="color-picker__preview"
        style={{ backgroundColor: value }}
        onClick={() => setIsOpen(!isOpen)}
      />
      <input
        type="text"
        className="color-picker__input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="#000000"
      />
      {isOpen && (
        <div className="color-picker__popup">
          <input
            type="color"
            value={value}
            onChange={handleColorChange}
            className="color-picker__native"
          />
        </div>
      )}
    </div>
  );
}

