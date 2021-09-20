import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Homepage = () => {
    const location = useLocation();

    useEffect(() => {
        const filters = {};

        [...new URLSearchParams(location.search).entries()].forEach(entry => {
            console.log(entry)
        })

        console.log(filters)
    }, [location])

    return ('Homepage')
}