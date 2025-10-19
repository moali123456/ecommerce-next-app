// "use client";

// import { useState } from "react";
// import {
//   Dialog,
//   DialogPanel,
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Popover,
//   PopoverButton,
//   PopoverGroup,
//   PopoverPanel,
// } from "@headlessui/react";
// import {
//   ArrowPathIcon,
//   Bars3Icon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import {
//   ChevronDownIcon,
//   PhoneIcon,
//   PlayCircleIcon,
// } from "@heroicons/react/20/solid";

// const products = [
//   {
//     name: "Analytics",
//     description: "Get a better understanding of your traffic",
//     href: "/",
//     icon: ChartPieIcon,
//   },
//   {
//     name: "Engagement",
//     description: "Speak directly to your customers",
//     href: "/",
//     icon: CursorArrowRaysIcon,
//   },
//   {
//     name: "Security",
//     description: "Your customers’ data will be safe and secure",
//     href: "/",
//     icon: FingerPrintIcon,
//   },
//   {
//     name: "Integrations",
//     description: "Connect with third-party tools",
//     href: "/",
//     icon: SquaresPlusIcon,
//   },
//   {
//     name: "Automations",
//     description: "Build strategic funnels that will convert",
//     href: "/",
//     icon: ArrowPathIcon,
//   },
// ];
// const callsToAction = [
//   { name: "Watch demo", href: "/", icon: PlayCircleIcon },
//   { name: "Contact sales", href: "/", icon: PhoneIcon },
// ];

// export default function MainMenu() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-white">
//       <nav
//         aria-label="Global"
//         className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
//       >
//         <div className="flex lg:flex-1">
//           <a href="#" className="-m-1.5 p-1.5">
//             <span className="sr-only">Your Company</span>
//             <img
//               alt=""
//               src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
//               className="h-8 w-auto"
//             />
//           </a>
//         </div>
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             onClick={() => setMobileMenuOpen(true)}
//             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//           >
//             <span className="sr-only">Open main menu</span>
//             <Bars3Icon aria-hidden="true" className="size-6" />
//           </button>
//         </div>
//         <PopoverGroup className="hidden lg:flex lg:gap-x-12">
//           <Popover className="relative">
//             <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
//               Product
//               <ChevronDownIcon
//                 aria-hidden="true"
//                 className="size-5 flex-none text-gray-400"
//               />
//             </PopoverButton>

//             <PopoverPanel
//               transition
//               className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
//             >
//               <div className="p-4">
//                 {products.map((item) => (
//                   <div
//                     key={item.name}
//                     className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
//                   >
//                     <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
//                       <item.icon
//                         aria-hidden="true"
//                         className="size-6 text-gray-600 group-hover:text-indigo-600"
//                       />
//                     </div>
//                     <div className="flex-auto">
//                       <a
//                         href={item.href}
//                         className="block font-semibold text-gray-900"
//                       >
//                         {item.name}
//                         <span className="absolute inset-0" />
//                       </a>
//                       <p className="mt-1 text-gray-600">{item.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
//                 {callsToAction.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
//                   >
//                     <item.icon
//                       aria-hidden="true"
//                       className="size-5 flex-none text-gray-400"
//                     />
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </PopoverPanel>
//           </Popover>

