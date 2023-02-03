import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Box, Button } from "@chakra-ui/react";

export const WorkTime = ({ workDays }) => {
  const days = ['MN: ', 'TU: ', 'WE: ', 'TH: ', 'FR: ', 'SA: ', 'SU: '];
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  const [modalOpened, setModalOpened] = useState(false);

  const handleClick = () => {
    setModalOpened(!modalOpened);
  };
  const indexUpdater = () => {
    if (currentDay === 0) {
      return 6;
    }
    return currentDay - 1;
  };
  return (
    <>
      <Button 
      alignItems={'start'}
      justifyContent={'start'}
      variant='link'
      color={'#111111'} 
      fontWeight={'medium'}
      fontSize={{base: 'xs', md: 'sm', lg: 'md'}}
      lineHeight={{base: '1.33', md: '1.35', lg: 'short'}} 
      type="click" onClick={handleClick}>
        {workDays[indexUpdater()].from && workDays[indexUpdater()].to
          ? `${workDays[indexUpdater()]?.from} - ${
              workDays[indexUpdater()]?.to
            }`
          : 'Closed'}
      </Button>

      {modalOpened && (
        <>
          <Box 
          position={'absolute'}
          zIndex={'2'}
          top={{base: '115%'}}
          display={'inline-block'}
          p={'12px'}
          border={'1px solid #f59256'}
          minW={'120px'}
          cursor={'pointer'}
          bgColor={'#FFFFFF'}
          boxShadow={'4px 4px 8px rgba(0, 0, 0, 0.25)'}
          borderRadius={'8px'}
          fontWeight={'medium'}
          fontSize={'12px'}
          lineHeight={'1.34'}
          >
            {workDays.map(({ from, to, isOpen }, index) => (
              <Box key={nanoid()}>
                {isOpen ? (
                  <Box 
                  display={'flex'}
                  justifyContent={'space-between'}>
                    <p>{days[index]} </p>
                    <p>
                      {from}-{to}
                    </p>
                  </Box>
                ) : (
                  <Box
                  display={'flex'}
                  justifyContent={'space-between'}>
                    <p>{days[index]} </p>
                    <p>Closed</p>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </>
      )}
    </>
  );
};