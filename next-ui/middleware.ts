import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = "/1page";
  // Check if the user is visiting the base URL "/"
  if (request.nextUrl.pathname === '/') {
    
    // TO CHOOSE YOUR DEFAULT UI
    const defaultApp = url; 
    
    return NextResponse.redirect(new URL(defaultApp, request.url))
  }
}

// Ensure middleware only runs on the home path
export const config = {
  matcher: '/',
}