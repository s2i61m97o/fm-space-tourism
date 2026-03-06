"use client";
import clsx from "clsx";
import styles from "./TabNav.module.scss";
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useRef} from "react";
import {keyboardTabChange} from "@/utilities/keyboardTabChange";

export default function TabNav({
  tabs,
  activeTab,
  className,
}: {
  tabs: string[];
  activeTab: string;
  className?: string;
}) {
  const path = usePathname();
  const router = useRouter();

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isMounted = useRef(false);

  const handleTabChange = (newActive: string = tabs[0]) => {
    router.push(`${path}?tab=${newActive}`, {scroll: false});
  };

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    const index = tabs.findIndex((t) => t === activeTab);
    tabRefs.current[index]?.focus();
  }, [activeTab, tabs]);

  return (
    <div className={clsx(styles.btn__container, className)} role="tablist">
      {tabs.map((tab, index) => {
        return (
          <button
            aria-controls={`#${tab}Content`}
            aria-selected={tab === activeTab ? true : false}
            className={clsx(
              styles.button,
              tab === activeTab && styles.buttonActive,
            )}
            id={`${tab}Control`}
            key={tab}
            onClick={() => handleTabChange(tab)}
            onKeyDown={(e) =>
              keyboardTabChange(e, handleTabChange, index, tabs)
            }
            role="tab"
            tabIndex={tab === activeTab ? 0 : -1}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
