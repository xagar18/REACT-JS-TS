const Button = ({ value, func }) => {
  return (
    <div>
      <button
        onClick={func}
        className="bg-gray-600 text-xl px-6 rounded hover:bg-gray-700  cursor-pointer"
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
