import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
    const name = req.cookies.get('name');

    // if (!name && req.url !== '/identify') {
    //     return NextResponse.redirect(new URL('/identify', req.url));
    // }
    const url = req.nextUrl.clone();
    const path = url.pathname;

    if (req.nextUrl.pathname.startsWith("/_next")) {
        return NextResponse.next();
        }

    if (!name && path !== '/identify') {
        return NextResponse.redirect(new URL('/identify', req.url));
    }

    return NextResponse.next();
}
