import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ text, onClick }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {text}
  </button>
);
