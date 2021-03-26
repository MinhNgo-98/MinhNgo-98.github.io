<template>
   <div id="about" class="md:w-3/4 px-5 py-16 mx-auto">
      <div class="w-full mb-6 lg:mb-0">
         <h1
            class="sm:text-3xl text-2xl font-medium mb-2 text-gray-900 font-bold mb-8 uppercase"
         >
            Über mich
         </h1>
      </div>
      <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
         <div>
            <g-image
               src="../../static/images/profile.png"
               alt="avatar"
               class="w-32 h-32 rounded-full mb-8 xl:mb-0"
            />
         </div>
         <div class="flex-1 text-xl sm:text-xl sm:ml-6 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae
            architecto minus molestias iusto ducimus fuga quo quia libero
            dignissimos, fugiat modi assumenda debitis laboriosam.
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "About",
};
</script>