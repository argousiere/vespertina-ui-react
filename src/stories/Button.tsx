import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className="ves-btn"
      {...props}
    >
      {label}
    </button>
  );
};
