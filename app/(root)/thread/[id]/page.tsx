import ThreadCard from "@/components/cards/ThreadCard";
import { currentUser } from "@clerk/nextjs";

import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/dist/server/api-utils";

const Page = ({ params }: { params: { id: string } }) => {
  if (!params.id) return null;

  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if(!userInfo.onboarded) redirect('/onboarding')

  const thread = await fetchThradById(params.id)

  return (
  <section className="relative">
    <div>
      <ThreadCard
        key={thread._id}
        id={thread._id}
        currentUserId={user?._id || ""}
        parentId={thread.parentId}
        content={thread.text}
        author={thread.author}
        comments={thread.children}
      />
    </div>
  </section>;
  )
};

export default Page;
