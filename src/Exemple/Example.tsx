import axios from 'axios';
import {useEffect, useState} from "react";

export const MyComponent = () => {
    const [response,setResponse]= useState('')
    useEffect(() => {
        axios.get('/api/data')
            .then(response => {
                setResponse(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div> data : {response} </div>
    );
};
