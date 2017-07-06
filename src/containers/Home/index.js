import { h, Component } from 'preact';
import MainContent from '../../components/MainContent';

export default class Home extends Component {
  render() {
    return (
      <MainContent>
        <h1>Home</h1>
        <p>This is Home.</p>
      </MainContent>
    );
  }
}
