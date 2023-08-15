import { Formik, Form, Field } from "formik";
import { Input, Button, PasswordInput, EmailInput } from "../../components";
import { registerInitialValues, registerFormSchema } from "../validators/AuthValidator";
import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <Formik enableReinitialize initialValues={registerInitialValues} validationSchema={registerFormSchema} onSubmit={async (values) => {}}>
      {({ values, setFieldValue, isSubmitting }) => (
        <Form className="space-y-4">
          <Field name="email" component={EmailInput} />
          <Field name="password" component={PasswordInput} />
          <Field name="confirmPassword" component={PasswordInput} />
          <div className="flex items-center justify-between">
            <div></div>
            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
              Forgot password?
            </a>
          </div>
          <Button text="Sign in" />
          <div className=" text-sm">
            <span className="text-gray-500 dark:text-gray-300">Already have an account?</span>
            <Link to="/login" className="ml-2 underline hover:text-primary-500">
              Sign in Now !
            </Link>
          </div>
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
        </Form>
      )}
    </Formik>
  );
}

export default RegisterForm;
