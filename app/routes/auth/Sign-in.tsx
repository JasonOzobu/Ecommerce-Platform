import { Link, useNavigate } from "react-router";
import CustomButton from "~/components/CustomButton";
import CustomInput from "~/components/CustomInput";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <main>
      <header className="flex items-center justify-between w-full px-5 py-4 border-b-1 border-neutral-300">
        <Link to={"/"}> Pako store </Link>

        <div>
          <CustomButton text={"Sign Up"} onClick={() => navigate("/sign-up")} />
        </div>
      </header>

      <section className="flex flex-col items-center justify-center size-full mt[10px] pt-[60px]">
        <h1 className="font-bold text-[23px] mb-4">Welcome back</h1>

        <div className="min-w-[400px] flex flex-col gap-[16px]">
          <span>
            <label className="text-[14px]">Email</label>
            <CustomInput text="Email address" type="email" />
          </span>

          <span>
            <label className="text-[14px]">password</label>
            <CustomInput text="Password" type="password" />
          </span>

          <p className="text-[14px] text-light-200">Forgot password?</p>

          <CustomButton text={"Log In"} colored onClick={() => {}} />
        </div>
      </section>
    </main>
  );
};

export default SignIn;
