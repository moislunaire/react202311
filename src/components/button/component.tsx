import { ButtonHTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';
import { useTheme } from '../contexts/theme/hooks';
import styles from './styles.module.css';

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  type = 'button',
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled'];
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={classnames(className, {
        [styles.light]: theme === 'light',
        [styles.dark]: theme === 'dark',
      })}
    >
      {children}
    </button>
  );
};
