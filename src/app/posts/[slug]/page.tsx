export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;
  console.log("Showing the post. slug: ", slug);

  return (
    <div>
      {`Hello ${slug}`}
    </div>
  );
}