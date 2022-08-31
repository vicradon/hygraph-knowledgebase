import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Flex,
  Box,
  InputGroup,
  FormControl,
  FormLabel,
  InputLeftAddon,
  Input,
  InputRightAddon,
  Select,
  Image,
  Link,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import NextLink from "next/link";
import { convertUSD, USDRATE } from "../../utils/money";

function SendMoney() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const currencyToSymbol = {
    USD: "$",
  };
  const handleInputChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const [formData, setFormData] = React.useState({
    amount_to_send: "",
    amount_they_get: "",
    recepient_wallet_alias: "",
    selected_currency: "USD",
  });

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      amount_they_get: convertUSD(Number(prevState.amount_to_send)),
    }));
  }, [formData.amount_to_send]);

  return (
    <>
      <Button
        onClick={onOpen}
        rounded={"full"}
        colorScheme={"brand"}
        bgColor={"brand"}
      >
        Send Now
      </Button>

      <Modal size={"xl"} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>How much are you sending?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box as="form">
              <FormControl mb="1rem">
                <FormLabel htmlFor="amount_to_send">You send</FormLabel>

                <InputGroup>
                  <InputLeftAddon>
                    {currencyToSymbol[formData.selected_currency]}
                  </InputLeftAddon>
                  <Input
                    id="amount_to_send"
                    type={"number"}
                    placeholder="e.g. 400"
                    name="amount_to_send"
                    value={formData.amount_to_send}
                    onChange={handleInputChange}
                    required
                  />
                  <InputRightAddon>
                    <Select
                      variant={"flushed"}
                      name="selected_currency"
                      value={formData.selected_currency}
                      onChange={handleInputChange}
                    >
                      <option value={"usd"}>USD</option>
                    </Select>
                  </InputRightAddon>
                </InputGroup>
              </FormControl>

              <FormControl mb="1rem">
                <FormLabel htmlFor="recepient_wallet_alias">
                  Recepient Wallet Address
                </FormLabel>
                <Input
                  id="recepient_wallet_alias"
                  type={"text"}
                  placeholder="e.g. manny@gmail.com"
                  name="recepient_wallet_alias"
                  value={formData.recepient_wallet_alias}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>

              <FormControl mb="1rem">
                <FormLabel htmlFor="amount_they_get">Recepient gets</FormLabel>

                <InputGroup>
                  <InputLeftAddon>
                    <Image
                      src={"/icons/enaira-icon-black.svg"}
                      alt={"ENaira icon"}
                      width={"1.5rem"}
                    />
                  </InputLeftAddon>
                  <Input
                    id="amount_they_get"
                    type={"text"}
                    name="amount_they_get"
                    value={formData.amount_they_get.toLocaleString()}
                    disabled
                  />
                </InputGroup>
              </FormControl>

              <Box mb={"2rem"}>
                <Flex justifyContent={"space-between"}>
                  <Text>Fee: </Text>
                  <Text>1%</Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Text>Today's Rate: </Text>
                  <Text>
                    1 {formData.selected_currency}=₦{USDRATE}
                  </Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Link href="/">Compare rates</Link>
                </Flex>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <NextLink href="/login" passHref>
              <Button
                as={"a"}
                mr={"1rem"}
                type="submit"
                colorScheme={"brand"}
                variant="solid"
              >
                Proceed
              </Button>
            </NextLink>
            <Button onClick={onClose} variant="ghost">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SendMoney;
