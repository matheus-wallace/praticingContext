import Container from '@/Components/Container';
import ToogleThemeButton from '@/Components/ToogleThemebutton';
import React from 'react';

const Home = () => {
  return (
    <section>
      <Container>
        Home :(
        <ToogleThemeButton>Mudar thema</ToogleThemeButton>
      </Container>
    </section>
  );
};

export default Home;
