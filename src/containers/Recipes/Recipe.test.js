import { h } from 'preact';
import { expect } from 'chai';

import RecipePage from './RecipePage';

describe('containers/RecipePage', () => {

  it('should show the id of the user passed to it', () => {
    const recipePage = <RecipePage id="12345"/>;
    expect(recipePage).to.contain(<h1>ID: 12345</h1>);
  });

});
