import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ButtonWithTooltipProps {
  children: React.ReactNode
  tooltip: React.ReactNode;
}

export default function ButtonWithTooltip( { children, tooltip } : ButtonWithTooltipProps) {
  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip delay={0}>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
