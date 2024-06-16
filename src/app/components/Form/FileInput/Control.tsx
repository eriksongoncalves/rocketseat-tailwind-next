"use client"

import { ChangeEvent, ComponentProps } from "react"
import { useFileInput } from "./Root"

type ControlProps = { multiple?: boolean } & ComponentProps<"input">

export function Control({ multiple = false, ...rest }: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.length) {
      return
    }

    const files = Array.from(e.target.files)
    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      multiple={multiple}
      onChange={handleFilesSelected}
      {...rest}
    />
  )
}
