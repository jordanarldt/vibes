import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'
import { LoadingIcon } from '@/vibes/2px/components/icons/LoadingIcon'

export interface ButtonProps extends React.ComponentProps<'button'> {
  className?: string
  variant?: 'primary' | 'secondary' | 'subtle'
  loading?: boolean
  loadingText?: string
  children: React.ReactNode
  asChild?: boolean
}

export default function Button({
  className,
  variant = 'primary',
  loading,
  children,
  asChild = false,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : 'button'
  return (
    <Component
      className={cn(
        'group mx-auto flex items-center justify-center whitespace-nowrap rounded-full border-2 border-transparent font-body',
        'h-10 px-5 py-2.5 text-sm leading-tight @lg:h-20 @lg:px-20 @lg:text-lg',
        loading && variant === 'primary' && 'hover:bg-transparent hover:text-background',
        loading && variant === 'secondary' && 'hover:border-solid',
        {
          primary:
            'bg-foreground text-background hover:border-foreground hover:bg-transparent hover:text-foreground',
          secondary: 'border-foreground bg-transparent text-foreground hover:border-dashed',
          // our vibe doesn't have a subtle button variant, so we'll just repeat the primary variant
          subtle:
            'bg-foreground text-background hover:border-foreground hover:bg-transparent hover:text-foreground',
        }[variant],
        className
      )}
      {...props}
    >
      {loading ? (
        <LoadingIcon
          className={cn('h-4 w-4 @lg:h-6 @lg:w-6', {
            'stroke-background group-hover:stroke-foreground':
              variant === 'primary' || variant === 'subtle',
            'stroke-foreground': variant === 'secondary',
          })}
        />
      ) : (
        children
      )}
    </Component>
  )
}
