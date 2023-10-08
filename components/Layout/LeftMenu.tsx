import React, { useState } from "react";

import { Listbox, ListboxItem } from "@nextui-org/react";
import { IconWrapper } from "../IconNextUI/IconWrapper";
import { IconFolder } from "../IconNextUI/IconFolder";
import { ItemCounter } from "../IconNextUI/ItemCounter";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function LeftMenu() {
  const itemClasses = {
    base: "py-2 ",
    title: "font-normal text-medium",
    trigger: "px-2 py-0 ",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  return (
    <Accordion itemClasses={itemClasses}>
      <AccordionItem
        key="anchor"
        aria-label="Anchor"
        indicator={({ isOpen }) => <ItemCounter className={isOpen ? "rotate-180" : "rotate-0"} />}
        title={
          <div className="flex justify-between">
            <span>Tổng hợp bộ đề</span>
            <span>6</span>
          </div>
        }
      >
        <Listbox
          aria-label="User Menu"
          onAction={(key) => alert(key)}
          className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80  max-w-[300px] overflow-visible "
          itemClasses={{
            base: "px-3  gap-3 h-12 data-[hover=true]:color-none",
          }}
        >
          <ListboxItem
            key="1"
            startContent={
              <IconWrapper className="bg-primary/10 text-primary">
                <IconFolder className="text-lg " />
              </IconWrapper>
            }
          >
            Bo de so 1
          </ListboxItem>
          <ListboxItem
            key="2"
            startContent={
              <IconWrapper className="bg-primary/10 text-primary">
                <IconFolder className="text-lg " />
              </IconWrapper>
            }
          >
            Bo de so 2
          </ListboxItem>
          <ListboxItem
            key="3"
            startContent={
              <IconWrapper className="bg-primary/10 text-primary">
                <IconFolder className="text-lg " />
              </IconWrapper>
            }
          >
            Bo de so 3
          </ListboxItem>
        </Listbox>
      </AccordionItem>
    </Accordion>
  );
}