//           <a href="#" className="text-sm/6 font-semibold text-gray-900">
//             Features
//           </a>
//           <a href="#" className="text-sm/6 font-semibold text-gray-900">
//             Marketplace
//           </a>
//           <a href="#" className="text-sm/6 font-semibold text-gray-900">
//             Company
//           </a>
//         </PopoverGroup>
//         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//           <a href="#" className="text-sm/6 font-semibold text-gray-900">
//             Log in <span aria-hidden="true">&rarr;</span>
//           </a>
//         </div>
//       </nav>
//       <Dialog
//         open={mobileMenuOpen}
//         onClose={setMobileMenuOpen}
//         className="lg:hidden"
//       >
//         <div className="fixed inset-0 z-50" />
//         <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//           <div className="flex items-center justify-between">
//             <a href="#" className="-m-1.5 p-1.5">
//               <span className="sr-only">Your Company</span>
//               <img
//                 alt=""
//                 src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
//                 className="h-8 w-auto"
//               />
//             </a>
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(false)}
//               className="-m-2.5 rounded-md p-2.5 text-gray-700"
//             >
//               <span className="sr-only">Close menu</span>
//               <XMarkIcon aria-hidden="true" className="size-6" />
//             </button>
//           </div>
//           <div className="mt-6 flow-root">
//             <div className="-my-6 divide-y divide-gray-500/10">
//               <div className="space-y-2 py-6">
//                 <Disclosure as="div" className="-mx-3">
//                   <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
//                     Product
//                     <ChevronDownIcon
//                       aria-hidden="true"
//                       className="size-5 flex-none group-data-open:rotate-180"
//                     />
//                   </DisclosureButton>
//                   <DisclosurePanel className="mt-2 space-y-2">
//                     {[...products, ...callsToAction].map((item) => (
//                       <DisclosureButton
//                         key={item.name}
//                         as="a"
//                         href={item.href}
//                         className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
//                       >
//                         {item.name}
//                       </DisclosureButton>
//                     ))}
//                   </DisclosurePanel>
//                 </Disclosure>
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                 >
//                   Features
//                 </a>
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                 >
//                   Marketplace
//                 </a>
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                 >
//                   Company
//                 </a>
//               </div>
//               <div className="py-6">
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                 >
//                   Log in
//                 </a>
//               </div>
//             </div>
//           </div>
//         </DialogPanel>
//       </Dialog>
//     </header>
//   );
// }

"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "/",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "/",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "/",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "/",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "/",
    icon: ArrowPathIcon,
  },
];

const callsToAction = [
  { name: "Watch demo", href: "/", icon: PlayCircleIcon },
  { name: "Contact sales", href: "/", icon: PhoneIcon },
];

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "/",
          imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "/",
          imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "/" },
            { name: "Dresses", href: "/" },
            { name: "Pants", href: "/" },
            { name: "Denim", href: "/" },
            { name: "Sweaters", href: "/" },
            { name: "T-Shirts", href: "/" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "/" },
            { name: "Wallets", href: "/" },
            { name: "Bags", href: "/" },
            { name: "Sunglasses", href: "/" },
            { name: "Hats", href: "/" },
            { name: "Belts", href: "/" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "/" },
            { name: "My Way", href: "/" },
            { name: "Re-Arranged", href: "/" },
            { name: "Counterfeit", href: "/" },
            { name: "Significant Other", href: "/" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "/",
          imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "/",
          imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "/" },
            { name: "Pants", href: "/" },
            { name: "Sweaters", href: "/" },
            { name: "T-Shirts", href: "/" },
            { name: "Jackets", href: "/" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "/" },
            { name: "Wallets", href: "/" },
            { name: "Bags", href: "/" },
            { name: "Sunglasses", href: "/" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "/" },
            { name: "Counterfeit", href: "/" },
            { name: "Full Nelson", href: "/" },
            { name: "My Way", href: "/" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "About", href: "/about" },
    { name: "Stores", href: "/" },
  ],
};

