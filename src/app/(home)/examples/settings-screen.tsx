import {
  Button,
  ControlField,
  Description,
  Dialog,
  Label,
  Separator,
  Surface,
  Switch,
} from 'heroui-native';
import { useState } from 'react';
import { View } from 'react-native';
import { AppText } from '../../../components/app-text';
import {
  ExampleScreen,
  ExampleSection,
} from '../../../components/examples/example-layout';

export default function SettingsScreenExample() {
  const [push, setPush] = useState(true);
  const [analytics, setAnalytics] = useState(false);
  const [sync, setSync] = useState(true);
  const [signOutOpen, setSignOutOpen] = useState(false);

  return (
    <ExampleScreen
      eyebrow="Real Screen"
      title="Settings Screen"
      description="A dense operational screen with grouped toggles and a destructive confirmation."
    >
      <ExampleSection title="Preferences">
        <Surface className="p-4 gap-4">
          {[
            ['Push notifications', 'Receive product and account alerts.', push, setPush],
            ['Analytics', 'Share anonymous usage data.', analytics, setAnalytics],
            ['Auto sync', 'Keep local data current in the background.', sync, setSync],
          ].map(([title, description, value, setter], index) => (
            <View key={String(title)}>
              {index > 0 ? <Separator className="mb-4" /> : null}
              <ControlField
                isSelected={Boolean(value)}
                onSelectedChange={setter as (next: boolean) => void}
              >
                <View className="flex-1">
                  <Label>{String(title)}</Label>
                  <Description>{String(description)}</Description>
                </View>
                <ControlField.Indicator>
                  <Switch />
                </ControlField.Indicator>
              </ControlField>
            </View>
          ))}
        </Surface>
      </ExampleSection>

      <ExampleSection title="Account">
        <Surface className="p-4 gap-4">
          <View>
            <AppText className="text-foreground font-semibold">
              Ahmed Atri
            </AppText>
            <AppText className="text-muted text-sm">ahmed@example.com</AppText>
          </View>
          <Separator />
          <Dialog isOpen={signOutOpen} onOpenChange={setSignOutOpen}>
            <Dialog.Trigger asChild>
              <Button variant="danger-soft">Sign out</Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay />
              <Dialog.Content>
                <View className="gap-2 mb-6">
                  <Dialog.Title>Sign out?</Dialog.Title>
                  <Dialog.Description>
                    This demonstrates a destructive account action with a clear
                    confirmation step.
                  </Dialog.Description>
                </View>
                <View className="gap-3">
                  <Button variant="danger" onPress={() => setSignOutOpen(false)}>
                    Sign out
                  </Button>
                  <Button variant="tertiary" onPress={() => setSignOutOpen(false)}>
                    Cancel
                  </Button>
                </View>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog>
        </Surface>
      </ExampleSection>
    </ExampleScreen>
  );
}
