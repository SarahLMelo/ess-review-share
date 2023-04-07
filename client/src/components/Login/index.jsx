import React from "react";

const LoginBox = () => {

  return (
    <div class="h-screen flex flex-col justify-center items-center">
      <img src=".../../assets/logo.svg" alt="Logo"/>
      <div class="bg-[#77728D] w-1/4 h-4/6 rounded-lg flex flex-col justify-around items-center">

        <div className="flex flex-col items-center">
          <h1 class="text-4xl text-white font-lato">
            LOGIN
          </h1>
          
          <h2 class="text-white"
          >Do not have an account? <a href="test" class="text-[#F4A4A4]"> Sign Up</a>
          </h2>
        </div>

        <form class="w-full h-1/2 flex flex-col items-center justify-around">
          <div class="w-full h-4/6 flex flex-col items-center justify-around">
            <input type="text" placeholder="Email" class="w-2/3"/>
            <input type="text" placeholder="Password" class="w-2/3"/>
          </div>
          
          <input type="submit" value="Sign In" class="bg-[#F4A4A4] w-1/2 h-1/5 text-white rounded-lg"/>
        </form>

        <a href="test" class="text-white underline underline-offset-1">Forget Password?</a>
      </div>

    </div>
  );
};

export default LoginBox;
