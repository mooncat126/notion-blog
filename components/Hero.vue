<template>
  <div
    class="flex h-full text-center text-gray-700 dark:text-gray-200 m-8"
  >
    <div class="m-auto">
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        Hey, I'm
        <span class="text-blue-600 dark:text-blue-500">{{
          $config.devName
        }}</span>
        <p>A Chinese {{ $config.devRole }} .</p>
      </h1>
      <p
        class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
      >
        {{ $config.devDescription }}
      </p>
    </div>
  </div>
</template>
<style>
.typewriter {
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.15em solid orange;
  animation: typewriter 4s steps(40) 1s 1 normal both,
    blink-caret 0.75s step-end infinite;
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
</style>
