import React from "react";
import { useFormikContext } from "formik";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

export default function FormField({ name, width, ...otherProps }:
{
  name: string,
  width?: number,
  autoCapitalize?: string,
  autoCorrect?: boolean,
  icon?: string,
  keyboardType?: string,
  placeholder?: string,
  secureTextEntry?: boolean,
  textContentType?: string,
}) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext() as any;

  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text: string) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
