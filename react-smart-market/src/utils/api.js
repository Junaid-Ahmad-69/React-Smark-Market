import axios from "axios";


const params = {
    headers: {
        Authorization: "Bearer" + process.env.REACT_APP_STRIPE_APP_KEY,
    }
}

export const fetchDataFromAPI = async (url) => {
    try {
        const data = await axios.get(process.env.REACT_APP_DEV_KEY + url, params);
        return data;
    } catch (err) {
        console.log(err)
        return err;
    }
}
