import { h, Component } from 'preact';
import MainContent from '../../components/MainContent';

export default class RecipePage extends Component {

  // Note: `id` comes from the URL, courtesy of our router
  render({ id }) {
    return (
      <MainContent>
        <h1>ID: {id}</h1>
      </MainContent>
    );
  }
}
