import db from "../../utils/db";
import Link from "next/link";

const Post = (props) => {
  let x = 1;
  const { entries } = props;
  return (
    <div>
      <h1>Posts</h1>
      {entries &&
        entries.map((entry) => (
          <div key={entry.id}>
            <h3>{x++}</h3>
            <Link href={`/posts/${entry.slug}`}>
              <a>{entry.id}</a>
            </Link>
            <br />
          </div>
        ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const entries = await db
    .collection("entries")
    .orderBy(`created`, `desc`)
    .get();
  const entriesData = entries.docs.map((entry) => ({
    id: entry.id,
    ...entry.data(),
  }));
  console.log("TEST", entriesData);
  return {
    props: { entries: entriesData },
    revalidate: 10,
  };
};

export default Post;
