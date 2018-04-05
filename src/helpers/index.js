//@flow

/**
 * format
 * @param  {number} number the number to be converted
 * @return {string}        number with commas
 */
export const addCurrencyCommas = (number: number = 0) =>
    number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
