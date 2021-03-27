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
         <div class="flex-1 sm:ml-6 text-justify">
            Mein Name ist Minh Huan Ngo. Ich bin 22 Jahre alt und studiere Medieninformatik an der HTW Dresden. Vor kurzem gab ich meine Bachelorarbeit zum Thema "Untersuchung der Vorteile/Nachteile von statischen Websitegeneratoren und Vergleich verschiedener Implementierungen" ab.
            <br/>
            Ich interessiere mich sehr für Webentwicklung und suche eine Stelle sowohl in Frontend- als auch Backend-Entwicklung, um praktische Erfahrung zu sammeln. Es macht mir großen Spaß neue Dinge zu lernen undd meine Fähigkeiten zu verbessern.
            <br/>
            Wenn Sie also einen ehrgeizigen Entwickler suchen, dann sollten Sie auf jeden Fall mit mir Kontakt aufnehmen.
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "About",
};
</script>