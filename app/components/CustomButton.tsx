import type { MouseEventHandler } from "react";

type CustomButtonProps = {
  text: string;
  colored?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const CustomButton = ({ text, colored, onClick }: CustomButtonProps) => {
  return (
    <button
      className={`px-3 py-2 text-[14px] bg-light-100 rounded-[8px] cursor-pointer font-medium ${colored && "text-white bg-light-500 py-3"}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
