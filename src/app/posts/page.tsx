import PostList from "@/app/ui/post/post-list";
import { PostManager } from "@/util/post-manager";

export default async function PostsPage() {
  const postDataList = await PostManager.instance.fetchPostDataList();
  console.log("Post data list: ", postDataList);
  
  return <PostList postDataList={postDataList} />;
}
 