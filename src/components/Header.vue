<template>
    <header class="border-t-8 border-black fixed w-full z-50 shadow">
      <nav
        class="bg-white"
      >
        <div class="container mx-auto w-10/12 flex flex-wrap justify-between items-center py-4">
          <div>
            <h2 class="text-xl uppercase font-semibold">Portfolio</h2>
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
            class="uppercase tracking-wide font-bold w-full block flex-grow lg:space-x-8 space-y-6 lg:space-y-0 lg:flex lg:flex-initial lg:w-auto items-center mt-2 lg:mt-0"
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
                >Über mich</a
              >
              <g-link
                v-else
                to="/#about"
                class="text-copy-primary font-normal hover:text-blue-700"
                >Über mich</g-link
              >
            </li>
            <li>
              <a
                v-if="$route.path === '/'"
                href="/#contact"
                v-scroll-to="'#contact'"
                class="text-copy-primary font-normal hover:text-blue-700"
                data-cypress="contact"
                >Fähigkeiten</a
              >
              <g-link
                v-else
                to="/#contact"
                class="text-copy-primary font-normal hover:text-blue-700"
                >Contact</g-link
              >
            </li>
            <li>
              <a
                v-if="$route.path === '/'"
                href="/#projects"
                v-scroll-to="'#projects'"
                class="text-copy-primary font-normal hover:text-blue-700"
                data-cypress="projects"
                >Projekte</a
              >
              <g-link
                v-else
                to="/#projects"
                class="text-copy-primary font-normal hover:text-blue-700"
                >Projekte</g-link
              >
            </li>
            <li>
              <a
                v-if="$route.path === '/'"
                href="/#contact"
                v-scroll-to="'#contact'"
                class="text-copy-primary font-normal hover:text-blue-700"
                data-cypress="contact"
                >Kontakt</a
              >
              <g-link
                v-else
                to="/#contact"
                class="text-copy-primary font-normal hover:text-blue-700"
                >Kontakt</g-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </header>
</template>

<script>

export default {
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