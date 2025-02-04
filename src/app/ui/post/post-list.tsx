import PostEntry from "@/app/ui/post/post-entry";
import { PostManager, PostData } from "@/util/post-manager";

export default async function PostList() {
  const postDataList: PostData[] = await PostManager.instance.fetchPostDataList();
  console.log("Post data list: ", postDataList);
  
  const postListEntries = postDataList.map(postData => createPostListEntryFrom(postData));

  return (
    <ol className="flex flex-col gap-7">
      {postListEntries}
    </ol>
  );
}

function createPostListEntryFrom(postData: PostData) {
  return (
    <li key={postData.slug}>
      <PostEntry data={postData} />
    </li>
  )
}