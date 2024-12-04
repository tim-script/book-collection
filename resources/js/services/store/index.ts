import { Ref, computed, ref } from 'vue'
import { deleteRequest, getRequest, patchRequest, postRequest } from '../http'

export interface StoreItem {
    id: number,
}

export const storeModuleFactory = <T extends StoreItem>(moduleName: string) => {
    // The first cast is necessary; see
    // https://github.com/vuejs/core/issues/2136#issuecomment-908269949
    const state = <Ref<T[]>>ref(<T[]>[])

    const getters = {
        all: () => computed(() => state.value),
        sorted: (compare: (item1: T, item2: T) => number) => computed(() => state.value.toSorted(compare)),
        filter: (filter: (item: T) => boolean) => computed(() => state.value.filter(filter)),
        byId: (id: number) => computed(() => state.value.find(item => item.id == id)),
    }

    const setters = {
        all: (items: T[]) => {
            state.value = items
        },

        update: (item: T) => {
            const index = state.value.findIndex(storeItem => storeItem.id == item.id)
            if (index != -1)
                state.value[index] = item
        },

        delete: (id: number) => {
            const index = state.value.findIndex(item => item.id == id)
            if (index != -1)
                state.value.splice(index, 1)
        },
    }

    const actions = {
        getAll: async () => {
            try {
                const {data} = await getRequest(moduleName)
                setters.all(data)
            } catch (error) {
                throw error
            }
        },

        create: async (item: T) => {
            try {
                const {data} = await postRequest(moduleName, item)
                setters.all(data)
            } catch (error) {
                throw error
            }
        },

        update: async (item: T) => {
            try {
                await patchRequest(moduleName + '/' + item.id, item)
                setters.update(item)
            } catch (error) {
                throw error
            }
        },

        delete: async (id: number) => {
            try {
                await deleteRequest(moduleName + '/' + id)
                setters.delete(id)
            } catch (error) {
                throw error
            }
        },
    }

    return {
        getters,
        actions,
    }
}
