export enum BREAKPOINTS {
    MOBILE = "30rem",
    TABLET = "48rem",
    DESKTOP = "64rem",
    LARGE_DESKTOP = "120rem",
}

export const tabletAndUp = `@media (min-width: ${BREAKPOINTS.TABLET})`
export const desktopAndUp = `@media (min-width: ${BREAKPOINTS.DESKTOP})`
export const largeDesktopAndUp = `@media (min-width: ${BREAKPOINTS.LARGE_DESKTOP})`
