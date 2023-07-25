import React from 'react';

const ConfirmationModal = ({deleteSeller, closeModal, deletaitation}) => {
    const {role, name, _id} = deleteSeller;
    return (
        <div>
            {/* The button to open modal */}
            

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="Delete" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{role} Deletation Process</h3>
                    <p className="py-4">{name}'s Data Will be deleted permanently</p>
                    <div className="modal-action">
                    <label onClick={closeModal} className="btn btn-warning">Cancel</label>
                        <label onClick={()=>deletaitation(deleteSeller)} className="btn btn-error">Delete</label>
                       
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;