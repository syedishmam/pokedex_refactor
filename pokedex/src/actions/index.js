export const displayAbout = (boolean) => {
    return {
        type: 'DISPLAY_ABOUT',
        payload: boolean
    }
}

export const displayBaseStats = (boolean) => {
    return {
        type: 'DISPLAY_BASE_STATS',
        payload: boolean
    }
}