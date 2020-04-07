const AccountMenu = (loggedUser = {}) => {
  const { username = undefined }= loggedUser;
  if (username) {
    return `
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          <span class="icon"><i class="fa fa-user-circle"></i></span><span> ${username}</span>
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Profile
          </a>
          <a class="navbar-item">
            My trips
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Logout
          </a>
        </div>
      </div>
    `;
  }
  return `
    <div class="navbar-item">
      <div class="buttons">
        <a class="button is-primary" href="/#/register">
          <strong>Sign up</strong>
        </a>
        <a class="button is-light" href="/#/login">
          Log in
        </a>
      </div>
    </div>`;
}

export default AccountMenu;