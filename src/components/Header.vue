<template>
    <header class="border-t-8 border-black fixed w-full z-50 shadow">
      <nav
        class="bg-white"
      >
        <div class="container mx-auto flex flex-wrap justify-between items-center py-4">
          <div>
                          <a
                v-if="$route.path === '/'"
                href="/#about"
                v-scroll-to="'#about'"
                data-cypress="about"
                ><h2 class="text-xl uppercase font-semibold">Portfolio</h2></a
              >
              <g-link
                v-else
                to="/#about"
                ><h2 class="text-xl uppercase font-semibold">Portfolio</h2></g-link
              >
          </div>
          <div class="block lg:hidden">
            <button
              @click="toggle"
              class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-blue-700 hover:border-gray-600"
              data-cypress="hamburger"
            >
              <svg
                class="current-color h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                  fill="gray"
                />
              </svg>
            </button>
          </div>
          <ul
            class="uppercase tracking-wide font-bold w-full block flex-grow lg:space-x-8 space-y-6 lg:space-y-0 lg:flex lg:flex-initial lg:w-auto items-center mt-6 lg:mt-0"
            :class="isOpen ? 'block' : 'hidden'"
            data-cypress="menu"
          >
            <li>
              <a
                v-if="$route.path === '/'"
                href="/#about"
                v-scroll-to="'#about'"
                class="text-copy-primary font-normal hover:text-blue-700"
                data-cypress="about"
                >About me</a
              >
              <g-link
                v-else
                to="/#about"
                class="text-copy-primary font-normal hover:text-blue-700"
                >About me</g-link
              >
            </li>
            <li>
              <a
                v-if="$route.path === '/'"
                href="/#skills"
                v-scroll-to="'#skills'"
                class="text-copy-primary font-normal hover:text-blue-700"
                data-cypress="contact"
                >Skills</a
              >
              <g-link
                v-else
                to="/#skills"
                class="text-copy-primary font-normal hover:text-blue-700"
                >Skills</g-link
              >
            </li>
            <li>
              <a
                v-if="$route.path === '/'"
                href="/#projects"
                v-scroll-to="'#projects'"
                class="text-copy-primary font-normal hover:text-blue-700"
                data-cypress="projects"
                >Projects</a
              >
              <g-link
                v-else
                to="/#projects"
                class="text-copy-primary font-normal hover:text-blue-700"
                >Projects</g-link
              >
            </li>
            <li>
              <a
                v-if="$route.path === '/'"
                href="/#contact"
                v-scroll-to="'#contact'"
                class="text-copy-primary font-normal hover:text-blue-700"
                data-cypress="contact"
                >Contact</a
              >
              <g-link
                v-else
                to="/#contact"
                class="text-copy-primary font-normal hover:text-blue-700"
                >Contact</g-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </header>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
}
</script>

<style>

</style>