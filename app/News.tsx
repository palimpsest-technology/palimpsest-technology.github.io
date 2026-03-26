'use client'

import React, { type ReactNode } from 'react'

let charIndex = 0
let totalChunks = 0

function wrapChars(node: ReactNode, pass: 'count' | 'render'): ReactNode {
  if (typeof node === 'string') {
    const result: ReactNode[] = []
    let pos = 0
    while (pos < node.length) {
      const step = Math.floor(Math.random() * 3) + 1 // 1~3 글자씩
      const chunk = node.slice(pos, pos + step)
      const i = charIndex++
      if (pass === 'render') {
        result.push(
          <span
            key={i}
            className="animate-wave-bold inline"
            style={{
              animationDelay: `${i * 1}s`,
              animationDuration: `${totalChunks * 1}s`,
            }}
          >
            {chunk.replace(/ /g, '\u00A0')}
          </span>
        )
      }
      pos += step
    }
    return pass === 'render' ? result : null
  }

  if (React.isValidElement(node)) {
    return React.cloneElement(
      node,
      node.props,
      ...React.Children.map(node.props.children, (child) => wrapChars(child, pass))
    )
  }

  if (Array.isArray(node)) {
    return node.map((child) => wrapChars(child, pass))
  }

  return node
}

function NewsLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="rounded-sm px-1 text-blue-700 hover:bg-blue-700 hover:text-white">
      {children}
    </a>
  )
}

export default function News() {
  const content = (
    <ul className="pb-2">
      • Will exhibit <i>Pal Podcast</i> at{' '}
      <NewsLink href="https://forkingroom.kr">ForkingRoom</NewsLink> (April 15–19, 2026) in Seoul,
      South Korea.
    </ul>
  )

  // 1st pass: count total chunks
  charIndex = 0
  wrapChars(content, 'count')
  totalChunks = charIndex

  // 2nd pass: render with correct total duration
  charIndex = 0
  return <>{wrapChars(content, 'render')}</>
}
