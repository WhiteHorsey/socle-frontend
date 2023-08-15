import React from "react";
import { IMAGES } from "../../constants";
import { RegisterForm } from "../../forms";

function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-5">
      <div className="flex flex-col items-center bg-white border w-full border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl">
        <img className="object-cover w-full h-96 md:h-auto md:w-96  rounded-tl-lg rounded-bl-lg" src={IMAGES.login} alt="image description" />
        <div className="flex flex-col justify-between p-14 leading-normal w-full">
          <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sign in to platform</h5>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
