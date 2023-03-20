import NavbarComponent from "./Navbar";
import Footer from "./Footer";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Head from "next/head";

const Layout = ({ children }: { children: JSX.Element }) => {
  const title = "Meta Magnet - Get meta data of any website";
  const description =
    "Meta Magnet is a API service that helps you to get meta data of any website. Try it now!";
  const imgUrl = "https://meta-magnet.vercel.app/meta-image.png";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content="#1565c0" key="theme-color" />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="meta magnet, meta magnet api, meta magnet api docs, meta magnet api documentation"
        />
        <meta name="author" content="Abhi Dadhaniya" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://meta-magnet.vercel.app/" />
        <meta property="og:site_name" content="Meta Magnet" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={imgUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AbhiDadhaniya3" />
        <meta name="twitter:creator" content="@AbhiDadhaniya3" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imgUrl} />
      </Head>
      <HeadLine />
      <main className="max-w-screen-xl mx-auto flex flex-col gap-3 justify-center items-center px-4 lg:px-0">
        <NavbarComponent />
        <hr className="bg-gray-800/30 w-full -mt-5 mb-4" />
        {children}
        <hr className="bg-gray-800/30 w-full mx-auto -mb-7" />
        <Footer />
      </main>
    </>
  );
};

const HeadLine = () => {
  return (
    <>
      <a
        href="https://gigaweb.in?ref=meta-magnet"
        target="_blank"
        className="sticky shadow-none hover:shadow-lg shadow-blue-200 text-base font-normal justify-center text-center bg-blue-600 text-white z-20 top-0 w-full py-3 inline-flex items-center px-20 gap-1 hover:bg-blue-800 duration-300"
      >
        Want to build brand website? Checkout Gigaweb
        <span className="hidden md:block">
          <AiOutlineDoubleRight />
        </span>
      </a>
    </>
  );
};

export default Layout;
