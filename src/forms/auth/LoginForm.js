import { Formik, Form, Field } from "formik";
import { Input, Button, PasswordInput, EmailInput } from "../../components";
import { loginInitialValues, loginFormSchema } from "../validators/AuthValidator";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <Formik enableReinitialize initialValues={loginInitialValues} validationSchema={loginFormSchema} onSubmit={async (values) => {}}>
      {({ values, setFieldValue, isSubmitting }) => (
        <Form className="space-y-4">
          <Field name="email" component={EmailInput} />
          <Field name="password" component={PasswordInput} />
          <div className="flex items-center justify-between">
            <div></div>
            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
              Forgot password?
            </a>
          </div>
          <Button text="Sign in" />
          <div className=" text-sm">
            <span className="text-gray-500 dark:text-gray-300">Don't have an account?</span>
            <Link to="/register" className="ml-2 underline hover:text-primary-500">
              Create Account Now!
            </Link>
          </div>
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
