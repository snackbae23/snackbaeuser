import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"

export const SnackbaeContext = createContext({});

export const useSnackBae = () => {
    const snack = useContext(SnackbaeContext);
    return snack;
}

export const SnackBaeProvider = (props) => {


    const [allBlogs, setAllBlogs] = useState('');
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        getAllData();
        setTimeout(() => {
            setLoader(false);
          }, 1000);
    }, []);


    //get all blog data
    const getAllData = async () => {
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: "http://13.202.8.14:4000/api/getBlogs",
            headers: {},
        };

        axios
            .request(config)
            .then((response) => {
                setAllBlogs(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <SnackbaeContext.Provider
            value={
                {
                    loader,
                    setLoader,
                    allBlogs,
                    setAllBlogs,
                }
            }>
            {props.children}
        </SnackbaeContext.Provider>
    )
}