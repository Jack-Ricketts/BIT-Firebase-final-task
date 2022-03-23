import {parse, serialize} from 'cookie';
import Session from '../services/session';
import User from '../services/user';

/** @type {import('../../.svelte-kit/types/src/routes/signout').RequestHandler} */
export async function get({request}) {
    const cookies = parse(request.headers.get("cookie") || '');
    const id = cookies["session-id"];
    Session.remove(id);
    return {
        status: 303,//See other
        headers: {
            'Set-Cookie': serialize('session-id', '', {
              path: '/',
              expires: new Date(0),
            }),
            location: `/signin`
        }
    };
}