import React from 'react';

const DeleteMyproductModal = ({productDeleteinfo, deletaitationProduct, closeModal}) => {
    const {_id, model} = productDeleteinfo;
    return (
        <div>
            <input type="checkbox" id="myproductDelete" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{model}</h3>
                    <p className="py-4">Do you want to delate {model} ?</p>
                    <div className="modal-action">
                    <label onClick={()=>deletaitationProduct(productDeleteinfo)}  htmlFor="myproductDelete" className="btn btn-error">Delete</label>
                        <label onClick={closeModal}  htmlFor="myproductDelete" className="btn">Close!</label>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteMyproductModal;