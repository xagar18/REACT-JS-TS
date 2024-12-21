interface ButtonProps {
  text: string;
  changecol?: () => void;
}

function Button({ text, changecol }: ButtonProps) {
  return (
    <button
      className={`h-10 px-5 rounded-lg mt-5 ml-5 text-black border-2 border-black bg-${text}`}
      onClick={changecol}
    >
      {text}
    </button>
  );
}

export default Button;
