type CustomInputProps = {
  text: string;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput = ({ text, onChange, type }: CustomInputProps) => {
  return (
    <input
      type={type}
      className={`w-full text-[14px] bg-light-100 px-[16px] py-[12px] rounded-lg outline-neutral-300 font-medium text-light-200`}
      placeholder={text}
      onChange={onChange}
    />
  );
};

export default CustomInput;
