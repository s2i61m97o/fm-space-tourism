"use client";

import {useContext, useEffect} from "react";
import {MenuContext} from "../NavigationContext/NavigationContext";
import {Logo, Menu, Close} from "@/components/ui/Icons";
import {usePathname} from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import useBreakpoint from "@/hooks/useBreakpoint";
import {BREAKPOINTS} from "@/constants/breakpoints";
import styles from "./Header.module.scss";

export default function Header() {
  const {open, toggleOpen} = useContext(MenuContext);
  const pathname = usePathname();

  const breakpointMd = useBreakpoint(BREAKPOINTS.md);

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") toggleOpen();
    }

    if (open) document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [open, toggleOpen]);

  return (
    <header className={styles.header}>
      <Link
        href="/"
        className={styles.header__logo}
        aria-label="space tourism homepage"
        inert={open}
      >
        <Logo />
      </Link>
      <button
        className={styles.header__button}
        onClick={toggleOpen}
        aria-label={open ? "close navigation menu" : "open navigation menu"}
        aria-expanded={open}
      >
        {open ? <Close /> : <Menu />}
      </button>

      <div
        className={clsx(
          styles.nav__container,
          open && styles.nav__containerOpen,
        )}
        inert={breakpointMd && !open}
      >
        <nav className={styles.nav__menu}>
          <ul>
            <li>
              <Link
                href="/"
                className={clsx(pathname === "/" && styles.nav__active)}
                onClick={toggleOpen}
              >
                <span aria-hidden>00</span> Home{" "}
                <span className="visually-hidden">
                  - space tourism homepage
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/destination"
                className={clsx(
                  pathname === "/destination" && styles.nav__active,
                )}
                onClick={toggleOpen}
              >
                <span aria-hidden>01</span> Destination{" "}
                <span className="visually-hidden">
                  - discover our destinations
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/crew"
                className={clsx(pathname === "/crew" && styles.nav__active)}
                onClick={toggleOpen}
              >
                <span aria-hidden>02</span> Crew{" "}
                <span className="visually-hidden">- meet our crew</span>
              </Link>
            </li>
            <li>
              <Link
                href="/technology"
                className={clsx(
                  pathname === "/technology" && styles.nav__active,
                )}
                onClick={toggleOpen}
              >
                <span aria-hidden>03</span> Technology{" "}
                <span className="visually-hidden">- check out our tech</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
