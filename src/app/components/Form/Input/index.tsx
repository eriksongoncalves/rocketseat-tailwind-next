import { ComponentProps, InputHTMLAttributes } from "react"

type InputPrefixProps = {} & ComponentProps<"div">

function InputPrefix({ ...rest }: InputPrefixProps) {
  return <div {...rest} />
}

type InputControlProps = {} & InputHTMLAttributes<HTMLInputElement>

function InputControl({ ...rest }: InputControlProps) {
  return (
    <input
      className="mx-1 flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
      placeholder="Search"
      {...rest}
    />
  )
}

type InputRootProps = {} & ComponentProps<"div">

function InputRoot({ ...rest }: InputRootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...rest}
    />
  )
}

export default {
  Prefix: InputPrefix,
  Control: InputControl,
  Root: InputRoot
}
