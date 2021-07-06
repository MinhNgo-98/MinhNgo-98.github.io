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
               class="w-36 h-36 rounded-full mb-8 xl:mb-0"
            />
         </div>
         <div class="flex-1 sm:ml-6 text-justify text-lg">
           Hi, my name is Minh Ngo. 
           <br>
           I'm 23 years old and recently graduated with a bachelor's degree in Computer Science & Media at the University of Applied Sciences Dresden (HTW Dresden). My goal is to become a skilled Full Stack web developer who is able to put any of his ideas into practice.
           <br>
           I'm a hungry and hard-working learner and I'm excited to have a look into the professional world of web development.
            So feel free to contact me about anything, if you are interested or have any questions.
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "About",
};
</script>