import { View } from 'react-native';
import {
  ExampleRouteCard,
  ExampleScreen,
  type ExampleRoute,
} from '../../../components/examples/example-layout';

const EXAMPLE_ROUTES: ExampleRoute[] = [
  {
    title: 'Foundations',
    description: 'Theme colors, surfaces, typography, chips, and spacing.',
    href: '/examples/foundations',
    icon: 'layers',
    badge: 'Basics',
  },
  {
    title: 'Inputs',
    description: 'Buttons, text fields, checkboxes, switches, and radio groups.',
    href: '/examples/inputs',
    icon: 'edit-3',
    badge: 'Forms',
  },
  {
    title: 'Feedback',
    description: 'Toasts, dialogs, alerts, spinners, and loading states.',
    href: '/examples/feedback',
    icon: 'message-square',
    badge: 'States',
  },
  {
    title: 'Layout',
    description: 'Cards, sections, tabs, accordions, and content rhythm.',
    href: '/examples/layout',
    icon: 'layout',
    badge: 'Structure',
  },
  {
    title: 'Overlays',
    description: 'Bottom sheets and modal patterns for mobile workflows.',
    href: '/examples/overlays',
    icon: 'maximize-2',
    badge: 'Mobile',
  },
  {
    title: 'Auth Screen',
    description: 'A realistic login screen assembled from form components.',
    href: '/examples/auth-screen',
    icon: 'lock',
    badge: 'Screen',
  },
  {
    title: 'Settings Screen',
    description: 'A dense settings page with toggles and confirmation flows.',
    href: '/examples/settings-screen',
    icon: 'settings',
    badge: 'Screen',
  },
  {
    title: 'Paywall Screen',
    description: 'Pricing cards, plan selection, and a bottom-sheet checkout.',
    href: '/examples/paywall-screen',
    icon: 'credit-card',
    badge: 'Screen',
  },
];

export default function ExamplesIndexScreen() {
  return (
    <ExampleScreen
      eyebrow="HeroUI Native Lab"
      title="Examples"
      description="Small, editable screens for learning how HeroUI Native components behave inside Expo."
    >
      <View className="gap-4">
        {EXAMPLE_ROUTES.map((route, index) => (
          <ExampleRouteCard
            key={String(route.href)}
            route={route}
            index={index}
          />
        ))}
      </View>
    </ExampleScreen>
  );
}
