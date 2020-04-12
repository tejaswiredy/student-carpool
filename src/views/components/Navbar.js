import AccountMenu from './AccountMenu.js';
import RidesMenu from './RidesMenu.js';

let Navbar = {
    render: async (loggedInUser) => {
      loggedInUser = {username:'tejaswi'};
      if(!true)
      {
        let view =  /*html*/`
             <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/#/">
                            <img class="logo" src="https://www.freelogodesign.org/file/app/client/thumb/a80be70d-b48c-471d-9c29-ff5ac5d6ab3d_200x200.png">
                        </a>
                        <a role="button" id="nav-toggle" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarBasicExample" class="navbar-menu is-active" aria-expanded="false">
                        <div class="navbar-start">
                          <a class="navbar-item" href="/#/">
                            Home
                          </a>
                          <a class="navbar-item" href="/#/about">
                            About
                          </a>
                          ${RidesMenu(loggedInUser)}
                          <a class="navbar-item" href="/#/landing">
                            LandingPage
                          </a>
                        </div>
                        <div class="navbar-end">
                          ${AccountMenu(loggedInUser)}
                        </div>
                    </div>
                </div>
            </nav>
        `
        return view
      }
      else
      {
        let view =  /*html*/`
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="/#/">
                    <img class="logo"
                        src="https://www.freelogodesign.org/file/app/client/thumb/a80be70d-b48c-471d-9c29-ff5ac5d6ab3d_200x200.png">
                    <img id="logo-title" src="resources/Navbar-Title.png">
                </a>
                <a role="button" id="nav-toggle" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu is-active" aria-expanded="false">
              <div class="navbar-start">
                <a class="navbar-item" href="/#/about">
                      About
                </a>
              </div>
              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <a class="button is-primary">
                      <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          <div>
        </nav>`
        return view
      }

    },
    after_render: async () => { }

}

export default Navbar;