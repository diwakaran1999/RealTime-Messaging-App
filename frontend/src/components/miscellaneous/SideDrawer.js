import { Menu, MenuButton } from '@chakra-ui/menu';
import { Tooltip } from '@chakra-ui/tooltip';
import { Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import React, { useState } from 'react'

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="lightblue"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="3px"
      >
        <Tooltip
          label="Search Users to chat"
          hasArrow
          placement='bottom-end'>
          <Button variant="ghost">
          <i class="fas fa-search"></i>
          <Text display={{base:"none",md:"flex"}} px='4'>Search User</Text>
        </Button>
        </Tooltip>

        <Text fontSize="2xl" fontFamily="Work sans">
          RealTime Messaging
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon/>
            </MenuButton>
          </Menu>
        </div>
      </Box>
    </>
  );
};

export default SideDrawer;
