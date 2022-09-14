import { tracked, cached } from '@glimmer/tracking';

export default class SomeUtil {
  @tracked foo = 'foo';
  @tracked bar = 'bar';

  constructor(foo, bar) {
    this.foo = foo;
    this.bar = bar;
  }

  @cached get foobar() {
    return `${this.foo} ${this.bar}`;
  }
}
