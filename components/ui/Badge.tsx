import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'outline';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default:
        'bg-gradient-to-br from-primary-600 to-accent-500 text-white shadow-md',
      success:
        'bg-success-500 text-white',
      outline:
        'bg-white border-2 border-primary-600 text-primary-600',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
