import React, { useState, ChangeEvent } from 'react';

interface SubnetMaskInputProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

const VALID_MASKS = [
  '255.0.0.0',
  '255.255.0.0',
  '255.255.255.0',
  '255.255.255.128',
  '255.255.255.192',
  '255.255.255.224',
  '255.255.255.240',
  '255.255.255.248',
  '255.255.255.252',
];

const SubnetMaskInput: React.FC<SubnetMaskInputProps> = ({
  value = '',
  onChange,
  disabled = false,
  className = ''
}) => {
  const [selectedMask, setSelectedMask] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setSelectedMask(newValue);
    onChange?.(newValue);
  };

  return (
    <select
      value={selectedMask}
      onChange={handleChange}
      disabled={disabled}
      className={`subnet-mask-input ${className}`}
    >
      <option value="">请选择子网掩码</option>
      {VALID_MASKS.map(mask => (
        <option key={mask} value={mask}>
          {mask}
        </option>
      ))}
    </select>
  );
};

export default SubnetMaskInput; 