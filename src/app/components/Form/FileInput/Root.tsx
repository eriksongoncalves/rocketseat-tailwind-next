"use client"

import { ComponentProps, createContext, useContext, useId, useState } from "react"

type RootProps = {} & ComponentProps<"div">

type FileInputContextProps = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextProps)

export function Root({ ...rest }: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles(state => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider
      value={{
        id,
        files,
        onFilesSelected
      }}
    >
      <div {...rest} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
