/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WTy8OoDaikx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage(props: any) {
  const { loginData } = props;
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const email = "admin@gmail.com";
  // const password = "helloworld";
  const[data , setData] = useState({});

  useEffect(()=>{
    const userRoles = loginData?.find((element: any) => {
      element?.role === "Admin" || "Government"
      return element
    });
    setData(userRoles);
  },[loginData])

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    // if (formData.email === data?.email && formData.password === data?.password) {
    //   router.push("/dashboard");
    // } else {
    //   alert("inavlid email or password");
    // }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div
      key="1"
      className="grid w-full min-h-screen grid-cols-1 lg:grid-cols-2"
    >
      <div className="flex items-center justify-center bg-gray-100 p-8 dark:bg-gray-800">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Pothole Reporting</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Report potholes in your area and help improve the roads.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="example@email.com"
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link className="text-sm font-medium underline" href="#">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                required
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <Button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              type="submit"
            >
              Login
            </Button>
          </form>
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400">
              Don&apos;t have an account?
              <Link
                className="font-medium underline ml-1"
                href="/auth/register"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden items-center justify-center bg-gray-100 p-8 lg:flex dark:bg-gray-800">
        <Image
          alt="Pothole Reporting"
          className="max-h-[600px] w-full max-w-[800px] object-contain"
          height="600"
          src="/pana-signin.svg"
          width="800"
        />
      </div>
    </div>
  );
}
