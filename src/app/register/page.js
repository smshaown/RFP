import Image from "next/image";
import Link from "next/link";
import logo from "../../Image/logo-p.svg";
import img from "../../Image/summit-app.jpg";

const Page = () => {
    return (
        <div>
            <div className="h-screen flex items-center justify-center container">
            <div className="flex items-center">
            
                <div className="md:w-1/2 px-8 md:px-16">
                 <div className="flex flex-col mb-5 justify-center items-center">
                    <Image src={logo} alt="" />
                    <p className="text-[20px] font-medium md:-mt-[5px] text-[#1C3442]">Welcome! Login to your account</p>
                 </div>
               

                <form action="" className="flex flex-col gap-4">
                <div className="relative">
                                    <input autocomplete="off" id="username" name="username" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="user name" required />
                                    <label for="username" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">User name</label>
                        </div>
                        
                        <div className="relative">
                                    <input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" required />
                                    <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                        </div>
						<div className="relative">
							<input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" required />
							<label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
						<div className="relative">
							<input autocomplete="off" id="confirm-password" name="confirm-password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Confirm password" required />
							<label for="confirm-password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Confirm Password</label>
						</div>
						<div className="">                            
							<button className="bg-primaryColor text-white text-sm rounded-md px-2.5 font-bold py-1 uppercase ">Sign Up</button>
						</div>
                </form>

                <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                    <hr className="border-gray-400" />
                    <p className="text-center text-sm">OR</p>
                    <hr className="border-gray-400" />
                </div>

                <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                    <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                    </svg>
                    Register with Google
                </button>

                <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                    <p>Already have an account?</p>
                    <Link href="/Login" className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Login</Link>
                </div>
                </div>

                <div className="md:block hidden w-1/2">
                 <Image src={img} className="rounded-2xl"  alt="" />
                </div>
            </div>
         </div>
        </div>
    );
};

export default Page;