import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer" + process.env.REACT_APP_STRIPE_APP_KEY,
    }
}

const REACT_APP_DEV_KEY= "http://localhost:1337"

export const fetchDataFromAPI = async (url) => {
    try {
        const {data} = await axios.get(REACT_APP_DEV_KEY + url, {
            Authorization: "bearer" + process.env.REACT_APP_STRIPE_APP_KEY
        });
        return data;
    } catch (err) {
        console.log(err)
        return err;
    }
}
