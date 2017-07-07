import { h, Component } from 'preact';
import { Link } from 'preact-router';
import PageHeader from '../../components/PageHeader';
import PageHeaderTitle from '../../components/PageHeaderTitle';
import PageHeaderMenu from '../../components/PageHeaderMenu';

export default class Header extends Component {
  render() {
    return (
      <PageHeader>
        <PageHeaderTitle>Umami</PageHeaderTitle>
        <PageHeaderMenu>
          <Link href="/">Home</Link>
          <Link href="/recipes">Recipes</Link>
        </PageHeaderMenu>
      </PageHeader>
    );
  }
}
