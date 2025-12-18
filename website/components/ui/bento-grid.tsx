import { ComponentPropsWithoutRef, ReactNode } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"

import { cn } from "@/lib/utils"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href: string
  cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-2xl cursor-pointer",
      className
    )}
    {...props}
  >
    {/* Background */}
    <div className="absolute inset-0">{background}</div>
    
    {/* Content */}
    <div className="relative z-10 p-5 md:p-6">
      {/* Badge Pill */}
      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm pl-1.5 pr-4 py-1.5 rounded-full w-fit mb-4">
        <div className="bg-[#f8d264] p-2 rounded-full">
          <Icon className="w-4 h-4 md:w-5 md:h-5 text-black" />
        </div>
        <span className="text-black text-sm font-semibold">
          {name}
        </span>
      </div>

      {/* Description */}
      <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 max-w-md">
        {description}
      </p>

      {/* CTA */}
      <Link 
        href={href}
        className="inline-flex items-center gap-2 text-white font-medium text-sm hover:gap-3 transition-all duration-300"
      >
        {cta}
        <ArrowRightIcon className="w-4 h-4" />
      </Link>
    </div>

    {/* Hover overlay */}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/10" />
  </div>
)

export { BentoCard, BentoGrid }
