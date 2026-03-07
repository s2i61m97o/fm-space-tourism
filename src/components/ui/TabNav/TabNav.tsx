"use client";
import clsx from "clsx";
import styles from "./TabNav.module.scss";
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useRef} from "react";
import {keyboardTabChange} from "@/utilities/keyboardTabChange";
import useSwipeNavigation from "@/hooks/useSwipeNavigation";

export default function TabNav({
  tabs,
  activeTab,
  className,
  variant,
}: {
  tabs: string[];
  activeTab: string;
  className?: string;
  variant: "name" | "number" | "dot";
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

  useSwipeNavigation(tabs, tabs.indexOf(activeTab), handleTabChange);

  const buttonClasses = {
    name: {
      class: styles.btn__name,
      active: styles.btn__nameActive,
    },
    number: {
      class: styles.btn__number,
      active: styles.btn__numberActive,
    },
    dot: {
      class: styles.btn__dot,
      active: styles.btn__dotActive,
    },
  };

  return (
    <div
      className={clsx(
        styles.btn__container,
        className,
        variant === "name" && styles.gap__lg,
      )}
      role="tablist"
    >
      {tabs.map((tab, index) => {
        return (
          <button
            aria-controls={`#${tab}Content`}
            aria-label={variant !== "name" ? tab : undefined}
            aria-selected={tab === activeTab ? true : false}
            className={clsx(
              buttonClasses[variant].class,
              tab === activeTab && buttonClasses[variant].active,
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
            {variant === "name" ? tab : variant === "number" ? index + 1 : ""}
          </button>
        );
      })}
    </div>
  );
}
