import React, { useState } from "react";
import dashify from "dashify";
import axios from "axios";

const Post = () => {
  const [content, setContent] = useState({
    title: "",
    body: "",
  });
  const onChange = (e) => {
    const { value, name } = e.target;
    setContent((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmit = async () => {
    const { title, body } = content;
    await axios.post("/api/entry", { title, slug: dashify(title), body });
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
      <label htmlFor="body">Title</label>
      <textarea name="body" value={content.body} onChange={onChange} />
      <button onClick={onSubmit}>POST</button>
    </div>
  );
};

export default Post;
