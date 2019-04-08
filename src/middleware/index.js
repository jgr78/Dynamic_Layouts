import {JSON_URL} from '../config/properties'

export const getItemsData = async() => {
    try {
        const response = await fetch(JSON_URL);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
        return [];
    }
}


  