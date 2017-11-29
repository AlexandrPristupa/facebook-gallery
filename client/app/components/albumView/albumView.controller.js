class AlbumViewController {
  constructor($stateParams, UserModelService) {
    'ngInject';
    this.name = 'albumView';
    this.$stateParams = $stateParams;
    this.UserModelService = UserModelService;

    this.photos = [];

    this.getAlbum();
    this.getAlbumPhotos();
  }

  getAlbum() {
    this.UserModelService.getAlbum({
      id: this.$stateParams.id,
    }).then(res => {
      this.album = res;
    });
  }

  getAlbumPhotos() {
    this.UserModelService.getAlbum({
      id: this.$stateParams.id,
      action: 'photos'
    }).then(res => {
      this.photos = res;
    });
  }
}

export default AlbumViewController;