export default function MainMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-full px-0 sm:px-0 lg:px-0"
      >
        <div className="flex items-center justify-between py-4">
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 bg-white/60 backdrop-blur-sm"
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden />
            </button>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            <PopoverGroup className="flex gap-x-6 items-center">
              <Popover className="relative">
                <PopoverButton className="flex items-center gap-x-1 text-sm text-gray-300 hover:text-[#00b207] cursor-pointer transition outline-0">
                  Product
                  <ChevronDownIcon
                    className="h-5 w-5 text-gray-300"
                    aria-hidden
                  />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute left-1/2 z-30 mt-3 w-screen max-w-md -translate-x-1/5 overflow-hidden rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5"
                >
                  <div className="p-4">
                    {products.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden
                          />
                        </div>
                        <div className="flex-auto">
                          <div className="font-semibold text-gray-900">
                            {item.name}
                          </div>
                          <p className="mt-1 text-gray-600 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((ct) => (
                      <Link
                        key={ct.name}
                        href={ct.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                      >
                        <ct.icon
                          className="h-5 w-5 text-gray-300"
                          aria-hidden
                        />
                        {ct.name}
                      </Link>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>

              {/* Full-width mega menu */}
              {navigation.categories.map((category) => (
                <Popover key={category.name} className="">
                  <PopoverButton className="group flex items-center text-sm font-medium text-gray-300 hover:text-[#00b207] cursor-pointer transition outline-0">
                    {category.name}
                    <span className="ml-1">
                      <ChevronDownIcon
                        className="h-4 w-4 text-gray-400"
                        aria-hidden
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out group-data-open:bg-indigo-600"
                    />
                  </PopoverButton>

                  {/* Full-width mega menu */}
                  {/* <PopoverPanel className="absolute left-0 right-0 top-full z-20 w-screen text-sm text-gray-500"> */}
                  <PopoverPanel className="absolute left-0 right-0 top-full z-20 w-[100%] text-sm text-gray-500">
                    <div
                      aria-hidden
                      className="absolute inset-0 top-0 bg-white shadow-sm"
                    />
                    <div className="relative bg-white">
                      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-10">
                          <div className="col-start-2 grid grid-cols-2 gap-x-8">
                            {category.featured.map((item) => (
                              <div
                                key={item.name}
                                className="group relative text-base sm:text-sm"
                              >
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                />
                                <a
                                  href={item.href}
                                  className="mt-6 block font-medium text-gray-900"
                                >
                                  {item.name}
                                </a>
                                <p className="mt-1">Shop now</p>
                              </div>
                            ))}
                          </div>

                          <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                            {category.sections.map((section) => (
                              <div key={section.name}>
                                <p className="font-medium text-gray-900">
                                  {section.name}
                                </p>
                                <ul className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                  {section.items.map((item) => (
                                    <li key={item.name} className="flex">
                                      <a
                                        href={item.href}
                                        className="hover:text-gray-800"
                                      >
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </PopoverPanel>
                </Popover>
              ))}

              {navigation.pages.map((page) => (
                <a
                  key={page.name}
                  href={page.href}
                  className="text-sm font-medium text-gray-300 hover:text-[#00b207] cursor-pointer"
                >
                  {page.name}
                </a>
              ))}
            </PopoverGroup>
          </div>

          <div className="ml-6 flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-gray-300 hover:text-[#00b207] cursor-pointer"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-300 hover:text-[#00b207] cursor-pointer"
            >
              Create account
            </Link>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <Dialog
        open={mobileOpen}
        onClose={setMobileOpen}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-50 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white/95 backdrop-blur-sm pb-8 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex items-center justify-between px-4 pt-5">
              <a href="#" className="flex items-center -m-1.5 p-1.5">
                <img
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  alt="logo"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden />
              </button>
            </div>

            <div className="mt-6 px-4">
              <Disclosure as="div" className="space-y-1">
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-base font-semibold text-gray-900 hover:bg-gray-50">
                      Product
                      <ChevronDownIcon
                        className={`h-5 w-5 text-gray-500 transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...products, ...callsToAction].map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm font-medium text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>

              {navigation.categories.map((category) => (
                <Disclosure key={category.id} as="div" className="mt-4">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-base font-semibold text-gray-900 hover:bg-gray-50">
                        {category.name}
                        <ChevronDownIcon
                          className={`h-5 w-5 text-gray-500 transition-transform ${
                            open ? "rotate-180" : ""
                          }`}
                        />
                      </DisclosureButton>

                      <DisclosurePanel className="mt-2 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          {category.featured.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="group text-sm"
                            >
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                              />
                              <div className="mt-2 font-medium text-gray-900">
                                {item.name}
                              </div>
                              <p className="text-xs text-gray-500">Shop now</p>
                            </a>
                          ))}
                        </div>

                        {category.sections.map((section) => (
                          <div key={section.id}>
                            <p className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul className="mt-2 space-y-2">
                              {section.items.map((item) => (
                                <li key={item.name}>
                                  <a
                                    href={item.href}
                                    className="block rounded-md px-2 py-1 text-sm text-gray-700 hover:bg-gray-50"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              ))}

              <div className="mt-6 space-y-3 border-t border-gray-200 pt-4">
                {navigation.pages.map((page) => (
                  <a
                    key={page.name}
                    href={page.href}
                    className="block rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    {page.name}
                  </a>
                ))}
              </div>

              <div className="mt-6 space-y-3 border-t border-gray-200 pt-4">
                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                >
                  Sign in
                </a>
                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                >
                  Create account
                </a>
              </div>
            </div>

            <div className="mt-auto border-t border-gray-200 px-4 py-6">
              <a href="#" className="flex items-center gap-3">
                <img
                  src="https://tailwindcss.com/plus-assets/img/flags/flag-usa.svg"
                  alt=""
                  className="h-5 w-5"
                />
                <span className="text-sm font-medium text-gray-700">
                  English
                </span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  );
}
