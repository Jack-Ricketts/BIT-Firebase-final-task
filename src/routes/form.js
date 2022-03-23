/** @type {import('../../.svelte-kit/types/src/routes/form').RequestHandler} */
export async function post({request}) {
    const formData = Object.fromEntries((await request.formData()).entries());
    return {
         body: formData
    }
}