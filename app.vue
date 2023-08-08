<script setup lang="ts">
useSeoMeta({
    title: "Fleny",
    description: "Fleny website",
    ogTitle: "Fleny",
    ogDescription: "Fleny website",
    ogImage: "/favicon.jpg",
    ogUrl: "https://fleny113.github.io",
    twitterTitle: "Fleny",
    twitterDescription: "Fleny website",
    twitterImage: "/favicon.jpg",
    twitterCard: "summary_large_image"
});

useHead({
    htmlAttrs: {
        lang: "en"
    },
    link: [
        {
            rel: "icon",
            type: "image/jpg",
            href: "/favicon.jpg"
        }
    ]
});
</script>

<template>
    <section class="large-center small-centered">
        <h1>About me</h1>

        <p>
            <i>Hey!</i> I'm <span class="name">Fleny</span>, I'm a 16 years old guy that really interested in technology.
            <br>
            I'm from <span class="italy">Italy</span>
            <br>
            Programming 💻 is one of my main passion.
        </p>
    </section>

    <section class="projects large-left small-centered">
        <h2>Projects</h2>

        <p class="balance-wrap">
            Mainly my projects are in
            <a class="link csharp" href="https://dotnet.microsoft.com" target="_blank">C# (.NET)</a>
            and
            <a class="link typescript" href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> /
            <a class="link javascript" href="https://developer.mozilla.org/docs/Web/JavaScript"
                target="_blank">Javascript</a>
            but I also use
            <a class="link python" href="https://python.org" target="_blank">Python</a>
            sometimes. I do Backend projects for the most part, but I also use
            <a class="link vue" href="https://vuejs.org" target="_blank">Vue</a>
            or
            <a class="link svelte" href="https://svelte.dev" target="_blank">Svelte</a>
            when it comes to Frontend stuff
        </p>
    </section>
</template>

<style scoped>
section {
    background-color: hsla(0 0% 84% / 0.125);
    backdrop-filter: blur(4px);

    border: 1px solid hsla(0 0% 98% / 0.125);
    border-radius: 25px;
    box-shadow: 0 0 14px 3px black;

    text-align: center;

    line-height: 1.6;
}

section:last-child {
    margin-bottom: 200px;
}

.projects {
    position: relative;
    top: -7.5vh;
}

.name {
    color: transparent;

    background: linear-gradient(to top right, hsl(254, 69%, 79%), hsl(258, 87%, 63%));
    background-clip: text;

    letter-spacing: 1.25px;
}

.italy {
    color: transparent;

    background: linear-gradient(to right, hsl(350, 100%, 44%) 35%, hsl(0, 0%, 100%) 35% 60%, hsl(130, 98%, 19%) 60%);
    background-clip: text;
}

.csharp {
    /* Color from the Visual Studio Code C# extension logo */
    color: hsl(253, 67%, 66%);
}

.typescript {
    /* Color from the typescript logo */
    color: hsl(211, 60%, 48%);
}

.javascript {
    /* Color from the javascript logo */
    color: hsl(53, 93%, 54%);
}

.python {
    /* Color from the python logo */
    color: hsl(48, 100%, 65%);
}

.vue {
    /* Color from the vuejs logo */
    color: hsl(153, 62%, 54%);
}

.svelte {
    /* Color from the svelte logo */
    color: hsl(15, 100%, 50%);
}
</style>
