import React, { ReactElement } from 'react';

import ContactPage from '../shared/ContactPage';
import DarkModeToggle from '../shared/DarkModeToggle';
import Footer from '../shared/Footer';
import IntroPage from '../shared/IntroPage';
import MenuBar from '../shared/MenuBar';
import PeoplePage from '../shared/PeoplePage';
import StoryPage from '../shared/StoryPage';
import WorkPage from '../shared/WorkPage';
import { device } from '../../theme';
import styled from 'styled-components';
import { useThemeContext } from '../../providers/ThemeProvider';

// 최상위 컨테이너
const Container = styled.div`
  width: 100vw;
  
  display: flex;
  align-self: stretch;
  flex-direction: column;
  justify-content: bottom;
  align-items: center;
  
`;

const MenubarEmptyBox = styled.div`
  height: 100px;
  width: 100vw;

  @media ${device.tablet} {
    height: 70px;
  }    
`;

function Intro(): ReactElement {
  const { changeThemeType } = useThemeContext();

  return (
    <Container>
      <MenuBar/>
      <DarkModeToggle onClick={(): void => changeThemeType()} />
      <MenubarEmptyBox/>
      <IntroPage/>
      <StoryPage id="story"/>
      <WorkPage id="work"/>
      <PeoplePage id="people"/>
      <ContactPage id="contact"/>
      <Footer/>
    </Container>
  );
}

export default Intro;
