import React, { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "../IconNextUI/Icon";
import { useAppDispatch } from "@/redux/hooks";
import { setPageTheme } from "@/redux/slice/themeSlice";
import { useRouter } from "next/navigation";

type NavbarType = {
  theme: string;
};

export default function Header(props: NavbarType) {
  const { theme } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Ma nana</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Ma nana</p>
        </NavbarBrand>
        <div
          className="menu-popup"
          onMouseLeave={() => setIsOpen(false)}
          onMouseEnter={() => setIsOpen(true)}
        >
          <Button
            aria-label="1"
            className="peer p-0 bg-transparent data-[hover=true]:bg-transparent text-medium"
            radius="sm"
            variant="light"
            onClick={() => {
              setIsOpen((prev) => !prev);
              router.push("/documents");
            }}
          >
            Tài liệu
          </Button>
          <div
            className={`w-full border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100 ${
              isOpen ? "menu-popup-child" : "menu-popup-child-block"
            } `}
            style={{ backgroundColor: theme === "light" ? "white" : "black" }}
          >
            <Listbox
              aria-label="1"
              color="default"
              variant="solid"
              className={`w-full max-w-[300px] `}
            >
              <ListboxItem
                key="autoscaling"
                description="Tổng hợp tài liệu học tập và ôn thi topik tất cả các cấp độ"
                startContent={icons.scale}
                className="gap-3"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/documents/exercises");
                }}
              >
                Bài tập
              </ListboxItem>
              <ListboxItem
                key="copy"
                description="Đề thi topik tham khảo"
                startContent={icons.activity}
                className="gap-3"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/documents/exams");
                }}
              >
                Đề thi tham khảo
              </ListboxItem>
              <ListboxItem
                key="edit"
                description="Tài liệu sách hàn ngữ"
                startContent={icons.server}
                className="gap-3"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/documents/books");
                }}
              >
                Sách tham khảo
              </ListboxItem>
            </Listbox>
          </div>
        </div>

        <NavbarItem>
          <Link color="foreground" href="#">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Chi tiết
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Liên hệ
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          {theme === "light" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer hover:opacity-75"
              onClick={() => dispatch(setPageTheme("dark"))}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          )}
          {theme === "dark" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer	hover:opacity-75"
              onClick={() => dispatch(setPageTheme("light"))}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          )}
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
