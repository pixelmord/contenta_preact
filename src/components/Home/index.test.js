import { h } from 'preact';
import { expect } from 'chai';

import Home from './index';

describe('components/Home', () => {
  it('should show the Home text', () => {
    const home = <Home/>;
    expect(home).to.contain(<h1>Home</h1>);
    expect(home).to.contain('is Home');
  });
});
