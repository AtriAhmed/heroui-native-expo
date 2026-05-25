import { Feather } from '@expo/vector-icons';
import {
  Button,
  Dialog,
  FieldError,
  Input,
  Label,
  Spinner,
  TextField,
  useToast,
} from 'heroui-native';
import { useState } from 'react';
import { View } from 'react-native';
import { withUniwind } from 'uniwind';
import { AppText } from '../../../components/app-text';
import {
  ExampleScreen,
  ExampleSection,
} from '../../../components/examples/example-layout';

const StyledFeather = withUniwind(Feather);

export default function FeedbackExampleScreen() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const { toast } = useToast();

  const showToast = (variant: 'success' | 'warning' | 'danger') => {
    toast.show({
      variant,
      label:
        variant === 'success'
          ? 'Saved'
          : variant === 'warning'
          ? 'Check details'
          : 'Action failed',
      description: 'This toast is triggered from the feedback playground.',
      actionLabel: 'Close',
      onActionPress: ({ hide }) => hide(),
    });
  };

  return (
    <ExampleScreen
      eyebrow="Example 3"
      title="Feedback"
      description="Use these patterns when the user needs confirmation, progress, or recovery."
    >
      <ExampleSection title="Toasts">
        <View className="gap-3">
          <Button onPress={() => showToast('success')}>Success toast</Button>
          <Button variant="secondary" onPress={() => showToast('warning')}>
            Warning toast
          </Button>
          <Button variant="danger-soft" onPress={() => showToast('danger')}>
            Danger toast
          </Button>
        </View>
      </ExampleSection>

      <ExampleSection title="Dialogs">
        <View className="gap-3">
          <Dialog isOpen={confirmOpen} onOpenChange={setConfirmOpen}>
            <Dialog.Trigger asChild>
              <Button variant="secondary">Open confirm dialog</Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay />
              <Dialog.Content>
                <View className="size-10 rounded-full bg-danger/10 items-center justify-center mb-4">
                  <StyledFeather name="trash-2" size={18} className="text-danger" />
                </View>
                <View className="gap-2 mb-6">
                  <Dialog.Title>Delete draft</Dialog.Title>
                  <Dialog.Description>
                    This pattern is useful for destructive actions that need a
                    clear confirmation step.
                  </Dialog.Description>
                </View>
                <View className="gap-3">
                  <Button variant="danger" onPress={() => setConfirmOpen(false)}>
                    Delete draft
                  </Button>
                  <Button variant="tertiary" onPress={() => setConfirmOpen(false)}>
                    Cancel
                  </Button>
                </View>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog>

          <Dialog isOpen={formOpen} onOpenChange={setFormOpen}>
            <Dialog.Trigger asChild>
              <Button variant="outline">Open form dialog</Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay />
              <Dialog.Content>
                <View className="gap-2 mb-5">
                  <Dialog.Title>Invite teammate</Dialog.Title>
                  <Dialog.Description>
                    Dialogs can hold compact forms without leaving the screen.
                  </Dialog.Description>
                </View>
                <TextField isInvalid className="mb-5">
                  <Label>Email</Label>
                  <Input placeholder="teammate@example.com" />
                  <FieldError>Use a valid email before sending.</FieldError>
                </TextField>
                <Button onPress={() => setFormOpen(false)}>Send invite</Button>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog>
        </View>
      </ExampleSection>

      <ExampleSection title="Loading State">
        <View className="flex-row items-center gap-4">
          <Spinner />
          <View className="flex-1">
            <AppText className="text-foreground font-medium">
              Preparing preview
            </AppText>
            <AppText className="text-muted text-sm">
              Pair spinner states with concrete status text.
            </AppText>
          </View>
        </View>
      </ExampleSection>
    </ExampleScreen>
  );
}
