import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { Loader2 } from 'lucide-react'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'default' | 'small'
  onClick?: () => void
  loading?: boolean
  asChild?: boolean
}

export const Button = function Button({
  variant = 'primary',
  size = 'default',
  onClick,
  loading,
  className,
  children = 'Button',
  asChild = false,
  ...props
}: Props) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={clsx(
        'relative flex w-fit shrink-0 justify-center overflow-hidden rounded-full',
        'select-none text-center font-medium leading-normal',
        'border border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2',
        {
          primary: 'bg-primary text-foreground ring-primary-shadow',
          secondary: 'bg-foreground text-background ring-primary hover:border-foreground ',
          tertiary: 'bg-background text-background ring-primary hover:border-background',
        }[variant],
        {
          default: 'px-6 py-[13px] text-base',
          small: 'px-4 py-2 text-sm',
        }[size],
        // After Pseudo Element / Animated Background Styles
        'after:absolute after:inset-0 after:z-0 after:h-full after:w-full after:rounded-full',
        'after:transition-[opacity,transform] after:duration-300 after:ease-out',
        'after:-translate-x-[110%]',
        !loading && 'hover:after:translate-x-0',
        {
          primary: 'after:bg-white/40',
          secondary: 'after:bg-background',
          tertiary: 'after:bg-foreground',
        }[variant],
        {
          default: 'after:h-[50px]',
          small: 'after:h-[37px]',
        }[size],
        className
      )}
      onClick={onClick}
      aria-busy={loading}
      {...props}
    >
      <div className={clsx(!asChild && 'h-full')}>
        {/* Children */}
        <div
          className={clsx(
            'relative z-50 flex h-full items-center justify-center gap-2 transition-colors',
            loading && 'opacity-0',
            {
              ['mix-blend-difference']: variant === 'secondary' || variant === 'tertiary',
            }
          )}
        >
          {children}
        </div>

        {/* Loading */}
        {loading && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Loader2
              className={clsx('animate-spin', variant === 'tertiary' && 'text-foreground')}
            />
          </div>
        )}
      </div>
    </Comp>
  )
}

export default Button
