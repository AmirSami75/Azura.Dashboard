import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { token } = await req.json();

  if (!token) {
    return new Response("Token is required", { status: 400 });
  }

  (await cookies()).set("token", token, {
    // توکن از سمت سرور قابل خوندنه
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    // معتبر در کل سایت
    path: "/",
    // مدت زمان اعتبار توکن
    maxAge: 60 * 60 * 24,
  });
  return Response.json({ success: true });
}
