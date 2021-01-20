import React from "react";
import { Formik, FormikHelpers, FormikProps, FormikValues } from "formik";

export default function Form(
  { initialValues, onSubmit, validationSchema, children }:
  {
    initialValues: FormikValues,
    onSubmit: (values: any, formikHelpers: FormikHelpers<FormikValues>) => void | Promise<any>,
    validationSchema: any | (() => any), children: ((props: FormikProps<FormikValues>) => React.ReactNode) | React.ReactNode
  }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}
