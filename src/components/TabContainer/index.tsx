import { SyntheticEvent } from 'react';

import { Box, Tab, Tabs } from '@mui/material';

import Flex from '@@components/Flex';
import { TabContainerProps } from '@@components/TabContainer/types';

function TabContainer({ tabs, selectedIndex, onChangeTab }: TabContainerProps) {
  const handleChange = (_: SyntheticEvent, newValue: number) => {
    onChangeTab(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={selectedIndex} onChange={handleChange}>
          {tabs.map(({ label }, index) => (
            <Tab key={index} value={index} label={label} />
          ))}
        </Tabs>
      </Box>
      <Flex.Vertical className='tw-mt-4'>{tabs[selectedIndex]?.content}</Flex.Vertical>
    </Box>
  );
}

export default TabContainer;
