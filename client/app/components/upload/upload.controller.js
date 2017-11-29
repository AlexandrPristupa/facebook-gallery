class UploadController {
  constructor(UserModelService, Upload, $scope, $mdToast) {
    'ngInject';
    this.name = 'upload';
    this.UserModelService = UserModelService;
    this.Upload = Upload;
    this.$scope = $scope;
    this.$mdToast = $mdToast;

    this.albums = [];
    this.log = '';

    this.getAlbums();

    $scope.file = [];
    this.oldFile = [];
    $scope.$watch('files', () => {
      this.upload($scope.files);
    });
  }

  getAlbums() {
    this.UserModelService.getAlbums({
      id: this.UserModelService.currentFacebook.id,
      action: 'albums'
    }).then(res => {
      this.albums = res;
    });
  }

  upload(files) {
    if (files && files.length) {
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        if (!file.$error) {
          this.oldFile.push(file);
          this.Upload.upload({
            url: 'https://graph.facebook.com/v2.8/' + this.selectedAlbum + '/photos',
            method: 'POST',
            data: {
              source: file
            }
          }).then(function (resp) {
          }, (res) => {
            this.$mdToast.show(
                this.$mdToast.simple()
                    .textContent(res.data.error.message)
                    .position('top right')
                    .hideDelay(5000)
                    .theme('error')
            );
          }, (evt) => {
            let progressPercentage = parseInt(100.0 *
                evt.loaded / evt.total);
            file.progress = progressPercentage;
          });
        }
      }
    }
  }
}

export default UploadController;
