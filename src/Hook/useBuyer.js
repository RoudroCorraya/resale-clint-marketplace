import { useEffect, useState } from "react"

const useBuyer = (email) =>{
    const [buyer, setbuyer] = useState(false);
    useEffect(()=>{
        fetch(`https://resale-server-market.vercel.app/users/buyer/${email}`)
        .then(res=> res.json())
        .then(data => {
            console.log('databuyer', data);
            setbuyer(data.isbuyer);
        })
    }, [email])
    return [buyer];
}

export default useBuyer;