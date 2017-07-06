import { h } from 'preact';
import styled from 'styled-components';
import { colors } from '../style/constants';

const Title = styled.div`
  float: left;
  margin: 0;
  padding: 0 15px;
  font-size: 24px;
  line-height: 56px;
  font-weight: 400;
  color: ${colors.pageHeaderTitle};
`;

const PageHeaderTitle = ({ children, ...props }) => (
  <Title {...props}>{ children }</Title>
);

export default PageHeaderTitle;
