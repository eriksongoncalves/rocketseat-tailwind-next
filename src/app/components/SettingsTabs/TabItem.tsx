"use-client"

import * as Tabs from "@radix-ui/react-tabs"
import { motion } from "framer-motion"

type TabItemProps = {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="hover:text-violet-70 group relative px-1 pb-4 text-sm font-medium text-zinc-500 outline-none data-[state=active]:text-violet-700"
    >
      <span className="rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-1 rounded-lg bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  )
}
