interface Props {
  id: string;
  currentUserId: string;
  parentId: string | null;
  author: {
    name: string;
    image: string;
    id: string;
  };
  content: string;
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
}
const ThreadCard = ({
  id,
  currentUserId,
  parentId,
  author,
  content,
  community,
  comments,
}: Props) => {
  return (
    <article>
      <h2 className="text-sm-regular text-light-2">{content}</h2>
    </article>
  );
};

export default ThreadCard;
