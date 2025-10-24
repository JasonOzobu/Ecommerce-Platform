// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

type CustomInputProps = {
  text: string;
  type: string;
  icon?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput = ({ icon, text, type, onChange }: CustomInputProps) => {
  return (
    <div className="flex w-full min-w-[230px] text-[14px] bg-light-100 px-[16px] py-[10px] rounded-lg outline-neutral-300 font-medium text-light-200">
      {icon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      )}
      <input
        type={type}
        className={`${icon && "ml-1.5"} flex-1 outline-none`}
        placeholder={text}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
