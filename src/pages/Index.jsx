import { Box, Container, Heading, VStack, Text, Input, Button, HStack, Stack, Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [workoutType, setWorkoutType] = useState("");
  const [duration, setDuration] = useState(0);
  const [calories, setCalories] = useState(0);
  const [workoutSummary, setWorkoutSummary] = useState([]);
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    age: 30,
    weight: 70,
    height: 170,
    workoutsCompleted: 0,
    totalCalories: 0,
  });

  const handleAddWorkout = () => {
    const newWorkout = { type: workoutType, duration, calories };
    setWorkoutSummary([...workoutSummary, newWorkout]);
    setUserProfile({
      ...userProfile,
      workoutsCompleted: userProfile.workoutsCompleted + 1,
      totalCalories: userProfile.totalCalories + calories,
    });
    setWorkoutType("");
    setDuration(0);
    setCalories(0);
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Box as="nav" bg="blue.500" color="white" p={4} mb={4}>
        <HStack spacing={8}>
          <Heading size="md">Fitness Tracker</Heading>
          <HStack as="ul" listStyleType="none">
            <li>
              <Button variant="link">Home</Button>
            </li>
            <li>
              <Button variant="link">Track Workout</Button>
            </li>
            <li>
              <Button variant="link">Profile</Button>
            </li>
          </HStack>
        </HStack>
      </Box>

      <VStack spacing={8} align="stretch">
        <Box>
          <Heading size="lg" mb={4}>
            Daily Workout Summary
          </Heading>
          {workoutSummary.length === 0 ? (
            <Text>No workouts tracked yet.</Text>
          ) : (
            <Stack spacing={4}>
              {workoutSummary.map((workout, index) => (
                <Box key={index} p={4} shadow="md" borderWidth="1px">
                  <Text>
                    <strong>Type:</strong> {workout.type}
                  </Text>
                  <Text>
                    <strong>Duration:</strong> {workout.duration} mins
                  </Text>
                  <Text>
                    <strong>Calories:</strong> {workout.calories}
                  </Text>
                </Box>
              ))}
            </Stack>
          )}
        </Box>

        <Box>
          <Heading size="lg" mb={4}>
            Track Your Workout
          </Heading>
          <Stack spacing={4} direction="row" align="stretch">
            <Input
              placeholder="Type of Exercise"
              value={workoutType}
              onChange={(e) => setWorkoutType(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Duration (mins)"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Calories Burned"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
            <Button colorScheme="blue" onClick={handleAddWorkout}>
              Add Workout
            </Button>
          </Stack>
        </Box>

        <Box>
          <Heading size="lg" mb={4}>
            Profile
          </Heading>
          <Stack spacing={4}>
            <Stat>
              <StatLabel>Name</StatLabel>
              <StatNumber>{userProfile.name}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Age</StatLabel>
              <StatNumber>{userProfile.age}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Weight</StatLabel>
              <StatNumber>{userProfile.weight} kg</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Height</StatLabel>
              <StatNumber>{userProfile.height} cm</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Workouts Completed</StatLabel>
              <StatNumber>{userProfile.workoutsCompleted}</StatNumber>
              <StatHelpText>Total Calories Burned: {userProfile.totalCalories}</StatHelpText>
            </Stat>
          </Stack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;