import { redirect } from "next/navigation";

export default async function RootPage() {
  const session = false;
  if (!session) redirect("/login");
  redirect("/dashboard");
  return null;
}
