import OfferRideForm from "./OfferRideForm.js";

let OfferRideModal = {
  render: function () {
    let view = `
        <div class="modal" id="rides-offered">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                  <p class="modal-card-title">Ride details</p>
                  <button class="delete" aria-label="close" onClick="hideModal()"></button>
              </header>
              <section class="modal-card-body">
                ${OfferRideForm.render()}
              </section>
            </div>
        </div>
        <button class="button is-primary" onClick="showModal()">Offer ride</button>
    `;
    return view;
  },
  after_render: async () => {
    OfferRideForm.after_render();
  },
};

window.showModal = () => {
  document.getElementById("rides-offered").classList.add("is-active");
};
window.hideModal = () => {
  document.getElementById("rides-offered").classList.remove("is-active");
};

export default OfferRideModal;
