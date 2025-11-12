import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary:
        'bg-gradient-to-br from-primary-600 to-primary-800 text-white hover:shadow-xl hover:scale-105 focus:ring-primary-500',
      secondary:
        'bg-gradient-to-br from-accent-500 to-accent-600 text-white hover:shadow-xl hover:scale-105 focus:ring-accent-500',
      outline:
        'bg-white border-2 border-neutral-200 text-neutral-900 hover:border-primary-600 hover:text-primary-600 hover:shadow-md focus:ring-primary-500',
      ghost:
        'bg-transparent text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 focus:ring-neutral-500',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    if (asChild && children) {
      // Clone the child element and add the className to it
      const child = children as any;
      if (child?.type) {
        return <child.type {...child.props} className={cn(combinedClassName, child.props?.className)} />;
      }
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
