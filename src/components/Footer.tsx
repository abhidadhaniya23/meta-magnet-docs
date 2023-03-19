const Footer = () => {
  return (
    <>
      <footer className="text-blue-300 py-10 text-center">
        Made with{" "}
        <a
          href="https://www.material-tailwind.com/"
          className="underline underline-offset-2 text-blue-800"
          target="_blank"
        >
          Material Tailwind
        </a>{" "}
        by <br className="md:hidden" />
        <a
          href="https://abhidadhaniya.com?ref=meta-magnet"
          className="underline underline-offset-2 text-blue-800"
          target="_blank"
        >
          Abhi Dadhaniya
        </a>{" "}
        🚀
      </footer>
    </>
  );
};

export default Footer;
