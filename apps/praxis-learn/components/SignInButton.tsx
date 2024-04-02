"use client";
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

type Props = {};

const SignInButton = (props: Props) => {
  return (
    <Button
      variant="ghost"
      onClick={() => {
        signIn("google");
      }}
    >
      Sign In
    </Button>
  );
};

export default SignInButton;
