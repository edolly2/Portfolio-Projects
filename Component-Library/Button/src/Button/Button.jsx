import './Button.css';

const Button = ({ type, color, text }) => {
  return (
    <button type={type} className={`${color} btn`}>
      {text}
    </button>
  );
};

export default Button;
