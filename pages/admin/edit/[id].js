import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import dashify from "dashify";
import axios from "axios";

const EditEntry = () => {
  const router = useRouter();
  const [content, setContent] = useState({
    title: "",
    body: "",
  });

  useEffect(async () => {
    const { id } = router.query;
    if (id) {
      const res = await axios.get(`/api/entry/${id}`);
      const { title, body } = res.data;
      setContent({
        title,
        body,
      });
    }
  }, [router]);

  const onChange = (e) => {
    const { value, name } = e.target;
    setContent((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (e) => {
    const { id } = router.query;
    const { title, body } = content;
    await axios.put(`/api/entry/${id}`, {
      slug: dashify(title),
      title,
      body,
    });
  };

  const onDelete = async () => {
    const { id } = router.query;
    await axios.delete(`/api/entry/${id}`);
    router.back();
  };
  return (
    <div>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={content.title}
        onChange={onChange}
      />
      <label htmlFor="body">Body</label>
      <textarea name="body" value={content.body} onChange={onChange} />
      <button onClick={onSubmit}>Submit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default EditEntry;
