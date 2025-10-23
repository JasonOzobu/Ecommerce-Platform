import { Link, NavLink } from "react-router";
import CustomInput from "./CustomInput";

//material ui icons
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const NavLinks = [
  { pathname: "Featured", url: "/featured" },
  { pathname: "Categories", url: "/categories" },
  { pathname: "Trending", url: "/trending" },
  { pathname: "Recently Viewed", url: "/recently-viewed" },
];

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
            <NavLink to={item.url} className="text-[14px]">
              {item.pathname}
            </NavLink>
          ))}
        </span>
      </div>

      <div>
        <CustomInput type="search" text="Search" />

        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
