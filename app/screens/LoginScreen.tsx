import React, { useState } from "react";
import { Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
// import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import tailwind from "tailwind-rn";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }: { email: string, password: string }) => {
    console.log('logging in...');
    // const result = await authApi.login(email, password);
    // if (!result.ok) return setLoginFailed(true);
    // setLoginFailed(false);
    // auth.logIn(result.data);
  };

  return (
    <Screen style={tailwind('p-4')}>
      <Image style={tailwind('h-24 w-24 self-center mt-2 mb-8')} source={require("../assets/logo-red.png")} />

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
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
        <SubmitButton title="Login" style={tailwind('mt-6')} />
      </Form>
    </Screen>
  );
}
