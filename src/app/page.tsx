import { Mail, Bold, Italic, Link, List, ListOrdered } from "lucide-react"

import { SettingsTabs } from "@/components/SettingsTabs"
import Input from "@/components/Form/Input"
import Select from "@/components/Form/Select"
import { SelectItem } from "@/components/Form/Select/SelectItem"
import { Textarea } from "@/components/Form/Textarea"
import * as FileInput from "@/components/Form/FileInput"
import { Button } from "@/components/Form/Button"

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900"></h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form id="settings" className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200">
          {/* NAME */}
          <div className="grid grid-cols-form gap-3">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="fistName" defaultValue="Erikson" />
              </Input.Root>
              <Input.Root>
                <Input.Control defaultValue="Sanchez" />
              </Input.Root>
            </div>
            <div />
          </div>

          {/* EMAIL */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700">
              Email address
            </label>
            <div className="grid-cols grid gap-6">
              <Input.Root>
                <Input.Prefix>
                  <Mail className="h-5 w-5 text-zinc-500" />
                </Input.Prefix>

                <Input.Control
                  id="email"
                  type="email"
                  defaultValue="eriksongoncalves@yahoo.com.br"
                />
              </Input.Root>
            </div>
          </div>

          {/* YOUR PHOTO */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          {/* ROLE */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <div className="grid-cols grid gap-6">
              <Input.Root>
                <Input.Control id="role" defaultValue="Developer" />
              </Input.Root>
            </div>
            <div />
          </div>

          {/* COUNTRY */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700">
              Country
            </label>

            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          {/* TIMEZONE */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="timezone" className="text-sm font-medium text-zinc-700">
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem value="utc8" text="Pacific Standard Time (UTC-08:00)" />
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
            </Select>
            <div />
          </div>

          {/* BIO */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction
              </span>
            </label>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" defaultChecked text="Normal Text" />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <ListOrdered className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          {/* PORTIFOLIO */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="portifolio" className="text-sm font-medium text-zinc-700">
              Portifolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work
              </span>
            </label>

            <FileInput.Root className="flex flex-col gap-4">
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          {/* FOOTER BUTTONS */}
          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
