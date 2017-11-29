class DashboardController {
  constructor(UserModelService, moment) {
    'ngInject';
    this.name = 'dashboard';
    this.UserModelService = UserModelService;

    this.getAlbums();
    this.moment = moment;
  }

  getAlbums() {
    this.UserModelService.getAlbums({
      id: this.UserModelService.currentFacebook.id,
      action: 'albums'
    }).then(res => {
      this.albums = res;
    });
  }
}

export default DashboardController;
