import { useEffect } from "react"
import { useParams } from "react-router";

export const ItemPage = (props) => {
    const params = useParams();

    useEffect(() => {
        const itemShortname = params.shortname;

        // console.log(itemShortname)
        return () => console.log(`unmounted: ${itemShortname}`);
    }, [params])

    return ('item page')
}
