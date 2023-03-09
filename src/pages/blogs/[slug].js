import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Header from "@/components/Header";
import BlogPost from "@/components/BlogPost";

export default function Blog({ frontmatter, markdown }) {
  return (
    <div>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <Header />
      <BlogPost frontmatter={frontmatter} markdown={markdown} />
    </div>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const fileContent = matter(
    fs.readFileSync(`./content/blogs/${slug}.md`, "utf8")
  );
  let frontmatter = fileContent.data;
  const markdown = fileContent.content;

  return {
    props: { frontmatter, markdown },
  };
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync("./content/blogs");

  const paths = filesInProjects.map((file) => {
    const filename = file.slice(0, file.indexOf("."));
    return { params: { slug: filename } };
  });

  return {
    paths,
    fallback: false, // This shows a 404 page if the page is not found
  };
}
