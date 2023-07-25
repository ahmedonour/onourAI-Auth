// src/hooks.server.js
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import { redirect, error } from '@sveltejs/kit'

// src/hooks.server.js

export const handle = async ({ event, resolve }) => {
	event.locals.supabase = createSupabaseServerClient({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event
	});
  // protect requests to all routes that start with /protected-routes
  if (event.url.pathname.startsWith('/protected-routes')) {
    const session = await event.locals.getSession()
    if (!session) {
      // the user is not signed in
      throw redirect(303, '/')
    }
  }

  // protect POST requests to all routes that start with /protected-posts
  if (event.url.pathname.startsWith('/protected-posts') && event.request.method === 'POST') {
    const session = await event.locals.getSession()
    if (!session) {
      // the user is not signed in
      throw error(303, '/')
    }
  }

  return resolve(event)
}
