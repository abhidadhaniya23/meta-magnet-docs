import Link from "next/link";

import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const code = (props: any) => {
  const { children, className, inline } = props;
  const match = /language-(\w+)/.exec(className || "");
  const language = className?.replace(/language-/, "");
  return !inline ? (
    <SyntaxHighlighter
      language={!language || !match ? "bash" : language}
      className="hide-scrollbar !font-code !m-0 rounded-lg w-full"
      style={nightOwl}
      PreTag={"div"}
    >
      {children}
    </SyntaxHighlighter>
  ) : (
    <code className={`${props.className} text-white/60`}>`{children}`</code>
  );
};

const link = (props: any) => {
  const { href, children }: { href: string; children: JSX.Element } = props;
  if (href.startsWith("/") || href.includes("meta-magnet.vercel.app"))
    return <Link href={href}>{children}</Link>;

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
};

export { code, link };
