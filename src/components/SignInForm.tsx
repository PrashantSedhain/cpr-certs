import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

type FormData = {
  email: string;
  password: string;
  remember: boolean;
};

export default function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    remember: false,
  });
  useEffect(() => {
    const checked = localStorage.getItem("remember");
    if (checked === "true") {
      setFormData((prev) => ({ ...prev, ["remember"]: true }));
    }
    const email = localStorage.getItem("email");
    if (email) {
      setFormData((prev) => ({ ...prev, ["email"]: email }));
    }
  }, []);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const checked = localStorage.getItem("remember");
    if (checked === "true") {
      localStorage.setItem("email", formData.email);
    } else {
      localStorage.removeItem("email");
    }
    console.log(formData);
  };
  const onFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "remember") {
      if (e.target.checked) {
        localStorage.setItem("remember", "true");
      } else {
        localStorage.removeItem("remember");
      }
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <Flex align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={6} px={6}>
          <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} p={8}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired={true}>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={onFieldChange}
                  name="email"
                  value={formData.email}
                />
              </FormControl>
              <FormControl id="password" isRequired={true}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={onFieldChange}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox
                    onChange={onFieldChange}
                    name="remember"
                    isChecked={formData.remember}
                  >
                    Remember me
                  </Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"red.400"}
                  color={"white"}
                  _hover={{
                    bg: "red.500",
                  }}
                  type="submit"
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  );
}
