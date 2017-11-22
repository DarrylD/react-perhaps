// @flow
import axios from 'axios'

import {apiUrl} from '../settings';

var api = {};

type FetchSomethingTypes = {
    numberOfStuff:number
};
api.fetchSomething = ({numberOfStuff}:FetchSomethingTypes, mock:?boolean) => new Promise( (resolve, reject) => {

    if (mock) {

        const mockData = [
            {
                apples: 36,
                oranges: 36,
                seeds: 2134,
            },
            {
                apples: 60,
                oranges: 39,
                seeds: 32234,
            },
            {
                apples: 84,
                oranges: 32,
                seeds: 42344,
            },
        ]

        console.warn('Using mock data:', mockData);

        setTimeout(function () {
            return resolve(mockData)
        }, 1000);

    } else {
        return axios.post(`${apiUrl}/fetchSomething`, {numberOfStuff})

            .then(
                ({data}) => resolve(data),
                error => reject(error)
            )
    }

});


export default api
