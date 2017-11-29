export function runBlock($transitions, UserModelService, $state, $q) {
  'ngInject';

  $transitions.onStart({}, function ($transition$) {
    let toState = $transition$.$to();

    if (toState.name !== 'home' && !UserModelService.isLogin()) {
      event.preventDefault();
      $state.go('home');
    }

    if (toState.name === 'home' && UserModelService.isLogin()) {
      event.preventDefault();
      $state.go('dashboard');
    }
    if(!$state.is('home') && _.isEmpty(UserModelService.currentFacebook)) {
      return $q.resolve(UserModelService.setCurrent());
    }

  });
}
