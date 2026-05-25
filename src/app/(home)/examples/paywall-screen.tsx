import {
  BottomSheet,
  Button,
  Card,
  Chip,
  Radio,
  RadioGroup,
  Surface,
} from 'heroui-native';
import { useState } from 'react';
import { View } from 'react-native';
import { AppText } from '../../../components/app-text';
import {
  ExampleScreen,
  ExampleSection,
} from '../../../components/examples/example-layout';

const plans = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '$12',
    description: 'Good for short trials and quick demos.',
  },
  {
    id: 'annual',
    name: 'Annual',
    price: '$96',
    description: 'Best value for long-running products.',
  },
];

export default function PaywallScreenExample() {
  const [plan, setPlan] = useState('annual');
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <ExampleScreen
      eyebrow="Real Screen"
      title="Paywall Screen"
      description="Plan cards, selection states, and a bottom-sheet checkout summary."
    >
      <ExampleSection title="Plan Selection">
        <RadioGroup value={plan} onValueChange={setPlan} className="gap-3">
          {plans.map((item) => (
            <RadioGroup.Item key={item.id} value={item.id}>
              {({ isSelected }) => (
                <Card
                  className={`shadow-none border ${
                    isSelected ? 'border-accent bg-accent/5' : 'border-border'
                  }`}
                >
                  <Card.Header className="flex-row items-center gap-3">
                    <Radio />
                    <View className="flex-1">
                      <View className="flex-row items-center gap-2">
                        <Card.Title>{item.name}</Card.Title>
                        {item.id === 'annual' ? (
                          <Chip size="sm">
                            <Chip.Label>Save 33%</Chip.Label>
                          </Chip>
                        ) : null}
                      </View>
                      <Card.Description>{item.description}</Card.Description>
                    </View>
                    <AppText className="text-2xl text-foreground font-bold">
                      {item.price}
                    </AppText>
                  </Card.Header>
                </Card>
              )}
            </RadioGroup.Item>
          ))}
        </RadioGroup>
      </ExampleSection>

      <ExampleSection title="Checkout Action">
        <Surface className="p-4 gap-4">
          <View className="flex-row justify-between">
            <AppText className="text-muted">Selected plan</AppText>
            <AppText className="text-foreground font-semibold">
              {plan === 'annual' ? 'Annual' : 'Monthly'}
            </AppText>
          </View>
          <BottomSheet isOpen={checkoutOpen} onOpenChange={setCheckoutOpen}>
            <BottomSheet.Trigger asChild>
              <Button isDisabled={checkoutOpen}>Continue</Button>
            </BottomSheet.Trigger>
            <BottomSheet.Portal>
              <BottomSheet.Overlay />
              <BottomSheet.Content>
                <View className="gap-2 mb-6">
                  <BottomSheet.Title>Confirm subscription</BottomSheet.Title>
                  <BottomSheet.Description>
                    This is a checkout preview. Connect real billing logic later.
                  </BottomSheet.Description>
                </View>
                <Surface className="p-4 mb-5">
                  <View className="flex-row justify-between">
                    <AppText className="text-muted">Plan</AppText>
                    <AppText className="text-foreground font-semibold">
                      {plan === 'annual' ? 'Annual' : 'Monthly'}
                    </AppText>
                  </View>
                </Surface>
                <View className="gap-3">
                  <Button onPress={() => setCheckoutOpen(false)}>
                    Subscribe
                  </Button>
                  <Button variant="tertiary" onPress={() => setCheckoutOpen(false)}>
                    Cancel
                  </Button>
                </View>
              </BottomSheet.Content>
            </BottomSheet.Portal>
          </BottomSheet>
        </Surface>
      </ExampleSection>
    </ExampleScreen>
  );
}
