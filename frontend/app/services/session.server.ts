// app/services/session.server.ts
import { createCookieSessionStorage, redirect } from '@remix-run/node';
import { LoginResponse } from '~/utils/types';

// export the whole sessionStorage object
export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '_session', // use any name you want here
    sameSite: 'lax', // this helps with CSRF
    path: '/', // remember to add this so the cookie will work in all routes
    httpOnly: true, // for security reasons, make this cookie http only
    //secrets: ['s3cr3t'], // replace this with an actual secret
    secure: process.env.NODE_ENV === 'production', // enable this in prod only
  },
});

// you can also export the methods individually for your own usage
export let { getSession, commitSession, destroySession } = sessionStorage;

// define the user model
export type User = {
  name: string;
  email: string;
};

// fucntion to save user data to session
export const createUserSession = async (userData: LoginResponse, redirectTo: string) => {
  const session = await getSession()
  session.set("userData", userData);

  console.log({ session });

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  })
}

// get cookies from request
const getUserSession = (request: Request) => {
  return getSession(request.headers.get("Cookie"))
}

// function to remove user data from session, logging user out
export const logout = async (request: Request) => {
  const session = await getUserSession(request);

  return redirect("/sign-in", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  })
}