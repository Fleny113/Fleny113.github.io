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

        <p class="pretty-wrap">
            <i>Hey!</i> I'm <span class="name">Fleny</span>, I'm a 16 years old guy that really interested in technology.
            <br>
            I'm from <span class="italy">Italy</span>
            <br>
            Programming 💻 is one of my main passion.
        </p>
    </section>

    <section class="projects large-left small-centered">
        <h2>Projects</h2>

        <p class="pretty-wrap">
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

    <div class="projects-wrapper large-right small-centered">
        <section>
            <h3><a class="link" href="https://top.gg/bot/960222248353026069" target="_blank">Bestemmiometro</a></h3>

            <p class="pretty-wrap">
                Bestemmiometro is a <span class="discord">Discord</span> bot that counts how
                many blasphemies are sent in a
                message and create a ranking
                of the discord server with the most blasphemies sent.
                <br>
                This bot is not created only by me, but also by
                <a class="link" href="https://antogamer.it" target="_blank">Antogamer</a>
                and
                <a class="link" href="https://github.com/tsClauz" target="_blank">Clauz</a>
                <br>
                The bot only support italian as languages and we don't have plan to support more languages
            </p>
        </section>

        <section>
            <h3><a class="link" href="https://github.com/Fleny113/EndpointMapper" target="_blank">EndpointMapper</a></h3>

            <p class="pretty-wrap">
                EndpointMapper is a library for <span class="csharp">ASP.NET Core</span> to map methods in a class as
                minimal
                APIs endpoints while keeping it as easy as possible to use while still having the advantages of auto binding
                the
                native ASP.NET Core approach provides
            </p>
        </section>

        <section>
            <h3><a class="link" href="https://github.com/Fleny113/Hexus" target="_blank">Hexus</a></h3>

            <p class="pretty-wrap">
                Hexus is a Process Manager written using <span class="csharp">C#</span>. Currently it's in a really early
                stage,
                it technically works but it's not usable at all as the only way to control the processes is to use the REST
                API
                the daemon exposes via a unix socket (or http port) using a tool like cURL.
                <br>
                This project is heavily inspired by
                <a class="link" href="https://github.com/Unitech/pm2" target="_blank">pm2</a>
            </p>
        </section>

        <section>
            <h3><a class="link" href="https://github.com/Debianissimo">Debianissimo</a></h3>

            <p class="pretty-wrap">
                Debianissimo is the porting of Ordissimo os to any computer, it was initially born as a joke and currently
                is not very active. The only way we maintain the project is via an install-script on our github
                <br>
                This project is not maintained only by me, but also by
                <a class="link" href="https://vinchethescript.github.io/" target="_blank">Vinche</a>
                mainly and some other people
                <br>
                This project is italian only
            </p>
        </section>
    </div>

    <section class="contacts large-left small-centered">
        <h2>Contacts</h2>

        <p class="pretty-wrap">
            You can contact me via
            <a class="link discord" href="https://discord.com/users/498434550347726850" target="_blank">Discord</a>,
            with <a class="link telegram" href="https://t.me/fleny113" target="_blank">Telegram</a> or via
            <a class="link email" href="mailto:fleny113@outlook.com" target="_blank">email</a>
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
    margin-bottom: 50px;
}

.projects {
    position: relative;
    top: -7.5vh;

    grid-row: 2;
}

.projects-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    grid-row: 3;
}

.contacts {
    grid-row: 4;
}

.name {
    color: transparent;

    background: linear-gradient(to top right, hsl(254 69% 79%), hsl(258 87% 63%));
    background-clip: text;

    letter-spacing: 1.25px;
}

.italy {
    color: transparent;

    background: linear-gradient(to right, hsl(350 100% 44%) 35%, hsl(0 0% 100%) 35% 60%, hsl(130 98% 19%) 60%);
    background-clip: text;
}

.csharp {
    /* Color from the Visual Studio Code C# extension logo */
    color: hsl(253 67% 66%);
}

.typescript {
    /* Color from the typescript logo */
    color: hsl(211 60% 48%);
}

.javascript {
    /* Color from the javascript logo */
    color: hsl(53 93% 54%);
}

.python {
    /* Color from the python logo */
    color: hsl(48 100% 65%);
}

.vue {
    /* Color from the vuejs logo */
    color: hsl(153 62% 54%);
}

.svelte {
    /* Color from the svelte logo */
    color: hsl(15 100% 50%);
}

.discord {
    /* Color from the discord branding */
    color: hsl(235 86% 65%);
}

.telegram {
    /* Color from the telegram branding */
    color: hsl(199, 73%, 49%);
}

.email {
    color: hsl(340, 100%, 37%);
}
</style>
