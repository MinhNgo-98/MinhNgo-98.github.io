<template>
   <div id="contact" class="md:w-3/4 px-5 py-16 mx-auto">
      <div class="w-full mb-6 lg:mb-0">
         <h1
            class="sm:text-3xl text-2xl font-medium mb-2 text-gray-900 font-bold mb-8 uppercase"
         >
            Kontakt
         </h1>
      </div>
      <div class="text-xl sm:text-xl mb-16">
         <form action="https://getform.io/f/80919b0b-4763-4061-bb13-fc7f68a8293d" method="POST" class="mb-12">
            <div class="flex flex-wrap mb-6 -mx-4">
               <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                  <label class="block mb-2 text-copy-primary" for="name">
                     Name
                  </label>

                  <input
                     type="text"
                     name="name"
                     id="name"
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