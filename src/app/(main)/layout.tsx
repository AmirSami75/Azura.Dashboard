import Image from "next/image";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full w-full">
      {/* image */}
      <div className="relative h-full w-full xl:w-1/2">
        <Image
          src="/images/login-image.jpg"
          alt="background img"
          priority
          fill
          className="object-cover bg-left"
        />
      </div>
      {/* content */}
      <div className=" absolute inset-0 bg-primary-foreground/30 flex justify-center items-center h-full xl:static  xl:w-1/2">
        {children}
      </div>
    </div>
  );
}
