import React from "react";
import ptchka from '../../assets/icons/ptchka.png'
import {
  Container,
  LeftSection,
  Item,
  Icon,
  IconImg,
  Content,
  RightSection,
  Paragraph,
  List,
  ListItem
} from './styles'; // fayl nomini va yo‘lini moslashtiring

const Consulting = () => {
  return (
    <Container>
      <LeftSection>
        <Item>
          <Icon>
            <IconImg src={ptchka}/>
          </Icon>
          <Content>
            <h3>HIGHEST SUCCESS RATES</h3>
            <p>Lorem Ipsum nibh vel velit auctor aliqu.</p>
          </Content>
        </Item>
        <Item>
          <Icon>
                       <IconImg src={ptchka}/>

          </Icon>
          <Content>
            <h3>WE BUILD EXPERIENCE</h3>
            <p>Lorem Ipsum nibh vel velit auctor aliqu.</p>
          </Content>
        </Item>
      </LeftSection>

      <RightSection>
        <Paragraph>
          There are many variations of passages of lorem ipsum available, but
          the majority have suffered alteration in some form injected humour or
          randomised words which don't look believable.
        </Paragraph>
        <List>
          <ListItem>If you are going to use a passage</ListItem>
          <ListItem>Lorem Ipsum you need to be sure</ListItem>
          <ListItem>There isn’t anything embarrassing</ListItem>
          <ListItem>Hidden in the middle of text</ListItem>
        </List>
      </RightSection>
    </Container>
  );
};

export default Consulting;