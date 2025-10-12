import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const token = (await cookies()).get("token")?.value;
    console.log(token);

    if (!token) {
      return NextResponse.json({ Authorization: false }, { status: 401 });
    }

    return NextResponse.json({ Authorization: true, token }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}
