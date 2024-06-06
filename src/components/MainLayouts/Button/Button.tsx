import Style from "./Button.module.scss";

interface ButtonProps {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "primary-dark" | "secondary" | "secondary-dark" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
  children: React.ReactNode;
  onClick?: () => void;
  btnType?: "button" | "submit" | "reset";
}

export default function Button({ size = "md", variant = "primary", children, onClick, btnType = "button" }: ButtonProps) {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button type={btnType} onClick={onClick} className={`btn btn-${variant} btn-${size} ${Style["inno-btn"]}`}>
      {children}
    </button>
  );
}
