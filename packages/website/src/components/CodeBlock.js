import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { useMDXComponents, mdx } from '@mdx-js/react'
import { Box, Card, theme as faencyTheme } from '@containous/faency'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
const { colors } = faencyTheme

const theme = {
  plain: {
    color: colors.grays[8],
    backgroundColor: 'white',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#999988',
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: 'hsl(330, 75%, 45%)',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: colors.gray600,
      },
    },
    {
      types: ['entity', 'url', 'symbol', 'number', 'boolean', 'variable', 'constant', 'property', 'regex', 'inserted'],
      style: {
        color: 'hsl(180, 55%, 35%)',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: 'hsl(195, 90%, 35%)',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: 'hsl(330, 75%, 45%)',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: 'hsl(180, 50%, 35%)',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: colors.blue700,
      },
    },
  ],
}

const CodeBlock = ({ children, live, removeFragment }) => {
  const components = useMDXComponents()

  const liveProviderProps = {
    transformCode: code => (removeFragment ? code : `<>${code}</>`),
    scope: { mdx, ...components },
  }

  if (live) {
    return (
      <Box mt={4}>
        <LiveProvider code={children.trim()} {...liveProviderProps} theme={nightOwl}>
          <LivePreview
            style={{
              paddingBottom: faencyTheme.space[3]
            }}
          />

          {/* <Card> */}
          <LiveEditor
            padding={faencyTheme.space[3]}
            style={{
              borderRadius: faencyTheme.radii[2],
              borderTop: 'none',
              fontSize: faencyTheme.fontSizes[2],
              fontFamily: faencyTheme.fonts.mono,
              fontWeight: 400,
              lineHeight: 1.5,
            }}
            css={{ textarea: { outline: 0 } }}
          />

          <LiveError />
          {/* </Card> */}
        </LiveProvider>
      </Box>
    )
  }

  return (
    <Box mt={4}>
      {/* <Card> */}
      <LiveProvider code={children.trim()} {...liveProviderProps} theme={nightOwl}>
        <LiveEditor
          padding={faencyTheme.space[3]}
          style={{
            borderRadius: faencyTheme.radii[2],
            fontSize: faencyTheme.fontSizes[2],
            fontFamily: faencyTheme.fonts.mono,
            fontWeight: 400,
            letterSpacing: '-0.0175em',
            lineHeight: 1.5,
          }}
          css={{ textarea: { paddingBottom: '0 !important' } }}
          disabled
        />
      </LiveProvider>
      {/* </Card> */}
    </Box>
  )
}

export default CodeBlock
