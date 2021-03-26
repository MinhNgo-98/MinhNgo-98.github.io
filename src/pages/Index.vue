<template>
   <Layout>
      <Hero-Section />
      <div class="container px-5 pt-24 mx-auto flex flex-wrap">
         <about-section />
         <skill-section />
         <project-section />
         <contact-section />
      </div>
   </Layout>
</template>

<script>
import Layout from "../layouts/Default";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillSection from "../components/SkillSection"
import ProjectSection from '../components/ProjectSection.vue';
import ContactSection from "../components/ContactSection.vue";

export default {
   metaInfo: {
      title: "Home",
   },
   components: {
      Layout,
      HeroSection,
      AboutSection,
      SkillSection,
      ProjectSection,
      ContactSection,
   }
}
</script>


      ProjectSection    ContactSection