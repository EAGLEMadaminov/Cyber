"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { newAxiosInstance } from "../../../utils/libs/axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";
import axios from "axios";
import Gmail from "../../../images/EmailIcon.svg";
import PasswordIcon from "../../../images/PasswordIcon.svg";
import OpenEye from "../../../images/OpenEye.svg";
import CloseEye from "../../../images/CloseEye.svg";

type Inputs = {
  username: string;
  password: string;
};

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [gmailError, setGmailError] = useState("");
  const router = useRouter();

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    try {
      const { data: register } = await newAxiosInstance.post(
        "/auth/login",
        data
      );
      if (register) {
        toast.success("Your sign in successfully");
        localStorage.setItem("access_token", register.token);
        localStorage.setItem("refresh_token", register.refreshToken);
        router.push("/dashboard");
        setGmailError("");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.message;
        toast.error(errorMessage);
        if (error.response?.status === 401) {
          try {
            const refreshToken = localStorage.getItem("refresh_token");
            if (refreshToken) {
              const { data: refreshData } = await newAxiosInstance.post(
                "/auth/refresh",
                {
                  refreshToken: refreshToken,
                },
                {
                  withCredentials: true,
                }
              );
              localStorage.setItem("access_token", refreshData.token);
              localStorage.setItem("refresh_token", refreshData.refreshToken);

              const { data: retryRegister } = await newAxiosInstance.post(
                "/auth/login",
                data
              );
              if (retryRegister) {
                toast.success("Your signed in succesfully after token refresh");
                router.push("/dashboard");
              }
            } else {
              toast.error("Session expired. Please log in again.");
            }
          } catch (refreshError) {
            toast.error("Failed to refresh token. Please log in again.");
          }
        } else {
          toast.error(errorMessage);
        }
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };
  return (
    <>
      <div className="flex mx-auto justify-center sm:justify-between">
        <Image
          width={400}
          height={600}
          src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
          alt="sign in page image "
          className="w-0 object-cover sm:w-[50%] h-[100vh]"
        />
        <div className="flex items-center w-[50%] mt-10 flex-col justify-center">
          <h1 className="text-2xl font-semibold ">Sign In</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" w-[400px] mx-auto"
          >
            <div>
              <label htmlFor="username">
                {" "}
                Username <span className="text-rose-500">*</span>
              </label>
              <div className="flex items-center mb-2 my-1  px-3 border rounded-lg">
                <Image src={Gmail} alt="gmail logo" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  className=" w-full placeholder:text-[#9BB8CF] border-none focus-visible:ring-offset-0 focus-visible:ring-0 p-2 px-3 rounded-lg outline-none"
                  {...register("username")}
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
                <Image
                  width={24}
                  height={24}
                  src={PasswordIcon}
                  alt="pasword icon"
                />
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
                    <Image
                      width={24}
                      height={24}
                      src={OpenEye}
                      alt="open eye icon"
                    />
                  ) : (
                    <Image src={CloseEye} alt="close eye icon" />
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
        </div>
      </div>
    </>
  );
};

export default SignInPage;
