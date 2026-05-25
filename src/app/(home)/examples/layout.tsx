import { Feather } from '@expo/vector-icons';
import { Accordion, Card, Chip, Separator, Surface } from 'heroui-native';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { withUniwind } from 'uniwind';
import { AppText } from '../../../components/app-text';
import {
  ExampleScreen,
  ExampleSection,
} from '../../../components/examples/example-layout';

const StyledFeather = withUniwind(Feather);

const tabs = ['Overview', 'Activity', 'Files'];

export default function LayoutExampleScreen() {
  const [tab, setTab] = useState('Overview');

  return (
    <ExampleScreen
      eyebrow="Example 4"
      title="Layout"
      description="Patterns for organizing information without making every block feel like a heavy card."
    >
      <ExampleSection title="Cards">
        <View className="gap-3">
          {['Revenue', 'Users', 'Conversion'].map((label, index) => (
            <Card key={label} className="shadow-none border border-border">
              <Card.Header className="flex-row items-center justify-between">
                <View>
                  <Card.Description>{label}</Card.Description>
                  <Card.Title className="text-2xl">
                    {index === 0 ? '$12.4k' : index === 1 ? '2,840' : '8.7%'}
                  </Card.Title>
                </View>
                <Chip size="sm" variant={index === 2 ? 'secondary' : 'primary'}>
                  <Chip.Label>{index === 2 ? 'Stable' : 'Up'}</Chip.Label>
                </Chip>
              </Card.Header>
            </Card>
          ))}
        </View>
      </ExampleSection>

      <ExampleSection title="Segmented Tabs">
        <Surface className="p-1 flex-row gap-1">
          {tabs.map((item) => {
            const selected = item === tab;
            return (
              <Pressable
                key={item}
                onPress={() => setTab(item)}
                className={`flex-1 rounded-xl py-3 items-center ${
                  selected ? 'bg-background' : ''
                }`}
              >
                <AppText
                  className={`font-semibold ${
                    selected ? 'text-foreground' : 'text-muted'
                  }`}
                >
                  {item}
                </AppText>
              </Pressable>
            );
          })}
        </Surface>
        <Surface className="p-4">
          <AppText className="text-foreground font-semibold">{tab}</AppText>
          <AppText className="text-muted text-sm leading-5">
            This area changes with the selected tab. Replace it with focused
            content instead of creating a new route for every small state.
          </AppText>
        </Surface>
      </ExampleSection>

      <ExampleSection title="Accordion">
        <Accordion defaultValue="setup">
          <Accordion.Item value="setup">
            <Accordion.Trigger>
              <View className="flex-row items-center gap-3">
                <StyledFeather name="tool" size={18} className="text-accent" />
                <AppText className="text-foreground text-base flex-1">
                  Setup notes
                </AppText>
              </View>
              <Accordion.Indicator />
            </Accordion.Trigger>
            <Accordion.Content>
              <AppText className="text-muted leading-5">
                Use accordions for optional implementation notes or long
                configuration details.
              </AppText>
            </Accordion.Content>
          </Accordion.Item>
          <Separator />
          <Accordion.Item value="states">
            <Accordion.Trigger>
              <View className="flex-row items-center gap-3">
                <StyledFeather name="sliders" size={18} className="text-accent" />
                <AppText className="text-foreground text-base flex-1">
                  Component states
                </AppText>
              </View>
              <Accordion.Indicator />
            </Accordion.Trigger>
            <Accordion.Content>
              <AppText className="text-muted leading-5">
                Keep examples close to real edge cases: empty, disabled, error,
                loading, and success.
              </AppText>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </ExampleSection>
    </ExampleScreen>
  );
}
