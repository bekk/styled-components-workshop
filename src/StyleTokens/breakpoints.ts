/**
 * Breakpoints er eit sett forhandsdefinerte verdiar for skjermstorleik
 * der nettlesaren skal vise ulik styling, for eksempel for mobilar og desktop.
 * "Knekkpunktet" er den minste verdien som stylinga skal gjelde frå.
 * */
export enum BREAKPOINTS {
    MOBILE = "30rem",
    TABLET = "48rem",
    DESKTOP = "64rem",
    LARGE_DESKTOP = "120rem",
}

export const tabletAndUp = `@media (min-width: ${BREAKPOINTS.TABLET})`;
export const desktopAndUp = `@media (min-width: ${BREAKPOINTS.DESKTOP})`;
export const largeDesktopAndUp = `@media (min-width: ${BREAKPOINTS.LARGE_DESKTOP})`;
