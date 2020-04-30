    import OfferRideModal from "../components/OfferRideModal.js";
    import OfferedRidesTable from "../components/OfferedRidesTable";
    
    let getOfferedRides = async () => {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        const response = await fetch(
          `https://5bb634f6695f8d001496c082.mockapi.io/api/posts`,
          options
        );
        const json = await response.json();
        // console.log(json)
        return json;
      } catch (err) {
        console.log("Error getting documents", err);
      }
    };
    
    let RidesOffered = {
      render: async () => {
        let offeredRides = await getOfferedRides();
        let view = `
          <div class="columns">
            <div class="column">
              <div class="level" style="margin-top:1.5rem;justify-content: flex-end;">
                ${OfferRideModal.render()}
              </div>
              ${OfferedRidesTable.render(offeredRides)} 
            </div>
          </div>`;
        return view;
      },
      after_render: async () => {
        OfferedRidesTable.after_render();
        OfferRideModal.after_render();
      },
    };
    
    export default RidesOffered;
    