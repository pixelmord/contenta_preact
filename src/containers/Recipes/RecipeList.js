import { h, Component } from 'preact';
import { injectState } from "freactal";


class RecipeList extends Component {
  componentDidMount() {
    this.props.effects.getRecipes();
  }
  render() {
    const {
      state: {
        isLoading: isLoading,
        recipes: recipes
      }
    } = this.props;
    console.log(recipes);

    if (isLoading > 0) {
      return (
        <div>{"Loading..."}</div>
      );
    }
    return (
      <div>
        {recipes.length > 0 && recipes.map(recipe => (<div key={recipe.id}>{recipe.title}</div>))}
      </div>
    );
  }
}

export default injectState(RecipeList);
