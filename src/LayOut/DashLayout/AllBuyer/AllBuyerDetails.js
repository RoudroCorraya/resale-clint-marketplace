import React from 'react';

const AllBuyerDetails = ({buyer, i, setDeleteBuyer}) => {
    const { name, email } = buyer;
    return (
        <tr>
        <th>{i + 1}</th>
        
        <td>{name}<br />
            
        </td>
        <td>{email}</td>
        
        <td>
        <label onClick={()=> setDeleteBuyer(buyer)} htmlFor="Delete" className="btn btn-warning mx-2">Delete</label>
            
        </td>
    </tr>
    );
};

export default AllBuyerDetails;