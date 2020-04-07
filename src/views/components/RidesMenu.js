const RidesMenu = (loggedInUser = {}) => {
  const { username } = loggedInUser;
  if (username) {
    return `
      <a class="navbar-item" href="/#/">
        Available rides
      </a>
      <a class="navbar-item" href="/#/">
        Request a ride
      </a>
    `;
  }
  return '';
}

export default RidesMenu;