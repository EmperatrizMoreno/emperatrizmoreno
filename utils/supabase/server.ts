/**
 * Este archivo configura la conexión con Supabase para el lado del servidor.
 * Se usa en componentes y rutas que se ejecutan en el servidor de Next.js.
 * Maneja las cookies de sesión y permite realizar operaciones seguras
 * como autenticación y consultas a la base de datos desde el servidor.
 */

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { CookieOptions } from '@supabase/ssr'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll().map((cookie) => ({
            name: cookie.name,
            value: cookie.value
          }))
        },
        setAll(cookies: { name: string; value: string; options?: CookieOptions }[]) {
          cookies.forEach((cookie) => {
            try {
              cookieStore.set({ 
                name: cookie.name, 
                value: cookie.value, 
                ...cookie.options 
              })
            } catch (error) {
              // Manejar el error de cookies
            }
          })
        }
      },
    }
  )
} 