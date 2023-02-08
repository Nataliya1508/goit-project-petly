import { Box, Heading } from "@chakra-ui/react";
import useVisualViewportHeight from "hooks/useVisualViewportHeight";
import { homeBg1Laptop, homeBg1Mobile, homeBg1Tablet, homeBg2Laptop, homeBg2Mobile, homeBg2Tablet, homeBg3Laptop, homeBg4Laptop } from "media";
import { Container, Section } from "shared/components";
// import { useBreakpointValue } from '@chakra-ui/react';


const Home = () => {
  const headerHaightMobile = 74;
  const headerHaightTablet = 96;
  const headerHaightLaptop = 88;
  const vieportHaight = useVisualViewportHeight(); 
  const sectionHaightMobile = `${100-(headerHaightMobile/vieportHaight)*100}vh`;
  const sectionHaightTablet = `${100-(headerHaightTablet/vieportHaight)*100}vh`;
  const sectionHaightLaptop = `${100-(headerHaightLaptop/vieportHaight)*100}vh`;
    
  return (    
    <Section 
    overflow='hidden' 
    position='relative' 
    h={{base:sectionHaightMobile, md:sectionHaightTablet, xl:sectionHaightLaptop}} 
    bg='accent.background'  
    pt={{base:'44px', md:'64px', xl:'72px'}} 
    pb={{base:'0', md:'0', xl:'0'}}
    m={'0 auto'} 
    >
      <Container maxW='1280px'>      
        <Heading 
        position='relative' 
        as='h1' 
        zIndex='3' 
        fontSize={{base:'32px', md:'68px'}} 
        lineHeight={{base:'short',md:'1.47'}} 
        width={{base:'280px',md:'588px'}} 
        // mb={{base:'58px', md:'118px', xl:'0'}}
        >
          Take good care of your small pets
        </Heading>
        <Box 
        position='absolute' 
        zIndex='1' 
        bottom={{base:'-14px', md:'-80px', xl:'-129px'}} 
        right={{base:'-214px', md:"-572.76px", xl:'164px'}} 
        bgImage={{base:homeBg2Mobile, md:homeBg2Tablet, xl:homeBg2Laptop}} 
        bgRepeat='no-repeat' 
        bgSize={{ base:'contain'}} 
        h={{base:'470px', md:'1098px', xl:'538px'}} 
        w={{base:'620px', md:'1449px', xl:'1178px'}} 
        transform={{md:'matrix(0.99, -0.12, 0.12, 0.99, 0, 0)', xl:'none'}} 
        />
        <Box 
        position='absolute' 
        zIndex='1' 
        bottom={{xl:'0'}} 
        right={{xl:'-49px'}} 
        bgImage={{xl:homeBg4Laptop}} 
        bgRepeat='no-repeat' 
        bgSize={{ base:'contain'}} 
        h={{xl:'393px'}} 
        w={{xl:'511px'}} 
        />
        <Box 
        position='absolute' 
        zIndex='1' 
        bottom={{xl:'509px'}} 
        right={{xl:'476.07px'}} 
        bgImage={{xl:homeBg3Laptop}} 
        bgRepeat='no-repeat' 
        bgSize={{ base:'contain'}} 
        h={{xl:'89px'}} 
        w={{xl:'91.93px'}}  
        />
        <Box 
        position='absolute' 
        zIndex='2' 
        bottom={{base:'0', xl:'-132px'}} 
        right={{base:'0', md:'61px', xl:'5px'}} 
        bgImage={{base:homeBg1Mobile, md:homeBg1Tablet, xl:homeBg1Laptop}} 
        h={{base:'337px', md:'715px', xl:'640px'}} 
        w={{base:'320px', md:'645px', xl:'590px'}} 
        bgRepeat='no-repeat' 
        bgPosition='bottom' 
        bgSize={{base:'contain'}}
        ></Box>
      
      </Container>
    </Section> 
  );
};

export default Home;
