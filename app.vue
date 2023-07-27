<template>
    <section class="about">
        <h1>About me</h1>

        <p>
            <i>Hey!</i> I'm <span class="name">Fleny</span>, I'm a 16 years old guy that really interested in technology.
            I'm from Italy
            <br>
            Programming 💻 is one of my main passion.
        </p>
    </section>

    <section class="projects">
        <h1>Projects</h1>

        <p>
            WIP
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

.about {
    grid-column: 2 / 4;
    grid-row: 1;
}

.projects {
    grid-column: 1 / 3;
    grid-row: 2;
}

.name {
    color: transparent;

    background: linear-gradient(to top right, hsl(254, 69%, 79%), hsl(258, 87%, 63%));
    -webkit-background-clip: text;
    background-clip: text;
}
</style>
