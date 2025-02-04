export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-3xl pt-20 md:pt-24 px-7 md:px-20 m-auto">
      {children}
    </div>
  );
}
