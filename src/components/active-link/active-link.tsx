'use client'

import { cn } from '@/lib/utils'
import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactNode
}

export function ActiveLink({ children, href, ...props }: ActiveLinkProps) {
  const linkPath = (typeof href === 'string' ? href : href.pathname) ?? ''
  const pathname = usePathname()
  const isActive = pathname === linkPath || pathname?.startsWith(`${linkPath}/`)

  return (
    <Link
      {...props}
      href={href}
      className={cn(
        'text-action-sm transition-colors hover:text-blue-200',
        isActive ? 'text-blue-200' : 'text-gray-100'
      )}
    >
      {children}
    </Link>
  )
}
