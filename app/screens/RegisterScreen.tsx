import React, { useState } from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
// import usersApi from "../api/users";
// import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
// import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import tailwind from "tailwind-rn";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
  // const registerApi = useApi(usersApi.register);
  // const loginApi = useApi(authApi.login);
  // const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo: { email: string, name: string, password: string }) => {
    // const result = await registerApi.request(userInfo);

    // if (!result.ok) {
    //   if (result.data) setError(result.data.error);
    //   else {
    //     setError("An unexpected error occurred.");
    //     console.log(result);
    //   }
    //   return;
    // }

    // const { data: authToken } = await loginApi.request(
    //   userInfo.email,
    //   userInfo.password
    // );
    // auth.logIn(authToken);
    console.log('registering....');
    console.log(userInfo);
  };

  return (
    <>
      {/* <ActivityIndicator visible={true} /> */}
      <Screen style={tailwind('p-4')}>
        <Form
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={!!error} />
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" style={tailwind('mt-6')} />
        </Form>
      </Screen>
    </>
  );
}
