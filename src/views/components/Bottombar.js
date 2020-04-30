let Bottombar = {
  render: async () => {
    let view = /*html*/ `
        <div class="container">
        <div class="columns">
          <div class="column">
            <div class="buttons"><a class="button" href="#"><img src="resources/twitter.svg" alt=""></a><a class="button" href="#"><img src="resources/facebook-f.svg" alt=""></a><a class="button" href="#"><img src="resources/instagram.svg" alt=""></a></div>
          </div>
          <div class="column has-text-centered has-text-right-tablet">
            <p class="subtitle is-6">&copy; 2020 Student Carpool. All rights reserved.</p>
          </div>
        </div>
      </div>
        `;
    return view;
  },
  after_render: async () => {},
};

export default Bottombar;
