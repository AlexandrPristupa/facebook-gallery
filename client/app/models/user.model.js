export default function ($resource, $cookies) {
  'ngInject'

  const facebookApiUrl = 'https://graph.facebook.com/v2.11/';

  let model = $resource(
      facebookApiUrl + ':id/:action',
      {
        id: '@id',
        action: '@action'
      },
      {
        me: {
          method: 'GET',
          params: {
            action: 'me',
            fields: 'name'
          }
        },
        album: {
          method: 'GET',
          params: {
          }
        },
        photo: {
          method: 'GET',
          params: {
          }
        },

      }
  );

  return model;
}
