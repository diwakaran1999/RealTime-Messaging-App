import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import React, { useState } from 'react';
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";

const Login = () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleClick = () => setShow(!show);
    const submitHandler = () => { };

    return (
        <VStack spacing='5px'>
            
            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder='Enter Your Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>

            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={show?"text":"password"}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show?"Hide":"Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button
                colorScheme="blue"
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler}
            >
                Login
            </Button>
            <Button
                variant="solid"
                colorScheme="red"
                width="100%"
                onClick={() => {
                    setEmail("guest@mail.com");
                    setPassword("9876543210");
                }}
            >
                Get Guest User Credentials
            </Button>
        </VStack>
    );
};

export default Login
