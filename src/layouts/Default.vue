<template>
  <div
    class="content-wrapper bg-white font-normal leading-normal flex flex-col min-h-screen text-black"
  >
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components:{
    Header,
    Footer,
  },
  data(){
    return{
    }
  },
}

</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>