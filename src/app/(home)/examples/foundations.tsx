import { Card, Chip, Separator, Surface } from 'heroui-native';
import { View } from 'react-native';
import { AppText } from '../../../components/app-text';
import {
  ExampleScreen,
  ExampleSection,
  Swatch,
} from '../../../components/examples/example-layout';

export default function FoundationsExampleScreen() {
  return (
    <ExampleScreen
      eyebrow="Example 1"
      title="Foundations"
      description="Use this page to understand the base tokens before composing bigger screens."
    >
      <ExampleSection
        title="Theme Colors"
        description="These classes are mapped by HeroUI Native and Uniwind."
      >
        <View className="flex-row flex-wrap gap-3">
          <Swatch label="background" className="bg-background" />
          <Swatch label="surface" className="bg-surface" />
          <Swatch label="accent" className="bg-accent" />
          <Swatch label="danger" className="bg-danger" />
          <Swatch label="muted" className="bg-muted" />
          <Swatch label="overlay" className="bg-overlay" />
        </View>
      </ExampleSection>

      <ExampleSection title="Typography">
        <View className="gap-3">
          <AppText className="text-4xl text-foreground font-bold">
            Display title
          </AppText>
          <AppText className="text-2xl text-foreground font-semibold">
            Section heading
          </AppText>
          <AppText className="text-base text-foreground leading-6">
            Body text should stay readable, compact, and consistent across the
            app. This is the default rhythm for example pages.
          </AppText>
          <AppText className="text-sm text-muted leading-5">
            Muted copy works well for helper text, descriptions, and metadata.
          </AppText>
        </View>
      </ExampleSection>

      <ExampleSection title="Surface Composition">
        <Card className="shadow-none border border-border">
          <Card.Header className="flex-row items-center justify-between">
            <View>
              <Card.Title>Project Status</Card.Title>
              <Card.Description>Surface, separators, and chips.</Card.Description>
            </View>
            <Chip size="sm">
              <Chip.Label>Active</Chip.Label>
            </Chip>
          </Card.Header>
          <Separator />
          <Card.Body className="gap-3">
            <Surface className="p-3">
              <AppText className="text-foreground font-medium">
                Current focus
              </AppText>
              <AppText className="text-muted text-sm">
                Build small reusable screens before adding custom behavior.
              </AppText>
            </Surface>
          </Card.Body>
        </Card>
      </ExampleSection>
    </ExampleScreen>
  );
}
