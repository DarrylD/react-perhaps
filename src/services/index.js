// @flow
import axios from 'axios'

/**
    NOTE example
    type fetchExampleTypes = {
        title?: string,
    }
    export const fetchExampleForm = async (options: fetchExampleTypes) => {
        console.log(options)

        const payload = {
            //we make the stuff we need here
        }

        try {
            const { data } = await axios.post(`${HOST}/v1.1`, payload)

            return data
        } catch (error) {
            return error
        }
    }
*/
