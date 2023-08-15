const Button = ({ text, isLoading }) => {
  return (
    <button
      type="submit"
      className="w-full text-white bg-primary-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    >
      {text}
    </button>
  );
};

export default Button;
