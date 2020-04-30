import $ from "jquery";

let OfferRideForm = {
  render: function () {
    let view = `
        <form id="offerRide">
            <div class="field">
                <div class="control">
                    <input class="input" type="text" name="from" placeholder="Source.." required>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input class="input" type="text" name="to" placeholder="Destination.." required>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input class="input" type="text" name="datetime" placeholder="YYYY/MM/DD">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input class="input" type="number" min="1" name="seats" placeholder="Number of seats...">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <textarea class="textarea" name="instructions" placeholder="Instructions..."></textarea>
                </div>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <input class="button is-link" type="submit" value="Submit"/>
                </div>
                <div class="control">
                    <button class="button is-link is-light">Cancel</button>
                </div>
            </div>
        </form>
    `;
    return view;
  },
  onSubmit: () => {
    console.log("submitted");
    const formData = $("#offerRide").serializeArray();
    console.log(formData);
  },
  after_render: function () {
    const vm = this;

    // Load date time picker
    $("input[name='datetime']").datetimepicker();

    var autocomplete = new google.maps.places.Autocomplete(
      $("input[name='from']")[0]
    );
    var autocomplete2 = new google.maps.places.Autocomplete(
      $("input[name='to']")[0]
    );

    // Adding submit event listener to the form
    const form = document.getElementById("offerRide");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      vm.onSubmit();
    });
  },
};

export default OfferRideForm;
