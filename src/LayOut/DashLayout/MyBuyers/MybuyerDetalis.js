import React from 'react';

const MybuyerDetalis = ({buyer, i, setDeleteBuyer}) => {
    const { buyer:buyeremail, email, phone, location } = buyer;
    return (
        <tr>
        <th>{i + 1}</th>
        
        
        <td>{buyeremail}</td>
        <td>Phone : {phone}<br />
        Meeting Location : {location}
        
            
        </td>
        
        <td>
        <label onClick={()=> setDeleteBuyer(buyer)} htmlFor="BuyerDeletation" className="btn btn-warning mx-2">Delete</label>
            
        </td>
    </tr>
    );
};

export default MybuyerDetalis;