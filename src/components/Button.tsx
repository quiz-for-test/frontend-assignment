interface ButtonPros {
  name: string;
  onClick: () => void;
}
const Button = ({ name, onClick }: ButtonPros) => {
  return (
    <button
      className="border border-[#CCC] text-black bg-white px-4 py-2  w-full my-1"
      onClick={onClick}
      data-testid="button"
    >
      {name}
    </button>
  );
};

export default Button;
