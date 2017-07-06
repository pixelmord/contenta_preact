import { h } from 'preact';
import styled from 'styled-components';

const Main = styled.main`
	padding: 0 20px;
	min-height: 100%;
	width: 100%;
`;

const MainContent = ({ children, ...props }) => (
  <Main {...props}>{ children }</Main>
);

export default MainContent;
