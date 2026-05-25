import { Feather } from '@expo/vector-icons';
import { BottomSheet, Button, Dialog } from 'heroui-native';
import { useState } from 'react';
import { View } from 'react-native';
import { withUniwind } from 'uniwind';
import {
  ExampleScreen,
  ExampleSection,
} from '../../../components/examples/example-layout';

const StyledFeather = withUniwind(Feather);

export default function OverlaysExampleScreen() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <ExampleScreen
      eyebrow="Example 5"
      title="Overlays"
      description="Mobile flows often need temporary surfaces. Keep them focused and easy to dismiss."
    >
      <ExampleSection title="Bottom Sheet">
        <BottomSheet isOpen={sheetOpen} onOpenChange={setSheetOpen}>
          <BottomSheet.Trigger asChild>
            <Button variant="secondary" isDisabled={sheetOpen}>
              Open bottom sheet
            </Button>
          </BottomSheet.Trigger>
          <BottomSheet.Portal>
            <BottomSheet.Overlay />
            <BottomSheet.Content>
              <View className="items-center mb-5">
                <View className="size-16 rounded-full bg-accent/10 items-center justify-center">
                  <StyledFeather name="smartphone" size={28} className="text-accent" />
                </View>
              </View>
              <View className="gap-2 mb-6">
                <BottomSheet.Title className="text-center">
                  Mobile action sheet
                </BottomSheet.Title>
                <BottomSheet.Description className="text-center">
                  Use this for short mobile decisions, filters, and checkout
                  summaries.
                </BottomSheet.Description>
              </View>
              <View className="gap-3">
                <Button onPress={() => setSheetOpen(false)}>Apply</Button>
                <Button variant="tertiary" onPress={() => setSheetOpen(false)}>
                  Dismiss
                </Button>
              </View>
            </BottomSheet.Content>
          </BottomSheet.Portal>
        </BottomSheet>
      </ExampleSection>

      <ExampleSection title="Modal Dialog">
        <Dialog isOpen={dialogOpen} onOpenChange={setDialogOpen}>
          <Dialog.Trigger asChild>
            <Button variant="outline">Open modal</Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <View className="gap-2 mb-6">
                <Dialog.Title>Publish changes</Dialog.Title>
                <Dialog.Description>
                  Use a centered dialog when the decision should block the
                  current workflow.
                </Dialog.Description>
              </View>
              <View className="gap-3">
                <Button onPress={() => setDialogOpen(false)}>Publish</Button>
                <Button variant="tertiary" onPress={() => setDialogOpen(false)}>
                  Review later
                </Button>
              </View>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog>
      </ExampleSection>
    </ExampleScreen>
  );
}
