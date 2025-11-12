import { ShoppingBasket, Pill, Moon, Droplets, Brain } from 'lucide-react';

interface PillarIconProps {
  type: 'diet' | 'supplements' | 'sleep' | 'detox' | 'brain';
  className?: string;
}

export function PillarIcon({ type, className = 'w-10 h-10' }: PillarIconProps) {
  const iconProps = {
    className,
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  const icons = {
    diet: <ShoppingBasket {...iconProps} />,
    supplements: <Pill {...iconProps} />,
    sleep: <Moon {...iconProps} />,
    detox: <Droplets {...iconProps} />,
    brain: <Brain {...iconProps} />,
  };

  return icons[type];
}
