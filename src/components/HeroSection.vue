<template>
      <div class="hero h-full flex flex-col">
      <div
        class="flex flex-col lg:flex-row justify-between pt-16 md:pt-24 lg:pt-32 xl:pt-44 container-fluid mx-auto w-10/12"
      >
        <div
          class="text-4xl flex justify-center font-bold w-full lg:w-3/5 text-center lg:text-left"
        >
          <div class="w-full pt-4 md:pb-4">
            <h1
              class="text-blue-700 my-8 leading-tight font-bold text-2xl sm:text-4xl uppercase"
            >
              Minh Huan Ngo
            </h1>
            <h2
              class="font-light mb-4 xl:ml-8 uppercase text-xl xl:text-2xl leading-tight"
            >
              Medieninformatik Student
            </h2>
            <h2
              class="font-light my-4 xl:ml-20 uppercase text-xl xl:text-2xl leading-tight"
            >
              Full Stack Web Developer
            </h2>
            <h2
              class="font-light my-4 xl:ml-8 uppercase text-xl xl:text-2xl leading-tight"
            >
              Passionate about creation
            </h2>
            <div class="mt-5 xl:ml-8 mt-8 flex justify-center lg:justify-start">
                <a href="#" class="flex items-center rounded-sm shadow-lg justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-black hover:text-gray-100 hover:bg-gray-900 md:py-4 md:text-lg md:px-10">
                  CV herunterladen
                </a>
            </div>
          </div>
        </div>
        <div class="mt-8 xl:mt-0">
          <g-image
            src="../../static/images/developer.svg"
            alt="hero"
            class="mx-auto xl:mx-0 w-3/5 sm:w-1/2 lg:w-full lg:pl-12 xl:w-10/12"
          />
        </div>
      </div>
      <div class="bg-black flex-grow flex justify-center items-center pt-12 pb-16 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-24 xl:py-28">
        <div class="flex flex-col justify-center">
          <h2
            class="text-white text-center font-regular uppercase text-xl sm:text-2xl mb-2 sm:mb-4 leading-tight"
          >
            Kontakt & Links
          </h2>
          <div class="flex">
            <a href="tel: 01786236208" class="bg-white p-2 sm:p-4 m-2 sm:m-4 hover:bg-gray-100">
              <g-image
                src="../../static/images/contact/phone-call.svg"
                alt="phone"
                width="35px"
                height="35px"
                class="contact-icon"
              />
            </a>
            <a href="mailto:mh98ngo@gmail.com" class="bg-white p-2 sm:p-4 m-2 sm:m-4 hover:bg-gray-100">
              <g-image
                src="../../static/images/contact/email.svg"
                alt="email"
                width="35px"
                height="35px"
                class="contact-icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/minhngo-3598/" class="bg-white p-2 sm:p-4 m-2 sm:m-4 hover:bg-gray-100">
              <g-image
                src="../../static/images/contact/linkedin.svg"
                alt="linkedin"
                width="35px"
                height="35px"
                class="contact-icon"
              />
            </a>
            <a href="https://github.com/MinhNgo-98" class="bg-white p-2 sm:p-4 m-2 sm:m-4 hover:bg-gray-100">
              <g-image
                src="../../static/images/contact/github.svg"
                alt="github"
                width="35px"
                height="35px"
                class="contact-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>