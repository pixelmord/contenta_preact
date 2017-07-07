import { h, Component } from 'preact';
import { provideState, softUpdate } from "freactal";
import superagent from 'superagent';
import superagentJsonapify from 'superagent-jsonapify';

import MainContent from '../../components/MainContent';
import RecipeList from './RecipeList';

superagentJsonapify(superagent);

const wrapComponentWithState = provideState({
  initialState: () => ({
    isLoading: 0,
    recipes: []
  }),
  effects: {
    setRecipesPending: softUpdate((state, recipesPending) => ({ isLoading: (recipesPending) ? state.isLoading + 1 : state.isLoading - 1})),
    getRecipes: effects => effects.setRecipesPending(true)
      .then(() => superagent
        .get(`${process.env.REACT_APP_JSONAPI}/recipes`)
        .query({
          'sort': '-createdAt',
          'page[limit]': '12'
        }))
      .then(result => result.body)
      .then(({ data }) => effects.setRecipesPending(false).then(() => data))
      .then(data => state => Object.assign({}, state, { recipes: data }))
  }
});

class RecipeListPage extends Component {

  render() {
    return (
      <MainContent>
        <h1>Recipe List</h1>
        <RecipeList/>
      </MainContent>
    );
  }
}

export default wrapComponentWithState(RecipeListPage);
