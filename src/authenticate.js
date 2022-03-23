export function sessionAuthenticate(session) {
    if (!session?.user) {
        return {
                status: 303,
                redirect: "/signin"
            }
        }
    return {
        props: {
            user: session.user
        }
    };
}