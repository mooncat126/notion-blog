<template>
  <div class="mt-20">
    <div
      class="font-semibold flex justify-center items-center text-base font-semibold text-gray-600 dark:text-gray-300"
    >
      <h2 class="text-center text-lg">{{ title }}</h2>
    </div>

    <div class="wrapper-small my-5 dark:text-white">
      <form
        name="contact-form"
        method="post"
        class="w-full"
        data-netlify="true"
      >
        <!-- hide input data -->
        <input type="hidden" name="form-name" value="contact-form" />

        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/2 px-4 mb-5">
            <label for="fullName" class="block mb-2 text-copy-primary">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              required="required"
              class="dark:bg-dark-light dark:border-dark-light dark:text-gray-600 block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 mb-2 p-4"
            />
          </div>
          <div class="w-full md:w-1/2 px-4 mb-5">
            <label for="email" class="block mb-2 text-copy-primary">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required="required"
              class="dark:bg-dark-light dark:border-dark-light dark:text-gray-600 block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 mb-2 p-4"
            />
          </div>
          <div class="w-full px-4 mb-5">
            <label for="Message" class="block mb-2 text-copy-primary">
              Message
            </label>
            <textarea
              id="Message"
              rows="6"
              type="text"
              name="Message"
              placeholder="Enter your message"
              required="required"
              class="dark:bg-dark-light dark:border-dark-light dark:text-gray-600 block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 mb-2 p-4"
            ></textarea>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <button
            id="contact-submit"
            type="submit"
            class="bg-black w-full md:w-auto flex items-center justify-center px-10 md:px-24 py-3 shadow-md hover:bg-gray-800 rounded-lg text-white"
          >
            <IconMail class="text-white h-6 w-5 mr-3 dark:text-white" />
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Contact Me",
    },
  },
  data() {
    return {
      message: "",
    };
  },
};
</script>
