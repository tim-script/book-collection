<template>
    <h1>Boekverzameling</h1>
    <nav>
        <ul>
            <li><RouterLink :to="{name: 'overview'}">Home</RouterLink></li>
            <li><RouterLink :to="{name: 'create'}">Toevoegen</RouterLink></li>
        </ul>
    </nav>
    <RouterView />
</template>
