import { useEffect, useState } from "react";
import Container from '../../shared/components/Box/Container';
import Section from '../../shared/components/Box/Section';
import { Heading } from '@chakra-ui/react';
import Loader from 'components/Loader/Loader';
import { getFriends } from "./getFriends";
import { OurFriendsList } from "../../components/OurFriendsList/OurFriendsList";

const OurFriends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await getFriends({});
        setFriends(response);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetch();
  }, []);


  return (
  <Container>
    <Section 
    pt={{base: '58px', md: '94px', lg: '72px'}}>
      <Heading
      	as={'h1'}
        fontSize={{base:'24px', md:'48px'}}
        fontWeight={'bold'}
        lineHeight={'short'}
        textAlign={'center'}
        mb={{base:'40px', md:'45px', xl:'60px'}}>
          Our friend</Heading>
         {<Loader/> && <OurFriendsList friends={friends} />}
    </Section>
  </Container>
  )
};

export default OurFriends;



