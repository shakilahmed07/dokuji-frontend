import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DocujiLogo from "../../src/assets/images/ducuji-logo.png";
import DocujiLogo1 from "../../src/assets/images/ducuji-logo-1.png";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import "./style.css";

const navigation = [
  { name: "about", href: "/about", current: false },
  { name: "wardrobe", href: "/wardrobe", current: false },
  { name: "dojo", href: "/dojo", current: true },
  { name: "nft", href: "/nft", current: false },
  { name: "team", href: "/team", current: false },
  // { name: "contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 md:px-[50px]">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="hidden h-7 w-auto lg:inline-block md:inline-block pb-[2px]"
                      src={
                        window.location.pathname === "/nft"
                          ? DocujiLogo1
                          : DocujiLogo
                      }
                      alt="ducuji"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-8">
                    {navigation.map((item) => (
                      <Link
                        to={item.href}
                        className={
                          window.location.pathname !== "/nft" && "blurEff"
                        }
                      >
                        <a
                          key={item.name}
                          href={item.href}
                          className={
                            item.current && window.location.pathname === "/nft"
                              ? "font-apocalypse blurEff hover:text-red-600"
                              : window.location.pathname === "/nft"
                              ? "uppercase  bg-transparent text-black hover:text-red-600 "
                              : classNames(
                                  item.current
                                    ? "text-gray-300 hover:text-white font-apocalypse uppercase "
                                    : "text-gray-300  hover:text-white",
                                  " py-2 rounded-md font-medium uppercase text-base",
                                  item.name === "dojo" && "text-lg"
                                )
                          }
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-4">
                <button
                  type="button"
                  className={window.location.pathname === "/nft" ? "rounded-full bg-transparent p-1 text-black" : "rounded-full bg-transparent p-1 text-white"}
                >
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsInstagram className="h-6 w-6" aria-hidden="true" />
                  </a>
                </button>
                <button
                  type="button"
                  className={window.location.pathname === "/nft" ? "rounded-full bg-transparent p-1 text-black" : "rounded-full bg-transparent p-1 text-white"}
                >
                  <a
                    href="https://twitter.com/i/flow/login"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter className="h-6 w-6" aria-hidden="true" />
                  </a>
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-white"
                      : "text-gray-300 hover:bg-black hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
