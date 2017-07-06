import { h } from 'preact';
import styled from 'styled-components';

const Menu = styled.nav`
  float: right;
  font-size: 100%;

  a {
    display: inline-block;
    height: 56px;
    line-height: 56px;
    padding: 0 15px;
    min-width: 50px;
    text-align: center;
    background: rgba(255, 255, 255, 0);
    text-decoration: none;
    color: #eee;
    will-change: background-color;

    &:hover,
    &:active {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

const PageHeaderMenu = ({ children, ...props }) => (
  <Menu {...props}>{ children }</Menu>
);

export default PageHeaderMenu;
