// app/services/auth.server.ts
import { Authenticator, AuthorizationError } from 'remix-auth';
import { FormStrategy } from 'remix-auth-form';
import { sessionStorage, User } from './session.server';
import { signIn } from '~/api/profiles.server';
import { LoginActionData } from '~/utils/types';
import  bcrypt  from 'bcryptjs';
// Create an instance of the authenticator, pass a Type, User,  with what
// strategies will return and will store in the session
const authenticator = new Authenticator<User | Error | null>(sessionStorage, {
  sessionKey: "sessionKey", // keep in sync
  sessionErrorKey: "sessionErrorKey", // keep in sync
});

// Tell the Authenticator to use the form strategy
authenticator.use(
  new FormStrategy(async ({ form }) => {

    // get the data from the form...
    let identifier = form.get('username') as string;
    let password = form.get('password') as string;

    // initiialize the user here

    // do some validation, errors are in the sessionErrorKey
    let { jwt, user, error } = await signIn({identifier, password});
    console.log("test")
    console.log({ jwt, user, error });
    debugger;
    var testUser = user as User;
    if(!user){
      throw new AuthorizationError();
    }
      // the type of this user must match the type you pass to the Authenticator
      // the strategy will automatically inherit the type if you instantiate
      // directly inside the `use` method
      return await Promise.resolve({ ...testUser });

  }),
);

export default authenticator