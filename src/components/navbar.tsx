import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type NavbarProps = {
  setSearchNotes: (query: string) => void;
};

export default function Navbar({ setSearchNotes }: NavbarProps) {
  return (
    <Disclosure
      as="nav"
      style={{ backgroundColor: "#202124", borderBottom: "1px solid #aaa" }}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <h1 style={{ fontSize: "2rem" }} className="text-white font-bold">
                Notes
              </h1>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="w-full max-w-sm min-w-[200px]">
              <div className="relative">
                <input
                  style={{ borderColor: "#aaa" }}
                  className="w-full bg-transparent placeholder-white text-white text-sm border rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Cari catatatan ..."
                  onChange={(event) => setSearchNotes(event.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
