import React, { createContext, useContext } from 'react';
import { useDisclosure } from '@chakra-ui/react';

const ModalContext = createContext(null);

const ModalProvider = ({ children }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <ModalContext.Provider value={{ onOpen, onClose, isOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  return useContext(ModalContext);
};

export { ModalProvider, useModalContext };
