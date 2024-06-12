import Style from "./Button.module.scss";

interface ButtonProps {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "primary-dark" | "secondary" | "secondary-dark" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
  children: React.ReactNode;
  onClick?: () => void;
  buttonType?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ size = "md", variant = "primary", children, onClick, buttonType = "button" }) => {
  const classNames = `${Style["inno-btn"]} ${Style["inno-btn-" + variant]} ${Style["inno-btn-" + size]}`;

  return (
    <button type={buttonType} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
