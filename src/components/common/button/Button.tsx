import React from 'react';

export type ButtonProps = {
  children?: React.ReactNode;
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: ButtonProps) => {
  const { children, ...buttonProps } = props;
  return <button {...buttonProps}>{children}</button>;
};

export default Button;
