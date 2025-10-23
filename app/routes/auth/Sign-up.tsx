import { Link, useNavigate } from "react-router";
import CustomButton from "~/components/CustomButton";
import CustomInput from "~/components/CustomInput";

const SignUp = () => {
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
        <h1 className="font-bold text-[23px] mb-4">Create your account</h1>

        <div className="min-w-[380px] flex flex-col gap-[16px]">
          <span>
            <label className="text-[14px]">Name</label>
            <CustomInput text="Username" type="text" />
          </span>

          <span>
            <label className="text-[14px]">Email</label>
            <CustomInput text="Email address" type="email" />
          </span>

          <span>
            <label className="text-[14px]">Password</label>
            <CustomInput text="Password" type="password" />
          </span>

          <span>
            <label className="text-[14px]">Confirm Password</label>
            <CustomInput text="Confirm Password" type="password" />
          </span>

          <p className="text-[14px] text-light-200">Forgot password?</p>

          <CustomButton text={"Sign Up"} colored onClick={() => {}} />
        </div>

        <p className="text-[14px] text-light-200 mt-3.5">
          By creating an account, you agree to Pako Stores's Terms of Use and
          Privacy Policy.
        </p>
      </section>
    </main>
  );
};

export default SignUp;
