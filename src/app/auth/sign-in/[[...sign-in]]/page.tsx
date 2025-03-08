'use client'

import React from 'react'
import { SignIn } from '@clerk/nextjs'
import { ClerkLoading, SignedIn, useUser } from "@clerk/clerk-react";

type Props = {}

const SignInPage = (props: Props) => {
	const { user } = useUser();

  if(user) window.location.href = '/dashboard'

  return <SignIn />
}

export default SignInPage
