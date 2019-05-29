import React, { useState, ReactElement, useEffect, useRef } from 'react'
import Fuse from 'fuse.js'
import styled from 'styled-components'
import shortcuts from '../../shortcuts'

import { keyToSymbol } from '../../shortcuts/shortcuts'
import { GoToIcon, CreateIcon } from '../../icons/ui'

function handleShortcutSelection(shortcut: { name: string }) {
  shortcuts.handleShortcutFeature(shortcut)
}

interface CommandProps {
  ideas?: any[]
  name: string
}

function useActiveListItem(initial: number, list: any[], name: string): number {
  const [active, setActive] = useState<number>(initial)
  const length: number = list.length

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case 'ArrowUp':
          setActive(currentActive => {
            if (currentActive === 0) return length - 1

            return currentActive - 1
          })
          break
        case 'ArrowDown':
          setActive(currentActive => {
            if (currentActive === length - 1) return 0

            return currentActive + 1
          })
          break
        default:
          return
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [length])

  useEffect(() => {
    setActive(0)
  }, [name])

  if (active >= length) {
    setActive(length - 1)
  }

  return active > 0 ? active : 0
}

const fuseOptions = {
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 20,
  minMatchCharLength: 2,
  keys: ['label'],
}

function CommandLineOptions({ list = [], name }: CommandProps) {
  const filteredList = list.filter(item => item.label)
  const fuse = new Fuse(filteredList, fuseOptions)

  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const [value, setValue] = useState('')

  const results = value ? fuse.search(value) : list
  const activeCommand = useActiveListItem(0, results, name)
  const placeholder =
    name === 'COMMAND_LINE_READ' ? 'Choose your article' : 'Type your command'

  useEffect(() => {
    inputRef.current.focus()
  }, [inputRef])

  if (listRef.current) {
    if (activeCommand > 3) {
      listRef.current.scrollTo({ top: (activeCommand - 3) * 61 })
    } else {
      listRef.current.scrollTo({ top: 0 })
    }
  }

  useEffect(() => {
    setValue('')
  }, [list])

  return (
    <>
      <Form
        onSubmit={event => {
          event.preventDefault()
          handleShortcutSelection(results[activeCommand])
        }}
      >
        <StyledInput
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={event => {
            setValue(event.target.value)
          }}
        />
      </Form>
      <List ref={listRef}>
        {results.map((shortcut: any, index) => {
          const highlight = index === activeCommand

          return (
            <Shortcut
              key={shortcut.label + index}
              highlight={highlight}
              onClick={() => handleShortcutSelection(results[index])}
            >
              {labelToHighlighted(shortcut.label, highlight)}
              <ShortcutKeys>
                {shortcut.keys &&
                  shortcut.keys.map((key: any) => (
                    <div key={keyToSymbol(key)}>{keyToSymbol(key)}</div>
                  ))}
              </ShortcutKeys>
            </Shortcut>
          )
        })}
      </List>
    </>
  )
}

export default CommandLineOptions

const labelToHighlighted = (
  label: string,
  highlight?: boolean
): ReactElement => {
  const shortcutActionDefinitions = [
    { key: 'Contact', Icon: CreateIcon },
    { key: 'Read', Icon: GoToIcon },
    { key: 'Close', Icon: GoToIcon },
    { key: 'Go to', Icon: GoToIcon },
  ]

  const fallback = { key: label, Icon: GoToIcon }

  const { key, Icon } =
    shortcutActionDefinitions.find(({ key }) => label.includes(key)) || fallback

  const fill: string = highlight ? '#6166DC' : '#DADADA'

  return (
    <Label>
      <Icon fill={fill} />
      <LabelText>
        <Regular highlight={highlight}>{key}</Regular>
        <Highlight highlight={highlight}>{label.split(key)[1]}</Highlight>
      </LabelText>
    </Label>
  )
}

const Label = styled.div`
  display: flex;
  align-items: center;
`

const LabelText = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

const Regular = styled.div<{ highlight: boolean | undefined }>`
  color: ${p => (p.highlight ? '#fff' : p.theme.colors.moon)};
  margin-right: 5px;
`

const Highlight = styled.div<{ highlight: boolean | undefined }>`
  color: ${p => (p.highlight ? p.theme.colors.purple : p.theme.colors.moon)};
  font-weight: 600;
`

const Form = styled.form`
  padding: 24px 24px 0 24px;
  margin-bottom: 30px;
`

const List = styled.ul`
  position: relative;
  list-style: none;
  height: 246px;
  overflow-y: scroll;
  overflow-x: hidden;
`

const Shortcut = styled.li<{ highlight: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${p => (p.highlight ? 'rgba(17, 18, 22, 0.5)' : 'transparent')};
  padding: 0 24px;
  height: 61px;
  font-size: 18px;
  color: ${p => p.theme.colors.moon};
  cursor: pointer;

  &:hover {
    background: rgba(17, 18, 22, 0.5);
  }
`

const ShortcutKeys = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;

  div {
    display: flex;
    justify-content: center;
    height: 16px;
    min-width: 16px;
    text-align: center;
    border-radius: 2.5px;
    padding: 1px 4px;
    color: #000;
    background: #fff;

    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`

const StyledInput = styled.input`
  height: 44px;
  width: 100%;
  background: transparent;
  font-size: 36px;
  color: ${p => p.theme.colors.moon};
  border: none;
  caret-color: ${p => p.theme.colors.purple};

  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.15);
    font-weight: 200;
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.15);
    font-weight: 200;
  }
`