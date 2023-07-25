import React from 'react';

const MybuyerDelteModal = ({closeModal, deleteMybuyer, deletaitation}) => {
    const {location, phone, buyer:buyeremail} = deleteMybuyer;
    return (
      <div>
          {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="BuyerDeletation" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Buyer Info of {buyeremail}</h3>
    <p className="py-4">Do you want to delete ?</p>
    <div className="modal-action">
      <label onClick={()=>deletaitation(deleteMybuyer)} htmlFor="BuyerDeletation" className="btn">Delete</label>
      <label onClick={closeModal} className="btn btn-warning">Cancel</label>
    </div>
  </div>
</div>
      </div>
    );
};

export default MybuyerDelteModal;