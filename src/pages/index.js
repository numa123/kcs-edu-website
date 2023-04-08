import Head from "next/head";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>NickNameのホームページ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        w={"100vw"}
        h={"100vh"}
        display={{ base: "none", sm: "block" }}
        minH="100vh"
        className="text"
      >
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems="center"
          h="100%"
        >
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Box mr="100px">
              <Text fontSize="40px">NickName</Text>
              <Flex alignItems="center">
                <Image
                  src="https://pics.prcm.jp/0a3e4ccca4b12/68217265/png/68217265.png"
                  alt=""
                  width="22px"
                  height="22px"
                />
                <Text fontSize="17px" mb="4px" ml="4px">
                  gniobegio
                </Text>
              </Flex>
              <Text fontSize="18px" mt="16px">
                慶應義塾大学○○学部
              </Text>
              <Text fontSize="18px" mt="4px">
                ○○サークル所属
              </Text>
              <Text fontSize="18px" mt="16px">
                よろしくお願いします
              </Text>
            </Box>
            <Image
              src="https://images.unsplash.com/photo-1457195740896-7f345efef228?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              width="800px"
            />
          </Flex>
        </Flex>
      </Box>
      <Box
        w={"100vw"}
        h={"100vh"}
        display={{ base: "block", sm: "none" }}
        minH="100vh"
      >
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          className="text"
        >
          <Box w={"100vw"} h="360px" bg="gray.200">
            <Image
              src="https://images.unsplash.com/photo-1457195740896-7f345efef228?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              height="360px"
            />
          </Box>
          <Image
            src="https://images.unsplash.com/photo-1604848698030-c434ba08ece1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            width={"150px"}
            height="150px"
            borderRadius={"50%"}
            mt="70px"
          />
          <Text fontSize="27px" fontWeight="bold" mt="20px">
            NickName
          </Text>
          <Flex justifyContent={"center"} alignItems={"center"} height="100%">
            <Image
              src="https://pics.prcm.jp/0a3e4ccca4b12/68217265/png/68217265.png"
              alt=""
              width="22px"
              height="22px"
            />
            <Text fontSize="17px" mb="4px" ml="4px">
              gniobegio
            </Text>
          </Flex>
          <Text fontSize="17px" mt="16px">
            慶應義塾大学○○学部
          </Text>
          <Text fontSize="17px" mt="4px">
            ○○サークル所属
          </Text>
          <Text fontSize="17px" mt="16px" mb="60px">
            よろしくお願いします
          </Text>
        </Flex>
      </Box>
    </>
  );
}
