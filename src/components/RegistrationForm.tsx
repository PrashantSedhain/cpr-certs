import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { phone } from "phone";
import { validate as ValidateEmail } from "email-validator";
import React, { useState, useEffect } from "react";
import { Select } from "chakra-react-select";

const avatars = [
  {
    name: "Ryan Florence",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  courseDate: DateOption;
};
interface Class {
  id: string;
  course_id: string;
  start_date: string;
  end_date: string;
  location: string;
  enrolled_students: [string];
}

type DateOption = {
  value: string;
  label: string;
};
export default function JoinOurTeam() {
  const avatarGroupSize = useBreakpointValue({ base: "md", md: "lg" });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Handle form submission here
    console.log(data);
  };
    const BASE_URL: string = "http://localhost:8080";
    const [classes, setClasses] = useState<Class[]>([]);

    useEffect(() => {
      const loadClasses = async () => {
        try {
          let response: any = await fetch(`${BASE_URL}/class/all`);
          response = await response.json();
          if (response?.success && response?.data) {
            setClasses(response?.data);
          }
        } catch (error) {
          console.log(error);
        }
      };
      loadClasses();
    }, []);

    const getAvailableDatesForClasses = (): DateOption[] => {
      const dates: DateOption[] = classes.map((c) => {
        const startDate = new Date(c.start_date);
        const endDate = new Date(c.end_date);

        const formattedStartDate = startDate.toLocaleDateString("en-US", {
          month: "long", // Full month name
          day: "numeric", // Day of the month (1-31)
          year: "numeric", // Full year
        });

        const formattedEndDate = endDate.toLocaleDateString("en-US", {
          month: "long", // Full month name
          day: "numeric", // Day of the month (1-31)
          year: "numeric",
        });
        return {
          label: `${formattedStartDate} - ${formattedEndDate}`,
          value: c.course_id,
        };
      });
      return dates;
    };


  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            We cannot wait to{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              see you
            </Text>{" "}
            in our class
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size={avatarGroupSize}
                  position={"relative"}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, red.400,pink.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              fontFamily={"heading"}
              fontSize={{ base: "sm", md: "lg" }}
              bg={"gray.800"}
              color={"white"}
              rounded={"full"}
              minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
              minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
              position={"relative"}
              _before={{
                content: '""',
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, orange.400,yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Register Today
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              We’re excited about your decision to join us soon. At Lifeline
              Care we offer very streamlined and cohesive certification courses
              to boost you ahead in your career.
            </Text>
          </Stack>
          <Box as={"form"} mt={10} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <Controller
                control={control}
                name="fullName"
                defaultValue=""
                rules={{ required: "Full Name is required" }}
                render={({ field }) => (
                  <Input
                    {...field}
                    isInvalid={!!errors.fullName}
                    focusBorderColor="green.500"
                    errorBorderColor="red.500"
                    placeholder="Full Name *"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                )}
              />
              {errors.fullName && (
                <Text color="red">{errors?.fullName.message || ""}</Text>
              )}
              <Controller
                control={control}
                name="email"
                defaultValue=""
                rules={{
                  required: "Email is required",
                  validate: (value) => {
                    const valid = ValidateEmail(value);
                    if (!valid) {
                      return "Please enter valid email!";
                    }
                  },
                }}
                render={({ field }) => (
                  <Input
                    isInvalid={!!errors.email}
                    focusBorderColor="green.500"
                    errorBorderColor="red.500"
                    {...field}
                    placeholder="Email *"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                )}
              />
              {errors.email && (
                <Text color="red">{errors.email.message || ""}</Text>
              )}
              <Controller
                control={control}
                name="phone"
                defaultValue=""
                rules={{
                  required: "Phone is required",
                  validate: (value) => {
                    const valid = phone(value, { country: "USA" });
                    if (!valid.isValid) {
                      return "Phone enter valid phone number!";
                    }
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    isInvalid={!!errors.phone}
                    focusBorderColor="green.500"
                    errorBorderColor="red.500"
                    placeholder="Phone *"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                )}
              />
              {errors.phone && (
                <Text color="red">{errors?.phone?.message || ""}</Text>
              )}
              <Controller
                control={control}
                name="courseDate"
                defaultValue={undefined}
                rules={{
                  required: "Course date is required",
                }}
                render={({ field: { onChange, onBlur, value, name, ref } }) => (
                  <Select
                    ref={ref}
                    isInvalid={!!errors.courseDate}
                    focusBorderColor="green.500"
                    errorBorderColor="red.500"
                    name={name}
                    value={value}
                    onBlur={onBlur}
                    className="chakra-react-select"
                    classNamePrefix="chakra-react-select"
                    placeholder="Select from available dates"
                    options={getAvailableDatesForClasses()}
                    selectedOptionStyle="check"
                    onChange={onChange}
                    chakraStyles={{
                      dropdownIndicator: (provided) => ({
                        ...provided,
                        bg: "gray.100",
                        px: 2,
                        cursor: "inherit",
                      }),
                      indicatorSeparator: (provided) => ({
                        ...provided,
                        display: "none",
                      }),
                    }}
                  />
                )}
              />
              {errors.courseDate && (
                <Text color="red">{errors?.courseDate?.message || ""}</Text>
              )}
            </Stack>
            <Button
              type="submit"
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, red.400,pink.400)",
                boxShadow: "xl",
              }}
            >
              Continue to Payment
            </Button>
          </Box>
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)", zIndex: -1 }}
      />
    </Box>
  );
}

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
