import { Formik, Form, Field } from "formik";
import { Input, Button } from "../../components";
import { loginInitialValues, loginFormSchema } from "../validators/AuthValidator";

const LoginForm = () => {
  return (
    <Formik enableReinitialize initialValues={loginInitialValues} validationSchema={loginFormSchema} onSubmit={async (values) => {}}>
      {({ values, setFieldValue, isSubmitting }) => (
        <Form className="space-y-4 md:space-y-6">
          <Input name="email" label="Email" placeholder="name@company.com" email />
          <Input name="password" label="Password" placeholder="••••••••" password />
          <Button text="Sign in" />
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
