import React from 'react';

const BuyerConfirmModal = ({deleteBuyer, closeModal, deletaitation}) => {
    const {name, _id, role} = deleteBuyer;
    return (
        <div>
             {/* Put this part before </body> tag */}
             <input type="checkbox" id="Delete" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{role} Deletation Process</h3>
                    <p className="py-4">{name}'s Data Will be deleted permanently</p>
                    <div className="modal-action">
                    <label onClick={closeModal} className="btn btn-warning">Cancel</label>
                        <label onClick={()=>deletaitation(deleteBuyer)} className="btn btn-error">Delete</label>
                       
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyerConfirmModal;