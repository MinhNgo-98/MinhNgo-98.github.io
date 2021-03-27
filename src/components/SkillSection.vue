<template>
   <div id="skills" class="md:w-3/4 px-5 py-16 mx-auto">
      <div class="mb-6 lg:mb-0 mx-auto">
         <h1
            class="sm:text-3xl text-2xl font-medium mb-2 font-bold mb-8 uppercase"
         >
            Fähigkeiten
         </h1>
      </div>
      <div class="flex relative pt-10 pb-20 sm:items-center mx-auto">
         <div
            class="flex-grow flex sm:items-center items-start flex-col sm:flex-row"
         >
            <div
               class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center"
            >
            <img src="https://img.icons8.com/wired/64/000000/bottom-navigation-toolbar.png"/>
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
               <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Frontend-Entwicklung
               </h2>
               <ul class="list-disc list-inside leading-relaxed">
                  <li>
                     Praktische Erfahrung durch Werkstudium + Praktikum bei <a href="https://www.phmu.de/">PHMU</a>
                  </li>
                  <li>
                     Sprachen: HTML, CSS, Javascript
                  </li>
                  <li>
                     Frameworks: Vue.js, React.js, TailwindCSS, Bootstrap
                  </li>
               </ul>
            </div>
         </div>
      </div>
      <div class="flex relative pb-20 sm:items-center mx-auto">
         <div
            class="flex-grow flex sm:items-center items-start flex-col sm:flex-row"
         >
            <div
               class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center"
            >
               <img src="https://img.icons8.com/wired/64/000000/server.png"/>
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
               <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Backend-Entwicklung
               </h2>
               <ul class="list-disc list-inside leading-relaxed">
                  <li>
                     Erfahrung aus der Uni und dem Onlinekurs mit Zertifikat <a href="https://certificates.cs50.io/e9f0981c-92c8-43ce-86f6-e18ccd0e657c.png?size=letter">CS50's Web Programming with Python and JavaScript</a>
                  </li>
                  <li>
                     Sprachen: Python, Javascript, MySQL
                  </li>
                  <li>
                     Frameworks: Django
                  </li>
                  <li>
                     Ich habe vor Node.js und MongoDB in der Zukunft zu lernen
                  </li>
               </ul>
            </div>
         </div>
      </div>
      <div class="flex relative pb-20 sm:items-center mx-auto">
         <div
            class="flex-grow flex sm:items-center items-start flex-col sm:flex-row"
         >
            <div
               class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center"
            >
               <g-image src="https://img.icons8.com/wired/64/000000/gear.png"/>
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
               <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Static Site Generators
               </h2>
               <ul class="list-disc list-inside leading-relaxed">
                  <li>
                     Erfahrung aus Anfertigung meiner Bachelorarbeit und aus meinem Praktikum
                  </li>
                  <li>
                     Generatoren: Gridsome, Hugo, Jekyll
                  </li>
               </ul>
            </div>
         </div>
      </div>
      <div class="flex relative pb-10 sm:items-center mx-auto">
         <div
            class="flex-grow flex sm:items-center items-start flex-col sm:flex-row"
         >
            <div
               class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center"
            >
               <g-image src="https://img.icons8.com/wired/64/000000/toolbox.png"/>
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
               <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Tools
               </h2>
               <ul class="list-disc list-inside leading-relaxed">
                  <li>
                     VSCode
                  </li>
                  <li>
                     Figma
                  </li>
                  <li>
                     Git/GitHub
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "Skill"
};
</script>

<style>
</style>