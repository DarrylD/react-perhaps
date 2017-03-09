//@flow

// eslint-disable-next-line
const isDev = process.env.NODE_ENV !== 'production'

const localServerUrl = 'http://localhost:7000'
const remoteServerUrl = 'http://someremoteserver.com'

//TODO hackish, refine later
export const apiUrl = window.location.port === '3000' //if we're local...
    ? localServerUrl
    : remoteServerUrl
