const RidesMenu = (loggedInUser = {}) => {
  const { username } = loggedInUser;
  if (username) {
    return `
      <a class="navbar-item" href="/#/ridesoffered">
        Rides Offered
      </a>
      <a class="navbar-item" href="/#/">
        Rides Requested
      </a>
    `;
  }
  return '';
}

export default RidesMenu;