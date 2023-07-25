import { useEffect, useState } from "react"

const useSeller = (email) =>{
    const [seller, setIsseller] = useState(false);
    
     useEffect(()=>{
        fetch(`http://localhost:5000/users/seller/${email}`)
        .then(res => res.json())
        .then(data => {
            console.log('hook seller',data);
            setIsseller(data.isSeller);
        })
     }, [email]);
     return [seller];
}

export default useSeller;