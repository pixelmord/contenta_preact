import { h } from 'preact';
import styled from 'styled-components';
import { colors } from '../style/constants';

const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 56px;
  padding: 0;
  background: ${colors.pageHeader};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  z-index: 50;
`;

const PageHeader = ({ children, ...props }) => (
  <Header {...props}>{ children }</Header>
);

export default PageHeader;
