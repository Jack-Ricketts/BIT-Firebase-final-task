import { base } from '$app/paths';
import { parse, serialize } from 'cookie';
import Session from './services/session';

let initialized = false;

const anonymousRoutes = [
    null,
    'signin'
]

//event: https://kit.svelte.dev/docs/types#additional-types-requestevent
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    if(!initialized) initialize(); 
    const cookies = parse(event.request.headers.get("cookie") || '');
    const session = Session.get(cookies["session-id"]);
    if(session) {
        event.locals["user"] = session;
    }
    const response = await resolve(event);
    return response;
}

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(request) {
    return request?.locals?.["user"] ? {user: request.locals["user"]} : {};
}

function initialize() {
    initialized = true;
}