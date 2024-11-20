<template>
    <h1>Boekverzameling</h1>
    <nav>
        <ul>
            <li><RouterLink :to="{name: 'overview'}">Home</RouterLink></li>
        </ul>
    </nav>
    <RouterView />
</template>
