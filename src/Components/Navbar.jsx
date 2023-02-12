import * as Chakra from '@chakra-ui/react'

function Navbar() {
  return (
    <Chakra.Box p={[3.0, 4.0]} bg="#202020" color="#ffffff">
      <Chakra.Flex minWidth='max-content' alignItems='center' gap='2'>
          <Chakra.Box p='2'>
              <Chakra.Heading size='md'>Chakra App</Chakra.Heading>
          </Chakra.Box>
          <Chakra.Spacer />
          <Chakra.ButtonGroup gap='2'>
              <Chakra.Button colorScheme='teal'>Sign Up</Chakra.Button>
              <Chakra.Button colorScheme='teal'>Log in</Chakra.Button>
          </Chakra.ButtonGroup>
      </Chakra.Flex>
    </Chakra.Box>
  )
}

export default Navbar