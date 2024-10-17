'use client'

import React from 'react'

import { Button } from '@/vibes/soul/primitives/button'
import { Product } from '@/vibes/soul/primitives/product-card'
import * as SidePanel from '@/vibes/soul/primitives/side-panel'

import { CompareCard, CompareCardSkeleton } from './compare-card'

interface Props {
  products: Product[]
}

export function ComparePanel({ products }: Props) {
  return (
    <SidePanel.Root>
      <SidePanel.Trigger asChild>
        <Button asChild>
          <div className="flex">
            Compare<span className="hidden @4xl:block">&nbsp;Items</span>
          </div>
        </Button>
      </SidePanel.Trigger>
      <SidePanel.Content
        title={
          <>
            Compare <span className="text-contrast-300">{products.length} Products</span>
          </>
        }
      >
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 @xl:grid-cols-2">
          {products.length > 0
            ? products.map(product => <CompareCard key={product.id} {...product} />)
            : Array.from({ length: 5 }).map((_, index) => <CompareCardSkeleton key={index} />)}
        </div>
      </SidePanel.Content>
    </SidePanel.Root>
  )
}
