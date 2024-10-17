'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense, use } from 'react'

import clsx from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { createSerializer, parseAsString } from 'nuqs'

export interface PaginationInfo {
  startCursorParamName?: string
  startCursor?: string
  endCursorParamName?: string
  endCursor?: string
}

interface Props {
  info: PaginationInfo | Promise<PaginationInfo>
}

export function Pagination({ info }: Props) {
  return (
    <Suspense fallback={<PaginationSkeleton />}>
      <PaginationResolved info={info} />
    </Suspense>
  )
}

function PaginationResolved({ info }: Props) {
  const {
    startCursorParamName = 'before',
    endCursorParamName = 'after',
    startCursor,
    endCursor,
  } = info instanceof Promise ? use(info) : info
  const searchParams = useSearchParams()
  const serialize = createSerializer({
    [startCursorParamName]: parseAsString,
    [endCursorParamName]: parseAsString,
  })

  return (
    <div className="flex w-full justify-center bg-background py-10 text-xs">
      <div className="flex gap-2">
        {startCursor != null ? (
          <PaginationLink href={serialize(searchParams, { [startCursorParamName]: startCursor })}>
            <ChevronLeft />
          </PaginationLink>
        ) : (
          <SkeletonLink>
            <ChevronLeft />
          </SkeletonLink>
        )}
        {endCursor != null ? (
          <PaginationLink href={serialize(searchParams, { [endCursorParamName]: endCursor })}>
            <ChevronRight />
          </PaginationLink>
        ) : (
          <SkeletonLink>
            <ChevronRight />
          </SkeletonLink>
        )}
      </div>
    </div>
  )
}

function PaginationLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={clsx(
        'flex h-12 w-12 items-center justify-center rounded-full border border-contrast-100 text-foreground ring-primary transition-colors duration-300 hover:bg-contrast-100 focus-visible:outline-0 focus-visible:ring-2'
      )}
    >
      {children}
    </Link>
  )
}

function SkeletonLink({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-12 w-12 cursor-not-allowed items-center justify-center rounded-full border border-contrast-100 text-foreground opacity-50 duration-300">
      {children}
    </div>
  )
}

function PaginationSkeleton() {
  return (
    <div className="flex w-full justify-center bg-background py-10 text-xs">
      <div className="flex gap-2">
        <SkeletonLink>
          <ChevronLeft />
        </SkeletonLink>
        <SkeletonLink>
          <ChevronRight />
        </SkeletonLink>
      </div>
    </div>
  )
}
