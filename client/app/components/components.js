import angular from 'angular';
import Layout from './layout/layout';
import Main from './main/main';
import Home from './home/home';
import About from './about/about';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import AlbumView from './albumView/albumView';
import PhotoView from './photoView/photoView';
import TabsMenu from './tabsMenu/tabsMenu';
import Navbar from './navbar/navbar';
import Upload from './upload/upload';

let componentModule = angular.module('app.components', [
  Main,
  Layout,
  Home,
  About,
  Login,
  Dashboard,
  AlbumView,
  PhotoView,
  TabsMenu,
  Navbar,
  Upload,
])

.name;

export default componentModule;
