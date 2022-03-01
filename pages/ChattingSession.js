import React from 'react'
import { Flex, Box, Button, Spacer, Switch, Input, IconButton, Text, Icon, useToast, Image } from '@chakra-ui/react'
import { CopyIcon, RepeatIcon, AttachmentIcon } from '@chakra-ui/icons'
import styles from "../styles/Home.module.scss"
import "@fortawesome/fontawesome-free/css/all.css";
import { useState } from 'react'
import LeaveModal from "../Components/Modal/LeaveModal"
import EndModal from "../Components/Modal/EndModal"
import { useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
} from '@chakra-ui/react'

export default function ChattingSession() {
    const [container2, setContainer2] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = () => {
        setIsChecked(!isChecked)
    }
    const checked = <Box className={styles.chatMode} color='#737373' fontSize='18px'>
        Chat Mode is on
        <i className="fa-solid fa-circle" />
    </Box>

    const unChecked = < Box as='Text' px={2} color='#737373' fontSize='18px'>
        Enable Chat Mode
    </Box>

    const toast = useToast()
    var token = '5387'
    var Url = `http://localhost:3000/ChattingSession/${token}`
    // const contentClassname=dark?`${styles["darkT"]} ${styles.header}`:styles.header;
    const contentContainername = container2 ? `${styles["dark_row2"]} ${styles.container2}` : styles.container2;
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div className={contentContainername}>
            <Box className={styles.ChattingSession} h='100%'>
                <Flex p={3} h='100%'>
                    <Box p={2} w='70%' h='100%' bg='#fff' className={styles.chatBoard}>
                        <Flex alignItems='center'>
                            <Box>
                                <Switch size='lg' onChange={handleChange} colorScheme='blackAlpha' checked={isChecked} transition='ease-in-out' />
                            </Box>

                            <Box>
                                {isChecked ? checked : unChecked}
                            </Box>

                            <Spacer />
                            <Box>
                                <Button w='2px' borderRadius='50%' bg='#2b3954' className={styles.reloadbtn} color='#fff'>
                                    <RepeatIcon />
                                </Button>
                            </Box>
                        </Flex>
                        <Box p={4} my={3} className={styles.chatArea} borderRadius="lg" w='100%' h='70%' bg='#f2f2f2'>

                        </Box>
                        <Box p={2} className={styles.typingbox} borderRadius='lg' bg='#2b3954'>
                            <Flex alignItems='center'>
                                <Box w='95%' borderRadius='sm' bg='#f2f2f2'>
                                    <Flex h='100%' w='100%'>
                                        <Box>
                                            <Button h='100%' borderRadius='sm' onClick={onOpen} className={styles.attachbtn}>
                                                <AttachmentIcon />
                                            </Button>
                                            <Modal size='lg' isOpen={isOpen} onClose={onClose}>
                                                <ModalOverlay />
                                                <ModalContent>
                                                    <ModalBody textAlign='center' fontSize='18px'>
                                                        <Image priority src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAS-l0LKVeJDOyIHL3xuAEGsXejZI184tSuT8UxiacmjrViGqA' w="100%" h="100%" />
                                                        <Text fontSize='45px' color='#fe9833' fontWeight='600'>Work In Progress</Text>
                                                    </ModalBody>

                                                    <ModalFooter color='#fff' borderTop='1px solid #999' textAlign='center' w='100%' display='flex' justifyContent='center'>
                                                        <Button bg='#fe9833' onClick={onClose} className={styles.closeModal} borderRadius='sm' color='#000' px='95' >
                                                            Close
                                                        </Button>
                                                    </ModalFooter>
                                                </ModalContent>
                                            </Modal>
                                        </Box>
                                        <Box w='100%'>
                                            <Input className={styles.msgInput} placeholder='Enter Message Here' fontSize='20px' size='lg' boxShadow='none' borderRadius='sm'>

                                            </Input>
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box textAlign='center' color='#fff'>
                                    <Button bg='transparent' className={styles.sendbtn}>
                                        <Box bg='transparent' >
                                            <Box as='span' fontSize='25px'>
                                                <i className="fa-solid  fa-paper-plane"></i>
                                            </Box>
                                            <Text fontSize='13px' fontWeight='100'>
                                                Send
                                            </Text>
                                        </Box>
                                    </Button>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                    <Box mx='100px' p={2} borderRadius='lg' textAlign='center' className={styles.tokenArea} boxShadow='lg' w='18%' bg='#f8f8f8'>
                        <Box textAlign='end'>
                            <IconButton
                                w="30px"
                                h="30px"
                                minW={"unset"}
                                fontSize="12px"
                                icon={<CopyIcon />}
                                className={styles.copybtn}
                                colorScheme='gray'
                                borderRadius='50%'
                                onClick={() =>
                                    toast({
                                        position: 'top',
                                        render: () => (
                                            <Box color='white' p={3} bg='#2b3954' borderRadius='lg'>
                                                <b>{token}</b>  Has been copied to Clip Board
                                            </Box>
                                        ),
                                    }) && (navigator.clipboard.writeText(token))
                                } />
                        </Box>
                        <Text fontSize='xl'
                            onClick={() =>
                                toast({
                                    position: 'top',
                                    render: () => (
                                        <Box color='white' p={3} bg='#2b3954' borderRadius='lg'>
                                            <b>{token}</b>  Has been copied to Clip Board
                                        </Box>
                                    ),
                                }) && (navigator.clipboard.writeText(token))
                            }>
                            Token No
                        </Text>
                        <Text className={styles.tokenNum}
                            id='tokenNum'
                            fontSize='4xl'
                            fontWeight='700'
                            color='#2b3954'
                            onClick={() =>
                                toast({
                                    position: 'top',
                                    render: () => (
                                        <Box color='white' p={3} bg='#2b3954' borderRadius='lg'>
                                            <b>{token}</b>  Has been copied to Clip Board
                                        </Box>
                                    ),
                                }) && (navigator.clipboard.writeText(token))
                            }>
                            1234
                        </Text>
                        <Button my='1' w='50px' h='50px' className={styles.theme_btn} onClick={() => setContainer2(!container2)} fontSize='25px' color='#424040'>
                            <Icon viewBox="0 0 512 512">
                                <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64V448C362 448 448 362 448 256C448 149.1 362 64 256 64z" />
                            </Icon>
                        </Button>
                        <Text fontSize='13px'
                            onClick={() =>
                                toast({
                                    position: 'top',
                                    render: () => (
                                        <Box color='white' p={3} bg='#2b3954' borderRadius='lg'>
                                            <b>{Url}</b>  Has been copied to Clip Board
                                        </Box>
                                    ),
                                }) && (navigator.clipboard.writeText(Url))
                            }>
                            Click here to copy link
                        </Text>
                        <Text id='linkArea'
                            className={styles.linkArea}
                            onClick={() =>
                                toast({
                                    position: 'top',
                                    render: () => (
                                        <Box color='white' p={3} bg='#2b3954' >
                                            <b>{Url}</b>  Has been copied to Clip Board
                                        </Box>
                                    ),
                                }) && (navigator.clipboard.writeText(Url))
                            }>
                            http://send.ilmux.com/?1234
                        </Text>
                        <EndModal />
                        <LeaveModal />
                    </Box>
                </Flex>
            </Box >
        </div >
    )
}
