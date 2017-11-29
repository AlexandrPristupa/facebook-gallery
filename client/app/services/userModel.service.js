export class UserModelService {
  constructor($q, $auth, $cookies, $state, UserModel) {
    'ngInject'

    this.$q = $q;
    this.$auth = $auth;
    this.$cookies = $cookies;
    this.$state = $state;
    this.Model = UserModel;

    this.currentFacebook = {};
  }

  login(token) {
    this.$cookies.put('_auth', token.access_token);
  }

  logout() {
    this.$cookies.put('_auth', '');
    this.$state.go('home');
  }

  isLogin() {
    return !!this.$cookies.get('_auth');
  }

  getToken() {
    return this.$cookies.get('_auth')
  }

  setCurrent() {
    return this.Model.me().$promise
               .then((res) => {
                 this.currentFacebook = res;
                 return res;
               }, (error) => {

               });
  }

  getAlbums(data) {
    return this.$q((resolve, reject) => {
      return this.Model.album(data).$promise
                 .then((res) => {
                   resolve(this.getAlbumsFields(res.data));
                 });
    });
  }

  getAlbumsFields(data) {
    return this.$q((resolve, reject) => {
      let albums = [];
      data.map(album => {
        return this.Model.album({
          id: album.id,
          fields: 'cover_photo,name,count,updated_time'
        }).$promise
                   .then((album) => {
                     if (!album.cover_photo) {
                       return false;
                     }
                     return this.getPhoto({
                       id: album.cover_photo.id,
                       fields: 'picture'
                     }).then((picture) => {
                       albums.push({
                         ...album,
                         cover_photo: picture
                       });
                     });
                   });
      });
      resolve(albums);
    });
  }

  getAlbum(data) {
    return this.$q((resolve, reject) => {
      return this.Model.album(data).$promise
                 .then((res) => {
                   if (!data.action) {
                     return resolve(res);
                   }

                   resolve(this.getPhotos(res.data));
                 });
    });
  }

  getPhotos(data) {
    return this.$q((resolve, reject) => {
      let photos = [];
      data.map(photo => {
        return this.getPhoto({
          id: photo.id,
          fields: 'picture,name,images'
        }).then((res) => {
          photos.push(res);
        });
      });
      resolve(photos);
    });
  }

  getPhoto(data) {
    return this.Model.photo(data).$promise;
  }

  authenticate(provider) {
    return this.$auth.authenticate(provider).then(res => {
      this.login(res);
    });
  }
}
