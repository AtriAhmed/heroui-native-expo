import {
  Button,
  Checkbox,
  ControlField,
  Description,
  FieldError,
  Input,
  Label,
  Radio,
  RadioGroup,
  Separator,
  Surface,
  Switch,
  TextField,
} from 'heroui-native';
import { useState } from 'react';
import { View } from 'react-native';
import { AppText } from '../../../components/app-text';
import {
  ExampleScreen,
  ExampleSection,
} from '../../../components/examples/example-layout';

export default function InputsExampleScreen() {
  const [accepted, setAccepted] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [plan, setPlan] = useState('pro');

  return (
    <ExampleScreen
      eyebrow="Example 2"
      title="Inputs"
      description="A compact playground for the form controls you will use most often."
    >
      <ExampleSection title="Buttons" description="Variants, sizes, icon-only, and disabled states.">
        <View className="gap-3">
          <Button>Primary action</Button>
          <Button variant="secondary">Secondary action</Button>
          <Button variant="outline">Outline action</Button>
          <View className="flex-row gap-3">
            <Button size="sm" className="flex-1">
              Small
            </Button>
            <Button size="md" variant="secondary" className="flex-1">
              Medium
            </Button>
            <Button size="lg" variant="danger-soft" className="flex-1">
              Large
            </Button>
          </View>
          <Button isDisabled variant="secondary">
            Disabled while saving
          </Button>
        </View>
      </ExampleSection>

      <ExampleSection title="Text Fields">
        <View className="gap-5">
          <TextField>
            <Label>Email</Label>
            <Input
              placeholder="ahmed@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Description>Use labels and helper text for clarity.</Description>
          </TextField>

          <TextField isInvalid>
            <Label>Password</Label>
            <Input placeholder="At least 8 characters" secureTextEntry />
            <FieldError>Password is required for this example.</FieldError>
          </TextField>
        </View>
      </ExampleSection>

      <ExampleSection title="Selection Controls">
        <Surface className="p-4 gap-4">
          <ControlField
            isSelected={accepted}
            onSelectedChange={setAccepted}
            className="items-start"
          >
            <ControlField.Indicator>
              <Checkbox className="mt-0.5" />
            </ControlField.Indicator>
            <View className="flex-1">
              <Label>Accept updates</Label>
              <Description>Use checkbox rows for multi-select choices.</Description>
            </View>
          </ControlField>

          <Separator />

          <ControlField
            isSelected={notifications}
            onSelectedChange={setNotifications}
          >
            <View className="flex-1">
              <Label>Push notifications</Label>
              <Description>Use switches for immediate preferences.</Description>
            </View>
            <ControlField.Indicator>
              <Switch />
            </ControlField.Indicator>
          </ControlField>
        </Surface>
      </ExampleSection>

      <ExampleSection title="Radio Group">
        <RadioGroup value={plan} onValueChange={setPlan} className="gap-3">
          {[
            ['starter', 'Starter', 'Simple demos and exploration'],
            ['pro', 'Pro', 'Client-ready examples and polished states'],
            ['team', 'Team', 'Shared design patterns for a team'],
          ].map(([value, title, description]) => (
            <RadioGroup.Item key={value} value={value}>
              {({ isSelected }) => (
                <View className="flex-row items-center gap-3 p-3 rounded-2xl bg-surface">
                  <Radio />
                  <View className="flex-1">
                    <Label>{title}</Label>
                    <Description>{description}</Description>
                  </View>
                  {isSelected ? (
                    <AppText className="text-accent font-semibold">
                      Selected
                    </AppText>
                  ) : null}
                </View>
              )}
            </RadioGroup.Item>
          ))}
        </RadioGroup>
      </ExampleSection>
    </ExampleScreen>
  );
}
