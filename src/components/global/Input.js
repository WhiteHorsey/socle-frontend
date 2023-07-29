import { useField } from "formik";

const Input = (props) => {
  const { label, placeholder, multiple, email, password } = props;
  const [field, meta] = useField(props);
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
        ${meta.touched && meta.error && "border-2 ring-red-600 border-red-600 focus:ring-red-600 focus:border-red-600"}`}
        {...field}
        // {...props}
      />
      {meta.touched && meta.error ? <div className="error">{meta?.error}</div> : null}
      {/* <pre>{JSON.stringify(meta)}</pre> */}
    </div>
  );
};

export default Input;
