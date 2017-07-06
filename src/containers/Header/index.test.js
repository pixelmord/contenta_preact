import { h } from 'preact';
import { expect } from 'chai';

import Header from './index';

describe('containers/Header', () => {

  it('should show the correct navigation links', () => {
    const header = <Header/>;
    expect(header).to.contain(<a href='/'>Home</a>);
  });

});
