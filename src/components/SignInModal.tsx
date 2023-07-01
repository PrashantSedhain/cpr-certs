import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import LoginForm from "./SignInForm";

export function SignInModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button fontWeight={400} onClick={onOpen} fontSize={'sm'} variant={'link'}>
        Sign In
      </Button>

      <Modal onClose={onClose} size={'md'} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <LoginForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
