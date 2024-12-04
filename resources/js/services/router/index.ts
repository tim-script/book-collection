import { Component } from 'vue'
import {
    RouteLocationAsRelativeGeneric,
    RouteRecordRaw,
    Router,
    createRouter,
    createWebHistory,
    useRoute
} from 'vue-router'

export const createRoute = (name: string, path: string, component: Component) =>
    <RouteRecordRaw>{name, path, component}

export const addRoutes = (routes: RouteRecordRaw[]) => {
    for (const route of routes)
        router.addRoute(route)
}

export const getRouteParam = (name: string) =>
    useRoute().params[name]

export const createRouteLocation = (name: string, id?: number) => {
    const route = <RouteLocationAsRelativeGeneric>{name}

    if (id)
        route.params = {id}

    return route
}

export const goToRoute = (name: string, id?: number) => {
    router.push(createRouteLocation(name, id))
}

export const router = createRouter({
    history: createWebHistory(),
    routes: [],
})
