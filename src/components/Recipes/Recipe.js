import { h, Component } from 'preact';

export default class Recipe extends Component {

  // Note: `id` comes from the URL, courtesy of our router
  render({ id }) {
    return (
      <div>
        <h1>ID: {id}</h1>
      </div>
    );
  }
}
