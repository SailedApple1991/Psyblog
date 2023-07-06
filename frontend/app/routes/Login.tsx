'use client';

import { useState } from 'react';
import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect
} from '@remix-run/node';
import { Button, Label, TextInput, Modal, Checkbox, Toast } from 'flowbite-react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useLoaderData, Form, useActionData } from '@remix-run/react';
import { useSiteContent} from '../components/SiteContentContext';
import authenticator from "~/services/auth.server";
import { commitSession, getSession, sessionStorage } from "~/services/session.server";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";


interface PopUpElementsProps {
  openModal: string | undefined;
  setOpenModal: React.Dispatch<React.SetStateAction<string | undefined>>;
}
/**
 * called when the user hits button to login
 *
 * @param param0
 * @returns
 */
export const action: ActionFunction = async ({ request, context }) => {
  let user;
  let loginSuccessful = false;

  try {
    // call my authenticator
    user = await authenticator.authenticate("form", request, {
      throwOnError: true,
      context,
    });

    // Login successful
    loginSuccessful = true;
    
    // manually get the session
    let session = await getSession(request.headers.get("cookie"));
    // and store the user data
    session.set(authenticator.sessionKey, user);
    // commit the session
    let headers = new Headers({ "Set-Cookie": await commitSession(session) });

    //return redirect("/", { headers });
    return json({message: 'Login Success', loginSuccessful}, {status : 200})
  } catch (error) {
    // Login failed
    loginSuccessful = false;
    // Handle the failed login case, e.g., log the error, set appropriate response status
    console.error(error);
    return json({ message: 'Login failed', loginSuccessful }, { status: 401 });
  } finally {
    // Add the login result to the request context for later use
      // Add the login result to the session for later use
      let session = await getSession(request.headers.get("cookie"));
      session.set("loginSuccessful", loginSuccessful);
  }
    // Call handleLoginSuccess here

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




export default function Login({ openModal, setOpenModal }: PopUpElementsProps) {
  const loaderData = useLoaderData();
  const data = useActionData<typeof action>();
  console.log(loaderData);
  console.log(data)
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
 // const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };
  
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginSuccess = () => {
    if (data) {
      const { loginSuccessful } = data;
  
      if (loginSuccessful) {
        setOpenModal(undefined);
      } else {
        setLoginError('Invalid username or password');
      }
    } else {
      setLoginError('An error occurred during login');
    }
  };
    const siteContent = useSiteContent();

  return (
    <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
     <Modal.Header />
      <Modal.Body>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold mb-2 text-left">Welcome!</h1>
        <p className="text-sm mb-4 text-left">Please Login.</p>
        {loginError && (
            <Toast>
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
                <ExclamationTriangleIcon className="h-5 w-5" />
              </div>
              <div className="ml-3 text-sm font-normal">{loginError}</div>
              <Toast.Toggle />
            </Toast>
          )}
      <Form action="/login"method="post" onSubmit = {handleLoginSuccess}>
        <div>
              <div className="mb-2 block">
              <Label htmlFor="username"  value="Username" />
              </div>
              <TextInput
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            required
            className="text-sm border border-[#A18771]"
          />
            </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
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
          <div className="flex justify-between mb-6">
              <div className="flex items-center gap-2">
                <Link to="/forgot-password" className="text-sm text-left">
                  Forgot password?
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="/auto-login">Auto Login</Label>
              </div>
           </div>

        <Button type='submit' color="" className="w-full mb-4 bg-[#A18771] text-lg text-white">
          {siteContent.loginButtonLabel}
        </Button>

        <Button color="secondary" className="w-full bg-[#EDE7E0] text-lg text-white" href={`/signup`}>
          {siteContent.registerButtonLabel}
        </Button>
        </Form>
    
    </div>
    </Modal.Body>
    </Modal>

  );
};
