import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();

  if (!token) {
    return NextResponse.json("Token is required", { status: 400 });
  }

  (await cookies()).set({
    name: "token",
    value: token,
    // توکن از سمت سرور قابل خوندنه
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    // معتبر در کل سایت
    path: "/",
    // مدت زمان اعتبار توکن
    maxAge: 60 * 60 * 24,
  });
  return NextResponse.json({ IsSuccess: true });
}
