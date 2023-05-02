import * as TooltipBase from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContent } from './styles'
import { ComponentProps, ReactNode } from 'react'

export interface TooltipProps extends ComponentProps<typeof TooltipBase.Root> {
  content: string | ReactNode
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipBase.Provider>
      <TooltipBase.Root {...props}>
        <TooltipBase.Trigger asChild>{children}</TooltipBase.Trigger>
        <TooltipBase.Portal>
          <TooltipContent>
            <TooltipArrow />

            {content}
          </TooltipContent>
        </TooltipBase.Portal>
      </TooltipBase.Root>
    </TooltipBase.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
