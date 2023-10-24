import React, { useEffect } from 'react'
import {
    Container,
    Box,
    Text,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from '@chakra-ui/react'
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Homepage = () => {
    const history = useHistory;

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));
        
        if (user) {
            history.push("/chats");
        }
    }, [history]);


    return (
        <Container maxW="xl" centerContent>
            <Box
                display='flex'
                justifyContent='center'
                p={3}
                bg={"white"}
                w="100%"
                m="40px 0 15px 0"
                borderRadius="1g"
                borderWidth="1px"
            >
                <Text fontSize="3xl" fontFamily="Work sans" color="black">
                    RealTime Messaging
                </Text>
            </Box>
            <Box bg="white" w="100%" p={4} borderRadius="1g" color='black' borderWidth="1px">
                <Tabs variant='soft-rounded' colorScheme='purple'>
                    <TabList mb="1em">
                        <Tab width="50%">Login</Tab>
                        <Tab width="50%">Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    );
};

export default Homepage;
