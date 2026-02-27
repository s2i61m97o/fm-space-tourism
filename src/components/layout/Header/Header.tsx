"use client";

import {useState} from "react";
import {Logo, Menu, Close} from "@/components/ui/Icons";
import styles from "./Header.module.scss";
import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo />
      </Link>
      <button className={styles.header__button} onClick={toggleMenu}>
        {open ? <Close /> : <Menu />}
      </button>

      <div
        className={clsx(
          styles.nav__container,
          open && styles.nav__containerOpen,
        )}
        inert={!open}
      >
        <nav className={styles.nav__menu}>
          <Link
            href="/"
            className={clsx(pathname === "/" && styles.nav__active)}
          >
            <span aria-hidden>00</span> Home
          </Link>
          <Link
            href="/"
            className={clsx(pathname === "/destination" && styles.nav__active)}
          >
            <span aria-hidden>01</span> Destination
          </Link>
          <Link
            href="/"
            className={clsx(pathname === "/crew" && styles.nav__active)}
          >
            <span aria-hidden>02</span> Crew
          </Link>
          <Link
            href="/"
            className={clsx(pathname === "/technology" && styles.nav__active)}
          >
            <span aria-hidden>03</span> Technology
          </Link>
        </nav>
      </div>
    </header>
  );
}
