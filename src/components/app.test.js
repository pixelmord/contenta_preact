import { h, render } from 'preact';
import { route } from 'preact-router';
import { expect } from 'chai';

import App from './app';

describe('App', () => {
  let scratch;

  beforeAll( () => {
    scratch = document.createElement('div');
    (document.body || document.documentElement).appendChild(scratch);
  });

  beforeEach( () => {
    scratch.innerHTML = '';
  });

  afterAll( () => {
    scratch.parentNode.removeChild(scratch);
    scratch = null;
  });


  describe('routing', () => {
    it('should render the homepage', () => {
      render(<App />, scratch);

      expect(scratch.innerHTML).to.contain('Home');
    });

    /*		it('should render /profile', async () => {
			render(<App />, scratch);
			route('/profile');

			await sleep(1);

			expect(scratch.innerHTML).to.contain('Profile: me');
		});*/

    it('should render /recipes/:id', async () => {
      render(<App />, scratch);
      route('/recipes/12345');

      await sleep(1);

      expect(scratch.innerHTML).to.contain('ID: 12345');
    });
  });
});
