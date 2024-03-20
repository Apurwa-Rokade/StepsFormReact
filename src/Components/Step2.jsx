import React, { useContext } from "react";
import { multistepContext } from "../Context/StepContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Step2() {
  const { setSteps, userData, setuserData } = useContext(multistepContext);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First name is required")
      .matches(/^[a-zA-Z]+$/, "First name must contain only letters")
      .max(35, "First name must be at most 35 characters long"),
    lastName: Yup.string()
      .required("Last name is required")
      .matches(/^[a-zA-Z]+$/, "Last name must contain only letters")
      .max(35, "Last name must be at most 35 characters long"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const handleSubmit = (values) => {
    const { firstName, lastName, email } = values;
    setuserData({
      ...userData,
      firstname: firstName,
      lastname: lastName,
      email: email,
    });
    setSteps(3);
  };

  return (
    <div>
      <h2>Step 2: Personal Information</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="firstName">First Name</label>
              <Field type="text" id="firstName" name="firstName" />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-field">
              <label htmlFor="lastName">Last Name</label>
              <Field type="text" id="lastName" name="lastName" />
              <ErrorMessage
                name="lastName"
                component="div"
                className="error-message"
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="email">Email Address</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>
          <button type="submit" className="next">
            Next
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Step2;
