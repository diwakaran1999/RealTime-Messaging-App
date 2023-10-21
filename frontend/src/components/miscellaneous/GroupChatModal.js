import { FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Button } from "@chakra-ui/react";
import { ChatState } from '../../Context/ChatProvider';

const GroupChatModal = ({children}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [groupChatName, setGroupChatName] = useState();
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const toast = useToast();
    const { user, chats, setChats } = ChatState();

    const handleSearch = () => { };

    return (
    <>
        <span onClick={onOpen}>{children}</span>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
                    <ModalHeader
                        fontFamily="Work Sans"
                        display="flex"
                        justifyContent="center"
                    >Create Group</ModalHeader>
            <ModalCloseButton />
            <ModalBody display="flex" flexDir="column" alignItems="center">
                <FormControl>
                    <Input
                        placeholder="Group Name" mb={3}
                        onChange={(e) => setGroupChatName(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <Input
                        placeholder="Add Users eg:Dev, Prince, Sahil" mb={1}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </FormControl>
                {/* selected users */}
                {/* render searched users         */}
            </ModalBody>

            <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
            </Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    </>
    );
};

export default GroupChatModal
