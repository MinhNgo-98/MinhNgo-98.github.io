<template>
   <footer class="bg-black text-white">
      <div
         class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
      >
         <p class="text-sm text-center sm:text-left">
            © {{ new Date().getFullYear() }} | Minh Huan Ngo
         </p>
      </div>
   </footer>
</template>

<script>
export default {
   name: "Footer"
};
</script>

<style>
</style>