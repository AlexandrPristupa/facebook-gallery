class LoginController {
  constructor(UserModelService, $state) {
    'ngInject';
    this.name = 'login';
    this.UserModelService = UserModelService;
    this.$state = $state;
  }

  login(provider) {
    this.UserModelService.authenticate(provider).then(() => this.$state.go('dashboard'));
  }
}

export default LoginController;
