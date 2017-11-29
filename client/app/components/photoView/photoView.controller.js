class PhotoViewController {
  constructor($stateParams, UserModelService) {
    'ngInject';
    this.name = 'photoView';

    this.$stateParams = $stateParams;
    this.UserModelService = UserModelService;

    this.getPhoto();
  }

  getPhoto() {
    this.UserModelService.getPhoto({
      id: this.$stateParams.id,
      fields: 'images,name,album,name_tags'
    }).then(res => {
      this.photo = res;
    });
  }
}

export default PhotoViewController;
