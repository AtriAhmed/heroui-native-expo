import {
  Button,
  Card,
  Checkbox,
  ControlField,
  Description,
  Input,
  Label,
  TextField,
} from 'heroui-native';
import { useState } from 'react';
import { View } from 'react-native';
import {
  ExampleScreen,
  ExampleSection,
} from '../../../components/examples/example-layout';

export default function AuthScreenExample() {
  const [remember, setRemember] = useState(true);

  return (
    <ExampleScreen
      eyebrow="Real Screen"
      title="Auth Screen"
      description="A practical login layout using HeroUI form primitives."
    >
      <ExampleSection title="Login Form">
        <Card className="shadow-none border border-border">
          <Card.Header>
            <Card.Title>Welcome back</Card.Title>
            <Card.Description>Sign in to continue to the workspace.</Card.Description>
          </Card.Header>
          <Card.Body className="gap-5">
            <TextField>
              <Label>Email</Label>
              <Input
                placeholder="name@company.com"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </TextField>
            <TextField>
              <Label>Password</Label>
              <Input placeholder="Enter password" secureTextEntry />
              <Description>Use a strong password in production apps.</Description>
            </TextField>
            <ControlField
              isSelected={remember}
              onSelectedChange={setRemember}
              className="items-start"
            >
              <ControlField.Indicator>
                <Checkbox className="mt-0.5" />
              </ControlField.Indicator>
              <View className="flex-1">
                <Label>Remember this device</Label>
                <Description>Keep the user signed in on trusted devices.</Description>
              </View>
            </ControlField>
          </Card.Body>
          <Card.Footer className="gap-3">
            <Button>Sign in</Button>
            <Button variant="tertiary">Create account</Button>
          </Card.Footer>
        </Card>
      </ExampleSection>
    </ExampleScreen>
  );
}
