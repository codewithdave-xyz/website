

<template>
<ContentDoc v-slot="{ doc }">
      <article>
        <h1>{{ doc.title }}</h1>
        <a href="#comments" class="flex gap-1 items-center my-4">
        <Icon name="uil:comment-alt" />
        <DisqusCount :identifier="doc._path" />
      </a>
        <!-- <NuxtImage :to="doc.coverImage" alt="" class="w-16"/> -->
         <img :src="doc.coverImage" />
        <ContentRenderer :value="doc" />
      </article>
      <div id="comments">
      <DisqusComments :identifier="doc._path" />
    </div>
    </ContentDoc>
   
</template>

<style scoped>
h1 {
  @apply text-4xl mb-4;
}

img {
  aspect-ratio: 16 /9;
}

#layout {
  @apply my-8
}
</style>
