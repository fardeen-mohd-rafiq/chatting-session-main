import React from 'react'
import { Button } from '@chakra-ui/react'
import styles from "../../styles/Home.module.scss"
import Link from 'next/link'
import { useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

export default function LeaveModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <Button mt={5} onClick={onOpen} className={styles.endbtn} display='none'  >
                Leave Session
            </Button>
            <Modal size='lg' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader color='#fff' bg='#dc3545'>Confirmation</ModalHeader>
                    <ModalCloseButton color='#fff' border='none' boxShadow='none' />
                    <ModalBody textAlign='center' fontSize='18px'>
                        Do you want to leave this session.
                    </ModalBody>

                    <ModalFooter color='#fff' borderTop='1px solid #999'>
                        <Button bg='#6c757d' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Link href='/'>
                            <Button bg='#dc3545' >Yes</Button></Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}
