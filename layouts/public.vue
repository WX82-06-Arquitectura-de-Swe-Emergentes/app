<template>
  <!-- When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars -->
  <Popover as="template" v-slot="{ open }">
    <header
        :class="[open ? 'fixed inset-0 z-40 overflow-y-auto' : '', 'bg-primary shadow-sm lg:static lg:overflow-y-visible']">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
          <div class="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
            <div class="flex flex-shrink-0 items-center">
              <a href="/">
                <img class="h-8 w-auto" src="../assets/images/logo.png"
                     alt="Adventurehub"/>
              </a>
            </div>
          </div>
          <div class="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
            <div class="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
              <div class="w-full">
                <label for="search" class="sr-only">Search</label>
                <div class="relative">
                  <div class="w-full h-9">

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
            <!-- Mobile menu button -->
            <PopoverButton
                class="relative -mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-background hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="absolute -inset-0.5"/>
              <span class="sr-only">Open menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true"/>
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true"/>
            </PopoverButton>
          </div>
          <div class="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
            <a href="/login"
               class="ml-6 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Login
            </a>
            <a href="/login"
               class="ml-6 inline-flex items-center rounded-md border border-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Register
            </a>
          </div>
        </div>
      </div>

      <PopoverPanel as="nav" class="lg:hidden" aria-label="Global">
        <div class="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4">
          <a v-for="item in navigation" :key="item.name" :href="item.href"
             :aria-current="item.current ? 'page' : undefined"
             :class="[item.current ? 'bg-background text-secondary' : 'hover:bg-background', 'block rounded-md py-2 px-3 text-base font-medium']">{{
              item.name
            }}</a>
        </div>
      </PopoverPanel>
    </header>
  </Popover>
  <main class="h-[calc(100vh-68px)]">
    <slot></slot>
  </main>
</template>

<script setup>
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue'
import {Bars3Icon, XMarkIcon} from '@heroicons/vue/24/outline'

const navigation = [
  {name: 'Home', href: '/', current: true},
  {name: 'Login', href: '/login', current: false},
  {name: 'Register', href: '/register', current: false},
  {nane: 'MyTravelPackages', href: '/my-travel-packages', current: false},
]
</script>