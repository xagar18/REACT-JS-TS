interface ButtonProps {
  text: string;
  changecol():  void;
}

function Button({ text, changecol }: ButtonProps) {
  return (
    <button
      className={"h-10 px-5 rounded-xl mt-5 ml-5 text-black border-[1px] border-black "}
      onClick={changecol}
      style={{ backgroundColor: "white" }}
    >
      {text.toLocaleUpperCase()}
    </button>
  );
}

export default Button;
