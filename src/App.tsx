import { Dashbord } from "./Components/Dashbord";
import { Header } from "./Components/header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./Components/NewTransactionModal";
import { TransactionProvider } from "./hooks/useTransactions";


export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

 

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {

    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionProvider>
      <Header onOpenNewTransactions={handleOpenNewTransactionModal} />
      <Dashbord />
      <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}

