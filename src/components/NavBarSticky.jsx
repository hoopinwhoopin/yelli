import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MovingComponent from "react-moving-text";
import { Dropdown } from "flowbite-react";

import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import Search from "@mui/icons-material/Search";
import CartContext from "../context/CartContext";
import logo from "../assets/images/logo.svg";

function NavBarSticky(props) {
  const [open, setOpen] = useState(false);
  const [GetInTouchButtonVisible, setGetInTouchButtonVisible] = useState(false);
  const [CurrentStuff, setCurrentStuff] = useState(0);
  setTimeout(() => {
    if (CurrentStuff === 5) setCurrentStuff(0);
    else setCurrentStuff(CurrentStuff + 1);
  }, 2000);

  useEffect(() => {
    addEventListener("scroll", (event) => {
      const scroll = window.pageYOffset || window.documentElement.scrollTop;
      if (scroll > 200) setGetInTouchButtonVisible(true);
      else setGetInTouchButtonVisible(false);
    });
  }, []);

  const stuff = [
    "IN TOUCH",
    "TOGETHER",
    "FOREVER",
    "CREATIVE",
    "STARTED",
    "LOUD",
  ];
  const { toggleSearchView } = props;

  const [menuVisible, setMenuVisibility] = useState(false);
  const [cartItems] = useContext(CartContext);

  const toggleMenuVisibility = () => {
    setMenuVisibility(() => !menuVisible);
  };

  const hideMenu = () => {
    setMenuVisibility(false);
  };

  useEffect(() => {
    const windowHideMenuClick = (e) => {
      if (!e.target.closest(".nav")) hideMenu();
    };

    const windowHideMenuEsc = (e) => {
      if (e.key === "Escape") hideMenu();
    };

    window.addEventListener("click", windowHideMenuClick);
    window.addEventListener("keydown", windowHideMenuEsc);

    return () => {
      window.removeEventListener("click", windowHideMenuClick);
      window.removeEventListener("keydown", windowHideMenuEsc);
    };
  }, []);

  return (
    <div className="w-full">
      <motion.nav className=" hidden w-[100%] sm:flex items-center px-5  absolute  ">
        <script src="../path/to/flowbite/dist/flowbite.min.js" />{" "}
        <button
          type="button"
          className="material-symbols-outlined nav__btn-menu"
          onClick={toggleMenuVisibility}
          data-testid="menu-btn"
        >
          menu
        </button>
        <Link to="/" className="nav__logo no-underline">
          <div className="gap-10 pt-5 Courier">
            <img src={logo} alt="" className="w-[10vh]" />
          </div>
        </Link>
        <div className=" flex flex-1">
          <ul className="nav__links text-white Courier ml-auto mr-auto">
            {/* <NavLink]}
          to="/products"
          className="nav__link
          "
        >
          Stories
        </NavLink> */}

            <Dropdown
              label="Stories"
              color="transperant"
              theme={{ floating: { target: "w-full" } }}
            >
              <Dropdown.Item>
                <NavLink to="/photostories" className="Courier">
                  Photos
                </NavLink>{" "}
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/videostories" className=" Courier">
                  Videos
                </NavLink>{" "}
              </Dropdown.Item>
            </Dropdown>
            <ul className="nav__links text-white Courier">
              <NavLink
                to="/aboutus"
                className=" Courier text-sm whitespace-nowrap"
              >
                About Us
              </NavLink>
              <a href="/aboutus#questions" className=" Courier text-sm ">
                FAQs
              </a>
            </ul>
            <Dropdown
              label="More"
              color="transperant"
              theme={{ floating: { target: "w-full" } }}
            >
              <Dropdown.Item>
                <NavLink
                  to="/testimonials"
                  className="Courier text-sm
              "
                >
                  Testimonials
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink
                  to="/blogs"
                  className="Courier text-sm
              "
                >
                  Blog
                </NavLink>{" "}
              </Dropdown.Item>
            </Dropdown>
          </ul>
        </div>
      </motion.nav>

      {/* small screen */}

      <div className=" flex flex-col w-screen justify-between overflow-hidden">
        {/* <button
          type="button"
          className=" flex flex-row bg-[#ffca00] h-[34px] p-3 w-[145px] rounded text-black cursor-pointer fixed right-5 top-5 overflow-hidden  hover:text-yellow-300 hover:bg-black hover:border-black transition-all ease-in duration-300"
        >
          <span className="mr-2 Boldy flex items-center justify-center">
            GET{" "}
          </span>
          <div
            className="flex items-center justify-center Boldy"
            key={CurrentStuff}
          >
            <MovingComponent
              id="moving"
              type="fadeInFromBottom"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease-in-out"
              iteration="1"
              fillMode="none"
            >
              {stuff[CurrentStuff]}
            </MovingComponent>
          </div>
        </button> */}

        <button type = "button" className=" flex flex-row bg-[#ffca00] h-[34px] p-2 w-[140px] rounded text-black cursor-pointer fixed right-5 top-5 overflow-hidden  hover:text-yellow-300 hover:bg-black hover:border-black transition-all ease-in duration-300">
          <span className="mr-2 Boldy flex items-center justify-center">
            GET{" "}
          </span>
          <div
            className="flex items-center justify-center Boldy"
            key={CurrentStuff}
          >
            <MovingComponent
              id="moving"
              type="fadeInFromBottom"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease-in-out"
              iteration="1"
              fillMode="none"
            >
              {" "}
              {stuff[CurrentStuff]}
            </MovingComponent>
          </div>
        </button>

        <div className=" sm:hidden absolute bg-none ">
          <IconButton
            variant="outlined"
            color="neutral"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </IconButton>
          <Drawer sx={{}} open={open} onClose={() => setOpen(false)} size="lg">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                ml: "auto",
                mt: 1,
                mr: 2,
              }}
            >
              <Typography
                component="label"
                htmlFor="close-icon"
                fontSize="sm"
                fontWeight="lg"
                sx={{ cursor: "pointer" }}
              >
                Close
              </Typography>
              <ModalClose id="close-icon" sx={{ position: "initial" }} />
            </Box>
            <Input
              size="sm"
              placeholder="Search"
              variant="plain"
              endDecorator={<Search />}
              slotProps={{
                input: {
                  "aria-label": "Search anything",
                },
              }}
              sx={{
                m: 3,
                borderRadius: 0,
                borderBottom: "2px solid",
                borderColor: "neutral.outlinedBorder",
                "&:hover": {
                  borderColor: "neutral.outlinedHoverBorder",
                },
                "&::before": {
                  border: "1px solid var(--Input-focusedHighlight)",
                  transform: "scaleX(0)",
                  left: 0,
                  right: 0,
                  bottom: "-2px",
                  top: "unset",
                  transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                  borderRadius: 0,
                },
                "&:focus-within::before": {
                  transform: "scaleX(1)",
                },
              }}
            />
            <List
              size="lg"
              component="nav"
              sx={{
                flex: "none",
                fontSize: "xl",
                "& > div": { justifyContent: "center" },
              }}
            >
              <ListItemButton sx={{ fontWeight: "lg" }}>Stories</ListItemButton>
              <ListItemButton>About Us</ListItemButton>
              <ListItemButton>FAQs</ListItemButton>
              <ListItemButton>Testimonials</ListItemButton>
              <ListItemButton>Blogs</ListItemButton>
            </List>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

NavBarSticky.propTypes = {
  toggleSearchView: PropTypes.func.isRequired,
};

export default NavBarSticky;
