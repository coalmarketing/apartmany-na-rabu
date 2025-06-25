import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Pokud je root path, přesměruj na českou verzi
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/cs', request.url));
  }
  
  // Zkontroluj, jestli pathname začíná s platným locale
  const localeMatch = pathname.match(/^\/(cs|en)(\/.*)?$/);
  if (!localeMatch && pathname !== '/') {
    // Pokud nezačíná s platným locale a není root, přesměruj na českou verzi
    return NextResponse.redirect(new URL(`/cs${pathname}`, request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - img/ (static images)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|img/).*)',
  ],
}; 