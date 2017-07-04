import { h, Component } from 'preact';
import style from './style.pcss';

export default class Home extends Component {
  render() {
    return (
      <div class={style.home}>
        <h1>Home</h1>
        <p>This is Home.</p>
      </div>
    );
  }
}
