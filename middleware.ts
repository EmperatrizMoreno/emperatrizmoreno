import { NextRequest, NextResponse } from "next/server";
import { getUser, updateSession } from "./utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  const protectedRoutesList = ["/dashboard"];
  const authRoutesList = ["/login"];
  const currentPath = new URL(request.url).pathname;

  const { data: { user } } = await getUser(request);

  // LOGS DE DEPURACIÓN
  console.log("[MIDDLEWARE] Ruta actual:", currentPath);
  console.log("[MIDDLEWARE] Usuario autenticado:", !!user);
  console.log("[MIDDLEWARE] protectedRoutesList:", protectedRoutesList);
  console.log("[MIDDLEWARE] authRoutesList:", authRoutesList);

  if (protectedRoutesList.includes(currentPath) && !user) {
    console.log("[MIDDLEWARE] Redirigiendo a /login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (authRoutesList.includes(currentPath) && user) {
    console.log("[MIDDLEWARE] Redirigiendo a /dashboard");
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  console.log("[MIDDLEWARE] updateSession ejecutado");
  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}; 