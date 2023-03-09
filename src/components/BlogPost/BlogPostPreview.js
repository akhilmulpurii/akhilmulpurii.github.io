import React, { useEffect } from "react";
import BlogPost from "./index";
import { StyleSheetManager } from "styled-components";

const BlogPostPreview = ({ entry }) => {
  const data = entry.toJS().data;

  const [iframeHeadElem, setIframeHeadElem] = React.useState(null);

  useEffect(() => {
    const iframe = document.querySelector("#preview-pane");
    if (iframe?.contentDocument?.head) {
      const ihe = iframe.contentDocument.head;
      setIframeHeadElem(ihe);
    }
  }, []);

  if (!iframeHeadElem) {
    return null;
  }

  let frontmatter = {
    title: data.title,
    date: data.date,
    description: data.description,
    mainImage: data.mainImage,
    author: data.author,
    avatarUrl: data.avatarUrl,
    role: data.role,
    tags: data.tags,
  };
  const markdown = data.body;
  console.log(123, data);

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <BlogPost frontmatter={frontmatter} markdown={markdown} />
    </StyleSheetManager>
  );
};

export default BlogPostPreview;
