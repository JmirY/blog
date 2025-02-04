import PostEntry from "@/app/ui/post/post-entry";
import { PostData } from "@/util/post-manager";

export default function PostList({
  postDataList
}: {
  postDataList: PostData[]
}) {  
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