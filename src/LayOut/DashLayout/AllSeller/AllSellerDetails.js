import React from 'react';

const AllSellerDetails = ({seller, i, setDeleteSeller}) => {
    const { name, email } = seller;
    return (
        <tr>
            <th>{i + 1}</th>
            
            <td>{name}<br />
                
            </td>
            <td>{email}</td>
            
            <td>
                
                <label onClick={()=> setDeleteSeller(seller)} htmlFor="Delete" className="btn btn-warning mx-2">Delete</label>
                
            </td>
        </tr>
    );
};

export default AllSellerDetails;