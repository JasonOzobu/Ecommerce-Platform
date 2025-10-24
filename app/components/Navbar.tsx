import { Link, NavLink } from "react-router";
import CustomInput from "./CustomInput";
import { Avatar } from "@mui/material";

//material ui icons
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const NavLinks = [
  { pathname: "Featured", url: "/featured" },
  { pathname: "Categories", url: "/categories" },
  { pathname: "Trending", url: "/trending" },
  { pathname: "Recently Viewed", url: "/recently-viewed" },
];

const user = {
  name: "jason",
  email: "jasonozobu@gmail.com",
  image: "../assets/296fe121-5dfa-43f4-98b5-db50019738a7.jpg",
};

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-[10px] px-4 border-b-1 border-neutral-300 lg:px-8">
      <div className="flex items-center">
        <Link to={"/"}>
          {" "}
          <p className="font-semibold mr-4">Pako Stores</p>{" "}
        </Link>

        <span className="flex gap-4 items-center">
          {NavLinks.map((item) => (
            <NavLink key={item.pathname} to={item.url} className="text-[14px]">
              {item.pathname}
            </NavLink>
          ))}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <CustomInput icon type="search" text="Search" />

        <span className="bg-light-100 px-[10px] py-[10px] rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
          </svg>
        </span>

        <span className="bg-light-100 px-[10px] py-[10px] rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
          </svg>
        </span>

        <span className="w-15 h-9 rounded-full">
          <Avatar />
        </span>
      </div>
    </header>
  );
};

export default Navbar;
