import { url } from "inspector";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // 1. گرفتن توکن از کوکی
  const token = req.cookies.get("token")?.value;
  console.log(token);

  // 2. مسیر فعلی
  const { pathname } = req.nextUrl;

  // 3. صفحاتی که نیاز به احراز هویت ندارن
  const publicPaths = ["/login", "/changepass", "/api/:path*"];

  // 4. اگر توکن نباشه و مسیر محافظت‌شده باشه
  const isPublicPath = publicPaths.some((path) => {
    // console.log("path :", path);
    // console.log("pathname:", pathname);

    return pathname.startsWith(path);
  });

  if (pathname === "/") {
    if (token) {
      console.log("middleware:user has token,redirecting to dashboard");
      return NextResponse.redirect(new URL("/dashboard", req.url));
    } else {
      console.log("middleware:no token,redirecting to login");
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  if (!token && !isPublicPath) {
    console.log("middleware : no token or no public path ");
    // هدایت به صفحه‌ی لاگین
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (!token) {
    console.log("middleware : token expired ");
    // هدایت به صفحه‌ی لاگین
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 5. اگر لاگین کرده و می‌ره به /login، ریدایرکتش کن به داشبورد
  if (token && pathname.startsWith("/login")) {
    console.log("middleware :there is a token and  it is a public path");

    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  console.log("middleware : there is a token so keep going");
  // 6. در غیر این صورت ادامه بده
  return NextResponse.next();
}

// 🔒 تعیین مسیرهایی که middleware روی آن‌ها فعال باشد
export const config = {
  matcher: [
    /*
      همه‌ی مسیرهایی که باید بررسی بشن.
      به‌طور مثال:
      - همه‌ی مسیرهای dashboard
      - api های خاص
    */
    "/dashboard/:path*",
    "/",
    "/dashboard",
    // "/api/:path*"
  ],
};
