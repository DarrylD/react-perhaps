//@flow

/**
 * deciding if we should render mobile variant, more so for adaptive design over responsive
 * @type {Boolean}
 */
export const isDev = window.innerWidth <= 500

/**
 * format
 * @param  {number} number the number to be converted
 * @return {string}        number with commas
 */
export const addCurrencyCommas = (number:number=0) =>
    number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
