import * as React from "react";
import { attributes } from "../../content/home.md";
import Sidebar from "@/widgets/Sidebar";

const IndexPage = ({ staticContent = [] }) => {
  return <Sidebar></Sidebar>;
};

export async function getStaticProps() {
  return {
    props: {
      staticContent: attributes.content,
    },
  };
}

export default IndexPage;
