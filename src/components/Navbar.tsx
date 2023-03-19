import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Link from "next/link";
import supabase from "@/lib/supabase";
import { useQuery } from "react-query";
import { logout } from "@/helpers/logout";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import { pages } from "@/utils/pages";

export default function NavbarComponent() {
  const [openNav, setOpenNav] = useState(false);
  const links = [
    {
      name: pages.docs.label,
      href: pages.docs.path,
    },
    {
      name: pages.pricing.label,
      href: pages.pricing.path,
    },
    {
      name: "Developer",
      href: "https://abhidadhaniya.com?ref=meta-magnet",
    },
    {
      name: "Github",
      href: "https://github.com/abhidadhaniya23/meta-magnet-docs",
    },
    {
      name: "Blogs",
      href: "https://blogs.abhidadhaniya.com?ref=meta-magnet",
    },
  ];

  const navList = (
    <ul className="flex flex-col gap-0 lg:flex-row lg:items-center lg:gap-6">
      {links.map((link, index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : "_self"}
            className="text-base normal-case hover:text-blue-500 duration-200"
          >
            {link.name}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 my-5 shadow-none">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="li"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <Link href={pages.home.path} className="text-2xl font-bold">
            Meta Magnet
          </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>

        <div className="lg:block hidden">
          <AccountMenu />
        </div>

        <div className="flex flex-row gap-3 items-center lg:hidden">
          <AccountMenu />
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {!openNav ? (
              <HiOutlineMenuAlt1 size={22} />
            ) : (
              <VscChromeClose size={22} />
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </Navbar>
  );
}

const AccountMenu = () => {
  const fetchUser = useQuery("user", async () => {
    const user = await supabase.auth.getUser();
    return user;
  });

  const user = fetchUser.data;
  const profilePic = user?.data?.user?.user_metadata.avatar_url;

  return (
    <>
      {fetchUser.data?.data.user ? (
        <Menu>
          <MenuHandler>
            <Avatar
              src={
                fetchUser.isLoading
                  ? "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
                  : profilePic
              }
              className="cursor-pointer border border-solid border-blue-500"
              referrerPolicy="no-referrer"
              alt="avatar"
              variant="circular"
            />
          </MenuHandler>
          <MenuList>
            <Link href={pages.account.path}>
              <MenuItem>{pages.account.label}</MenuItem>
            </Link>
            <MenuItem onClick={logout}>
              <span>Logout</span>
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Link href={pages.signIn.path}>
          <Button variant="outlined" color="blue" size="md">
            {pages.signIn.label}
          </Button>
        </Link>
      )}
    </>
  );
};
