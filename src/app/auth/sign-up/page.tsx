"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosIntancefrom } from "../../../utils/libs/axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type Inputs = {
  fullname: string;
  email: string;
  password: string;
  password2: string;
};

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [gmailError, setGmailError] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const { data: register } = await axiosIntancefrom.post(
        "/auth/sign-up",
        data
      );
      if (register) {
        toast.success("Your sign up successfully");
        router.push("/auth/sign-in");
        console.log(register);
      }
    } catch (error) {
      toast.error("This gmail already sign up");
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex justify-center sm:justify-between">
        <img
          src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
          alt=""
          className="w-0 object-cover sm:w-[50%] h-[100vh]"
        />
        <div className="flex items-center w-[50%] mt-10 flex-col justify-center">
          <h1 className="text-2xl font-semibold ">Registration</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" w-[400px] mx-auto"
          >
            <div>
              <label htmlFor="name">
                {" "}
                Name <span className="text-rose-500">*</span>
              </label>
              <div className="flex items-center my-1 mb-2 border rounded-lg px-3">
                <span className="text-[#9BB8CF]">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.42822 12.625C2.42228 10.9669 4.60093 9.83214 7.99993 9.83214C11.3989 9.83214 13.5776 10.9669 14.5716 12.625M10.6999 4.075C10.6999 5.56617 9.4911 6.775 7.99993 6.775C6.50876 6.775 5.29993 5.56617 5.29993 4.075C5.29993 2.58383 6.50876 1.375 7.99993 1.375C9.4911 1.375 10.6999 2.58383 10.6999 4.075Z"
                      stroke="#9BB8CF"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <input
                  placeholder="Enter your name"
                  id="name"
                  className="placeholder:text-[#9BB8CF] p-2 active:bg-transparent focus-visible:ring-offset-0 focus-visible:ring-0  border-none active:border-none outline-none focus:outline-none focus:border-transparent"
                  type="text"
                  {...register("fullname")}
                />
              </div>
              <label htmlFor="email">
                {" "}
                Email <span className="text-rose-500">*</span>
              </label>
              <div className="flex items-center mb-2 my-1  px-3 border rounded-lg">
                <span>
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.51563 2.0625L7.51973 5.65519C7.80867 5.86263 8.19133 5.86263 8.48027 5.65519L13.4844 2.0625M2.9375 11.25H13.0625C13.9945 11.25 14.75 10.4665 14.75 9.5V2.5C14.75 1.5335 13.9945 0.75 13.0625 0.75H2.9375C2.00552 0.75 1.25 1.5335 1.25 2.5V9.5C1.25 10.4665 2.00552 11.25 2.9375 11.25Z"
                      stroke="#9BB8CF"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className=" w-full placeholder:text-[#9BB8CF] border-none focus-visible:ring-offset-0 focus-visible:ring-0 p-2 px-3 rounded-lg outline-none"
                  {...register("email")}
                />
              </div>

              {gmailError ? (
                <p className="text-red-500 text-[12px]">{gmailError}</p>
              ) : (
                ""
              )}
              <label htmlFor="password">
                {" "}
                Password <span className="text-rose-500">*</span>
              </label>
              <div className="flex items-center mb-2 my-1 relative border rounded-lg px-3">
                <span className="text-[#004280]">
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.625 5.66667V5C2.625 2.78413 4.7994 1 7.5 1C10.2006 1 12.375 2.78413 12.375 5V5.66667M2.625 5.66667C1.73125 5.66667 1 6.26667 1 7V13.6667C1 14.4 1.73125 15 2.625 15H12.375C13.2688 15 14 14.4 14 13.6667V7C14 6.26667 13.2688 5.66667 12.375 5.66667M2.625 5.66667H12.375"
                      stroke="#9BB8CF"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <input
                  placeholder="Enter  password"
                  key="password"
                  id="password"
                  {...register("password")}
                  className="border-none p-2 placeholder:text-[#9BB8CF] focus-visible:ring-offset-0 focus-visible:ring-0 outline-none"
                  type={showPassword ? "text" : "password"}
                />
                <button
                  className="flex items-center absolute right-2 top-[13px]"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye-slash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                      <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                    </svg>
                  )}
                </button>
              </div>
              <label htmlFor="password2">
                {" "}
                Confirm password <span className="text-rose-500">*</span>
              </label>
              <div className="flex items-center my-1 relative border rounded-lg px-3">
                <span className="text-[#004280]">
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.625 5.66667V5C2.625 2.78413 4.7994 1 7.5 1C10.2006 1 12.375 2.78413 12.375 5V5.66667M2.625 5.66667C1.73125 5.66667 1 6.26667 1 7V13.6667C1 14.4 1.73125 15 2.625 15H12.375C13.2688 15 14 14.4 14 13.6667V7C14 6.26667 13.2688 5.66667 12.375 5.66667M2.625 5.66667H12.375"
                      stroke="#9BB8CF"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <input
                  placeholder="Enter confirm password"
                  className="border-none p-2 placeholder:text-[#9BB8CF] focus-visible:ring-offset-0 focus-visible:ring-0 outline-none"
                  id="password2"
                  {...register("password2")}
                  type={showConfirmPassword ? "text" : "password"}
                />
                <button
                  className="flex items-center absolute right-2 top-[13px] "
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {" "}
                  {!showConfirmPassword ? (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                      </svg>
                    </span>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye-slash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                      <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                    </svg>
                  )}
                </button>
              </div>

              <button
                type="submit"
                className="w-full p-[10px] px-[13px] hover:bg-primary/90 text-white rounded-[8px] mt-3 bg-[#004280]"
              >
                Submit
              </button>
            </div>
          </form>

          <p className="text-center mt-10 text-[14px] text-main">
            Does have already account ?{" "}
            <a className="text-blue-600" href="/auth/sign-in">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
