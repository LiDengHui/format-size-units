/**
 * Formats a size in kilobytes (KB) to a more readable unit (KB, MB, GB, etc.)
 *
 * @param kb - The size in kilobytes.
 * @returns The formatted size string with the appropriate unit.
 */
function formatSizeUnits(kb: number): string {
    const units = ['KB', 'MB', 'GB', 'TB', 'PB']
    let unitIndex = 0

    while (kb >= 1024 && unitIndex < units.length - 1) {
        kb /= 1024
        unitIndex++
    }

    return `${kb.toFixed(2)} ${units[unitIndex]}`
}

export default formatSizeUnits
