<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/articles', limit: 5, sort: [{ date: -1 }] }
</script>

<template>
    <div class="grid md:grid-cols-4">
        <div class="md:col-span-3 px-6 py-2 grid md:grid-cols-2 gap-4">
            <ContentList :query="query" v-slot="{ list }">

                <div class="card cursor-pointer" v-for="article in list" :key="article._path">
                    <NuxtLink :to="article._path">
                        <div class="card__title">{{ article.title }}</div>
                        <NuxtImg :src="article.coverImage" alt="" />
                        <div class="card__content">{{ article.description }}</div>
                        <!-- <div class="flex gap-1 items-center my-2">
                            <Icon name="uil:comment-alt" />
                            <DisqusCount :identifier="article._path" />
                        </div> -->
                    </NuxtLink>
                </div>

            </ContentList>

        </div>
        <div class="py-6 flex flex-col gap-2 items-center">
            <div class="py-4">
                <img src="../assets/images/avatar.jpg" alt="" class="rounded-full w-32 p-1 border-4 border-blue-700" />
            </div>
            <div class="px-6 py-2">
                <h4 class="text-2xl font-semibold mb-1 text-center text-pretty">About Dave</h4>
                <p> My expertise lies in HTML, CSS, and JavaScript, and I work closely with clients
                    to deliver high-quality, accessible, and user-friendly digital solutions. My passion for
                    accessibility and usability drives me from ideation to execution. </p>

                    <ul class="flex items-center gap-4 justify-center">
                        <li><a href="https://github.com/codewithdave-xyz" target="_blank" rel="noopener" class="text-3xl social__link github"><Icon name="mdi:github" /><span class="sr-only">GitHub</span></a></li>
                        <li><a href="https://www.linkedin.com/in/davehillteesvalley/" target="_blank" rel="noopener" class="text-3xl social__link linkedin"><Icon name="mdi:linkedin" /><span class="sr-only">LinkedIn</span></a></li>
                        <li><a href="https://mastodon.social/@codewithdave" target="_blank" rel="me noopener" class="text-3xl social__link mastodon"><Icon name="mdi:mastodon" /><span class="sr-only">Mastodon</span></a></li>
                    </ul>
            </div>

        </div>
    </div>
</template>

<style scoped>
.card {
    border: 1px solid rgb(151, 151, 151);
    border-radius: 0.5rem;
    padding: 1rem;

    img {
        aspect-ratio: 16 /9;
        border-radius: 0.5rem;
        margin-block-end: 1rem;
    }
}

.card__title {
    font-size: 1.75rem;
    font-weight: 600;
    margin-block-end: 0.5rem;
}

.linkedin {
    color: #0a66c2;
}

.mastodon {
    color: #6364FF;
}

.social__link:hover svg {
    transform: scale(1.2);
}

@media (width < 600px) {
    .card {
        flex-direction: column;
    }
}
</style>