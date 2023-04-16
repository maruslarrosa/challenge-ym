import styles from '../styles/button.module.css';

interface buttonType {
  text: string;
  label: string;
  disabled: boolean;
  click: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonComponent = (props: buttonType): JSX.Element => {
  const { text, label, disabled, click } = props;
  return (
    <button
      aria-label={label}
      onClick={click}
      disabled={disabled}
      className={styles.buttonPrimary}
    >
      <p className={styles.buttonTextPrimary}>{text.toUpperCase()}</p>
    </button>
  );
};
