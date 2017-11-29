class NavbarController {
  constructor(UserModelService) {
    'ngInject';
    this.name = 'navbar';
    this.UserModelService = UserModelService;
  }

  logout() {
    this.UserModelService.logout();
  }
}

export default NavbarController;
