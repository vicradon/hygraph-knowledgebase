import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import { formatDate } from "../../utils/date";

function TransactionsTable({ transactions = [] }) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>S/N</Th>
            <Th>Amount Tendered</Th>
            <Th>Amount Received</Th>
            <Th>Receiver Wallet Alias</Th>
            <Th>Reference</Th>
            <Th>Status</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions.map((transaction, index) => {
            return (
              <Tr key={transaction.reference}>
                <Td>{index + 1}</Td>
                <Td>$ {transaction.amount_tendered || "-"}</Td>
                <Td>
                  <Flex alignItems="center" columnGap={"0.5rem"}>
                    <Image
                      width={"20px"}
                      src="/icons/enaira-icon.svg"
                      alt="enaira icon"
                    />
                    <Text>{transaction.amount_received || "-"}</Text>
                  </Flex>
                </Td>
                <Td>{transaction.receiver_wallet_alias || "-"}</Td>
                <Td>{transaction.reference || "-"}</Td>
                <Td>{transaction.status || "-"}</Td>
                <Td>{formatDate(transaction.createdAt)}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TransactionsTable;
