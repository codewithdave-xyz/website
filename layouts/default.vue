<script setup>
useHead({
  htmlAttrs: {
    lang: 'en',
  }
})
</script>


<template>
<div class="face">
  <header class="py-3 px-4 flex flex-col gap-4 md:flex-row md:justify-between items-center border-b">
    <!-- <a href="/" class="text-3xl text-blue-700">Dave Hill</a> -->
    <div class=" flex items-center flex-col text-gray-600 text-2xl cursor-pointer" @click="$router.push('/')">
      <span class="text-blue-800 text-4xl">Dave Hill</span><span class="text-sm text-gray-700">Front-end Developer</span>
        </div>
    <nav>
      <ul class="flex  items-center l gap-4 md:mx-4">
       
        <li><a href="/portfolio" class="py-1 px-2 border rounded hover:bg-blue-700 hover:text-white">Portfolio</a></li>
        <li><a href="/articles" class="py-1 px-2 border rounded hover:bg-blue-700 hover:text-white">Archive</a></li>
        <li><a href="/uses" class="py-1 px-2 border rounded hover:bg-blue-700 hover:text-white">/Uses</a></li>
      </ul>
    </nav>
  </header>
  <div class="container mx-auto my-6">
    <slot />
  </div>
    <footer class="py-2 px-4 flex justify-between">
      <p class="text-sm">Copyright &copy; {{ new Date().getFullYear() }} Dave Hill.</p>
    </footer>
</div>

</template>