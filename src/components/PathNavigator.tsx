import { Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";

type PropsType = {
  label: string;
  path: string;
  active?: boolean;
};

const PathNavigator = ({ routes }: { routes: PropsType[] }) => {
  return (
    <>
      <Breadcrumbs className="bg-gray-100/80 mt-2 mb-5">
        {routes.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={!item.active ? "opacity-70" : "opacity-100"}
          >
            {item.label}
          </Link>
        ))}
      </Breadcrumbs>
    </>
  );
};

export default PathNavigator;
