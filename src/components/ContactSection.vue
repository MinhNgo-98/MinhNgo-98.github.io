<template>
   <div id="contact" class="md:w-3/4 px-5 py-16 mx-auto">
      <div class="w-full mb-6 lg:mb-0">
         <h1
            class="sm:text-3xl text-2xl font-medium mb-2 text-gray-900 font-bold mb-8 uppercase"
         >
            Kontaktieren Sie mich
         </h1>
      </div>
      <div
         class="absolute right-0 top-0"
         style="transform: translate(100%) rotate(180deg)"
      >
         <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
         </svg>
      </div>
      <div class="text-xl sm:text-xl mb-16">
         <form action="#" class="mb-12">
            <div class="flex flex-wrap mb-6 -mx-4">
               <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                  <label class="block mb-2 text-copy-primary" for="name">
                     Name
                  </label>

                  <input
                     type="text"
                     name="name"
                     id="name"
                     placeholder="Jon Snow"
                     class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-blue-700 mb-2 p-4"
                     required
                  />
               </div>

               <div class="w-full px-4 md:w-1/2">
                  <label class="block text-copy-primary mb-2" for="email">
                     E-Mail Adresse
                  </label>

                  <input
                     type="email"
                     name="email"
                     id="email"
                     placeholder="email@example.com"
                     class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-blue-700 mb-2 p-4"
                     required
                  />
               </div>
            </div>

            <div class="w-full mb-12">
               <label class="block text-copy-primary mb-2" for="message">
                  Nachricht
               </label>

               <textarea
                  id="message"
                  rows="5"
                  name="message"
                  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-blue-700 mb-2 px-4 py-4"
                  placeholder="Enter your message here."
                  required
               ></textarea>
            </div>

            <div class="flex justify-end w-full">
               <input
                  type="submit"
                  value="Nachricht senden"
                  class="block bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
               />
            </div>
         </form>
      </div>
   </div>
</template>

<script>
export default {
   name: "Contact",
};
</script>

<style>
</style>