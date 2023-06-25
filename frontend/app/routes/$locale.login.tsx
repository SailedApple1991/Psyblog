import { useState } from 'react';
import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect
} from '@remix-run/node';
import { Button, Label, TextInput } from 'flowbite-react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useLoaderData, Form } from '@remix-run/react';
import { useSiteContent} from '../components/SiteContentContext';
import authenticator from "~/services/auth.server";
import { commitSession, getSession, sessionStorage } from "~/services/session.server";


const strapiApiUrl = process.env.STRAPI_API_URL;

/**
 * called when the user hits button to login
 *
 * @param param0
 * @returns
 */
export const action: ActionFunction = async ({ request, context }) => {
  // call my authenticator
  console.log("test")
  let user = await authenticator.authenticate("form", request, {
    failureRedirect: "/login",
    throwOnError: true,
    context,
  });

    // manually get the session
    let session = await getSession(request.headers.get("cookie"));
    // and store the user data
    session.set(authenticator.sessionKey, user);
     // commit the session
  let headers = new Headers({ "Set-Cookie": await commitSession(session) });
  return redirect("/", { headers });
};

/**
 * get the cookie and see if there are any errors that were
 * generated when attempting to login
 *
 * @param param0
 * @returns
 */
export const loader: LoaderFunction = async ({ request }) => {

  await authenticator.isAuthenticated(request, {
    successRedirect : "/"
  });

  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  const error = session.get("sessionErrorKey");
  return json<any>({ error });


};




const Login = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);

  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

    const siteContent = useSiteContent();

  return (
    <div className="flex justify-center items-center h-screen bg-[#EDE7E0]">
      <div className="px-14 py-10 bg-white">
      <div className="max-w-md mx-auto ">
        <h1 className="text-3xl font-bold mb-2 text-left">Welcome!</h1>
        <p className="text-sm mb-4 text-left">Please Login.</p>
      <Form method="post">
        <div className="w-72 mb-4">
          <Label htmlFor="username" className="text-lg text-left">
            Username
          </Label>
          <TextInput
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            required
            className="text-sm border border-[#A18771]"
          />
        </div>

        <div className="w-full mb-6">
          <Label htmlFor="password" className="text-lg text-left">
            Password
          </Label>
          <div className="relative">
            <TextInput
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="text-sm  border border-[#A18771]"
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={handlePasswordToggle}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full mb-6">
          <Link to="/forgot-password" className="text-sm text-left">
            Forgot password?
          </Link>
          <Link to="/auto-login" className="text-sm text-right">
            Auto Login
          </Link>
        </div>

        <Button type='submit' color="" className="w-full mb-4 bg-[#A18771] text-lg text-white">
          {siteContent.loginButtonLabel}
        </Button>

        <Button color="secondary" className="w-full bg-[#EDE7E0] text-lg text-white" href={`/signup`}>
          {siteContent.registerButtonLabel}
        </Button>
        </Form>
      </div>
    
    </div>
    </div>
  );
};

export default Login;
