let Home = {
  render: async (loggedUser = {}) => {
    const { username = undefined } = loggedUser;
    if (true) {
      // TODO: Update condition to load only if user not logged in --> if(!username)
      let view = /*html*/ `
          <div id="landing-banner-parent" class="box">
              <article class="media">
              <div class="media-content">
                  <img id="landing-banner" src="resources/banner2.jpg"/>
              </article>
          </div>
          <div id="landing-tiles-parent">
                  <div class="tile is-horizontal is-12">
                      <div class="tile">
                          <div class="tile is-parent box">
                              <article class="tile is-child notification is-info">
                                  <p id="landing-tile-heading" class="title is-size-5">Why Carpool?</p>
                                  <p class="subtitle is-size-6"><em> "It&apos;s a fast, fun, affordable way to commute. While carpooling isn&apos;t new. 
                                      A cost-effective alternative to rideshare services, Carpool lets you choose to drive or ride with people already going your way."</em></p>
                              </article>
                          </div>
                      </div>
                      <div class="tile">
                          <div class="tile is-parent box">
                              <article class="tile is-child notification has-background-grey has-text-white">
                                  <div class="content">
                                      <p id="landing-tile-heading" class="title is-size-5">Questions about Carpool?</p>
                                      <p class="subtitle is-size-6"><em>Visit Frequently asked questions here.</em></p>
                                  </div>
                              </article>
                          </div>
                      </div>
                      <div class="tile">
                          <div class="tile is-parent box">
                              <article class="tile is-child notification is-success">
                                  <div class="content">
                                      <p id="landing-tile-heading" class="title is-size-5">Need help?</p>
                                      <p class="subtitle is-size-6"><em>Contact us here.</em></p>
                                  </div>
                              </article>
                          </div>
                      </div>
                  </div>
              <div class="tile">
                      <div class="tile is-horizontal is-12">
                          <div id="landing-tiles-quote" class="tile is-parent box">
                              <article class="tile is-child notification is-danger">
                              <p class="columns is-centered is-vcentered"><strong><em>"~ The more you use car pool, The more you are taking steps to make today's pollution situation cool."</em></strong></p>
                              </article>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        `;
      return view;
    }
  },
  after_render: async () => {},
};

export default Home;
