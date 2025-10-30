import { Link, useNavigate } from "react-router";
import CustomButton from "~/components/CustomButton";
import CustomInput from "~/components/CustomInput";

const ForgetPassword = () => {
  const navigate = useNavigate();

  return (
    <main>
      <header className="flex items-center justify-between w-full px-5 py-4 border-b-1 border-neutral-300">
        <Link to={"/"}> Pako store </Link>

        <div>
          <CustomButton text={"Sign In"} onClick={() => navigate("/sign-in")} />
        </div>
      </header>

      <section className="flex flex-col items-center justify-center size-full mt[10px] pt-[50px]">
        <h1 className="font-bold text-[23px] mb-4">Reset Password</h1>

        <div className="min-w-[380px] flex flex-col gap-[16px]">
          <span>
            <label className="text-[14px]">Email</label>
            <CustomInput text="Email address" type="email" />
          </span>
        </div>

        <CustomButton text={"Sign Up"} colored onClick={() => {}} />
      </section>
    </main>
  );
};

export default ForgetPassword;
