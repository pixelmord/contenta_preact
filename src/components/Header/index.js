import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.pcss';

export default class Header extends Component {
  render() {
    return (
      <header class={style.header}>
        <h1>Umami</h1>
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </header>
    );
  }
}
