import { PostData } from "@/util/post-manager";
import { micromark } from "micromark";

export default function PostView({
  postData
}: {
  postData: PostData
}) {
  const htmlContent = micromark(postData.content);
  
  return (
    <div className="prose prose-neutral" dangerouslySetInnerHTML={{__html: htmlContent}}>
    </div>
  );
}