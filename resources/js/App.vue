<template>
    <h1>Boekverzameling</h1>
    <nav>
        <ul>
            <li><RouterLink :to="{name: 'overview'}">Home</RouterLink></li>
            <li><RouterLink :to="{name: 'author-overview'}">Auteurs</RouterLink></li>
            <li><RouterLink :to="{name: 'author-create'}">Auteur toevoegen</RouterLink></li>
            <li><RouterLink :to="{name: 'book-create'}">Boek toevoegen</RouterLink></li>
        </ul>
    </nav>
    <RouterView />
</template>

<style>
    table {
        border-collapse: collapse;
    }
    td {
        border: 1px solid #ccc;
        padding: .25rem;
    }
    div.form div + div {
        margin-top: 1rem;
    }
    label {
        display: block;
        margin-bottom: .25rem;
    }
</style>
