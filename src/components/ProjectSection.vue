<template>
   <div id="projects" class="md:w-3/4 px-5 py-16 mx-auto">
      <div class="w-full mb-6 lg:mb-0">
         <h1
            class="sm:text-3xl text-2xl font-medium mb-2 text-gray-900 font-bold mb-8 uppercase"
         >
            Projekte
         </h1>
      </div>
      <div class="mx-auto">
         <div class="flex flex-wrap">
            <a href="https://classroom-django.herokuapp.com/" class="lg:w-1/2">
               <div class="flex relative m-2 border rounded">
                  <g-image
                     alt="gallery"
                     class="absolute inset-0 w-full h-full object-cover object-center"
                     src="../../static/images/projects/classroom.png"
                  />
                  <div
                     class="px-8 py-32 relative z-10 w-full border bg-gray-100 opacity-0 hover:opacity-90"
                  >
                     <h1
                        class="text-xl font-bold text-gray-900 mb-3"
                     >
                        Classroom App
                     </h1>
                     <p class="leading-relaxed">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                     </p>
                  </div>
               </div>
            </a>
            <a href="https://auction-django.herokuapp.com/" class="lg:w-1/2">
               <div class="flex relative m-2 border rounded">
                  <g-image
                     alt="gallery"
                     class="absolute inset-0 w-full h-full object-cover object-center"
                     src="../../static/images/projects/auction.png"
                  />
                  <div
                     class="px-8 py-32 relative z-10 w-full border bg-gray-100 opacity-0 hover:opacity-90"
                  >
                     <h1
                        class="text-xl font-bold text-gray-900 mb-3"
                     >
                        Auction Site
                     </h1>
                     <p class="leading-relaxed">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                     </p>
                  </div>
               </div>
            </a>
            <a href="https://colorgame-react.netlify.app/" class="lg:w-1/2">
               <div class="flex relative m-2 border rounded">
                  <g-image
                     alt="gallery"
                     class="absolute inset-0 w-full h-full object-cover object-center"
                     src="../../static/images/projects/colorgame.png"
                  />
                  <div
                     class="px-8 py-32 relative z-10 w-full border bg-gray-100 opacity-0 hover:opacity-90"
                  >
                     <h1
                        class="text-xl font-bold text-gray-900 mb-3"
                     >
                        Color Guessing Game
                     </h1>
                     <p class="leading-relaxed">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                     </p>
                  </div>
               </div>
            </a>
            <a href="https://asean-shop.netlify.app/" class="lg:w-1/2">
               <div class="flex relative m-2 border rounded">
                  <g-image
                     alt="gallery"
                     class="absolute inset-0 w-full h-full object-cover object-center"
                     src="../../static/images/projects/asean-shop.png"
                  />
                  <div
                     class="px-8 py-32 relative z-10 w-full border bg-gray-100 opacity-0 hover:opacity-90"
                  >
                     <h1
                        class="text-xl font-bold text-gray-900 mb-3"
                     >
                        Asian E-Commerce
                     </h1>
                     <p class="leading-relaxed">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                     </p>
                  </div>
               </div>
            </a>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "Project"
};
</script>

<style>
</style>