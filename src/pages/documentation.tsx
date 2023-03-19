import { GetStaticProps } from "next";

import matter from "gray-matter";
import PathNavigator from "@/components/PathNavigator";
import { navigatorRoutes } from "@/utils/navigatorRoutes";
import ReactMarkdown from "react-markdown";
import { code, link } from "@/components/markdown";

const docs = (props: any) => {
  const { source } = props;
  return (
    <>
      <PathNavigator routes={navigatorRoutes.docs} />
      <article className="prose prose-lg my-10 prose-pre:p-0 prose-a:no-underline prose-a:text-blue-500">
        <ReactMarkdown
          components={{
            code: code,
            a: link,
          }}
        >
          {source}
        </ReactMarkdown>
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const file = matter.read("README.md");
  return {
    props: {
      source: file.content,
    },
  };
};

export default docs;
