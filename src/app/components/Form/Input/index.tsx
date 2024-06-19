import { ComponentProps, InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type InputPrefixProps = {} & ComponentProps<"div">

function InputPrefix({ ...rest }: InputPrefixProps) {
  return <div {...rest} />
}

type InputControlProps = {} & InputHTMLAttributes<HTMLInputElement>

function InputControl({ ...rest }: InputControlProps) {
  return (
    <input
      className="mx-1 flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder-zinc-400"
      placeholder="Search"
      {...rest}
    />
  )
}

type InputRootProps = {} & ComponentProps<"div">

function InputRoot({ className, ...rest }: InputRootProps) {
  return (
    <div
      className={twMerge(
        "flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm",
        "focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100",
        "dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20",
        className
      )}
      {...rest}
    />
  )
}

export default {
  Prefix: InputPrefix,
  Control: InputControl,
  Root: InputRoot
}
