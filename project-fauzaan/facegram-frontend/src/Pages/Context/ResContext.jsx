import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ResContext = createContext({
    userData: null,
    message: '',
    token: '',
    loading: true,
    gantiToken: () => {},
    masukanUser:() => {},
    setMessage: () => {},
});

export const ResProvider = ({children}) => {
    const [token, setToken] = useState('');
    const [userData, setUserData] = useState(null); 
    const [message, setMsg] = useState('');

    const gantiToken = (token) => {
        setToken(token);
    }

    const masukanUser = (userdata) => {
        setUserData(userdata)
    }

    const setMessage = (pesan) => {
        setMsg(pesan);
        setTimeout(() => {
            setMsg("")
        }, 4000);
    }

    const [loading, setloading] = useState(true);

    useEffect(() => {
        async function InitilisasiData() {
            const TokenUser = localStorage.getItem('token');

            if (TokenUser) {
                try {
                    await axios.get('http://localhost:8000/api/user', {
                        headers: {
                            Authorization: `Bearer ${TokenUser}`
                        }
                    }).then((response) => {
                        masukanUser(response.data);
                    }); 
                } catch (eror) {
                    console.log(eror)
                }
            }
            setloading(false);
        }

        InitilisasiData();
    }, [])

    return <ResContext.Provider value={{token, userData, message, loading, masukanUser, setMessage, gantiToken}}>{children}</ResContext.Provider>;
}