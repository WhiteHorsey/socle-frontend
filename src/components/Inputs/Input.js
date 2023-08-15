import { useState } from "react";

const Input = ({ field, form: { touched, errors }, ...props }) => {
  const { label, placeholder, multiple, email, password } = props;
  const showError = touched[field.name] && errors[field.name];

  // PASSWORD
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <div>
      <label className="block mb-2 font-medium text-gray-900 dark:text-white">{label}</label>
      <input
        type={email ? "email" : password ? "password" : "text"}
        placeholder={placeholder}
        className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600
        focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
        dark:focus:ring-blue-500 dark:focus:border-blue-500
        ${
          showError &&
          "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
        }`}
        {...field}
        {...props}
      />
      {showError && (
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
          <span class="font-medium">Oops!</span> {errors[field.name]}
        </p>
      )}

      {/* <pre>{JSON.stringify(meta)}</pre> */}
    </div>
  );
};

export default Input;
