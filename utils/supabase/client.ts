/**
 * Este archivo configura la conexión con Supabase para el lado del cliente (navegador).
 * Se usa en componentes que se ejecutan en el navegador del usuario y permite
 * realizar operaciones como autenticación, consultas a la base de datos y
 * suscripciones en tiempo real desde el navegador.
 */

import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
} 