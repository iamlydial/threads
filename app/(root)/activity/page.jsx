import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser, getActivity } from "@/lib/actions/user.actions";
import Image from "next/image";

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  //get activity
  const activity = await getActivity(userInfo._id);

  return (
    <section className="mt-10 flex flex-col gap-5">
      {activity.length > 0 ? (
        <>
          {activity.map((activity) => (
            <Link key={activity._id} href={`/threas/${activity.parentId}`}>
              <article className="activity-card">
                <Image
                  src={activity.author.image}
                  alt="Profile Picture"
                  width={20}
                  height={20}
                  className="rounded-full object-cover"
                />
              </article>
            </Link>
          ))}
        </>
      ) : (
        <p className="!text-base-regular text-light-3">No activity yet</p>
      )}
    </section>
  );
}

export default Page;
