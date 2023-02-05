import React from "react";
import styles from "./navbar.module.css";
import DLCLogo from "@/assets/images/dlc-logo.svg";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.nav__left}>
          <img src={DLCLogo.src} alt="logo" />
        </div>
        <div className={styles.nav__right}>
          <button className={styles.connect_btn}>Connect Wallet</button>
        </div>
        <Popover className={styles.mobile__menu}>
          {({ open }) => (
            <>
              {" "}
              <Popover.Button
                className={`${
                  open ? "" : "text-opacity-90"
                } text-white group px-3 py-2 rounded-md inline-flex items-center outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <Bars3Icon
                  className={`${open ? "" : "text-opacity-100"}
                  h-8 w-8 text-white transition duration-150 ease-in-out group-hover:text-opacity-80`}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Popover.Panel className="absolute z-10 w-screen px-4 mt-3 left-0 right-0 ">
                <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-4 bg-transparent p-4">
                    <div className="flex text-white flex-col gap-4">
                      <button
                        onClick={() => {
                          console.log("hi");
                        }}
                        className={styles.connect_btn}
                      >
                        {"Connect Wallet"}
                      </button>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
}
