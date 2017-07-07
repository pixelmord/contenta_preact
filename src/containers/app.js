import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './Header';
import Home from './Home';
import RecipePage from './Recipes/RecipePage';
import RecipeListPage from './Recipes/RecipeListPage';

export default class App extends Component {
  /** Gets fired when the route changes.
   *  @param {Object} e    "change" event from
   *     [preact-router](http://git.io/preact-router)
   *  @param {string} e.url  The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  }

  render () {
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/"/>
          <RecipeListPage path="/recipes"/>
          <RecipePage path="/recipes/:id"/>
        </Router>
      </div>
    );
  }
}
