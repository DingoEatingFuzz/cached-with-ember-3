import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import SomeUtil from 'cached-with-ember-3/some-util';

export default class ApplicationController extends Controller {
  @tracked foobar = new SomeUtil('hello', 'world');
}
