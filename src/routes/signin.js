import {serialize} from 'cookie';
import Session from '../services/session';
import User from '../services/user';

/** @type {import('../../.svelte-kit/types/src/routes/signin').RequestHandler} */
export async function post({request}) {
    const formData = Object.fromEntries((await request.formData()).entries());

    return User.firebaseSignIn(formData.username, formData.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      const id = Session.create({username:user.email});
      return {
              status: 303,//See other
              headers: {
                'Set-Cookie': serialize('session-id', id, {
                  path: '/',
                  httpOnly: true,
                  sameSite: 'strict',
                  maxAge: 60 * 60,
                }),
                location: `/`
              }
          };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
            status: 401,
            body: 'Incorrect username or password'
          };
        }
    );
}


    //   const id = Session.create(User.get(formData.username));
    //   return {
    //       status: 303,//See other
    //       headers: {
    //         'Set-Cookie': serialize('session-id', id, {
    //           path: '/',
    //           httpOnly: true,
    //           sameSite: 'strict',
    //           maxAge: 60 * 60,
    //         }),
    //         location: `/`
    //       }
    //   };
    // } else {
    //   return {
    //     status: 401,
    //     body: 'Incorrect username or password'
    //   };
    // }
