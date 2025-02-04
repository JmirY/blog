import PostView from "@/app/ui/post/post-view";
import { PostManager } from "@/util/post-manager";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;
  const postData = await PostManager.instance.getPostDataBySlug(slug);

  return (
    <div>
      <PostView postData={postData} />
    </div>
  );
}