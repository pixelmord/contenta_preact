import { h } from 'preact';
import { expect } from 'chai';

import Recipe from './Recipe';

describe('containers/Recipe', () => {

  it('should show the id of the user passed to it', () => {
    const recipe = <Recipe id="12345"/>;
    expect(recipe).to.contain(<h1>ID: 12345</h1>);
  });

});
