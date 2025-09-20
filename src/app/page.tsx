import { redirect } from "next/navigation";

export default async function RootPage() {
  const session = true;
  if (!session) redirect("/login");
  redirect("/dashboard");
  return null;
}
