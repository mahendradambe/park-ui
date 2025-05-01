
import type { Pages } from '.velite'
import { Collapsible } from '@ark-ui/react/collapsible'
import { Link, useRouterState } from '@tanstack/react-router'
import { ChevronRightIcon } from 'lucide-react'
import { Badge } from '~/components/ui/badge'
import { Icon } from '~/components/ui/icon'
import { recipe } from '../sidebar.recipe'

const styles = recipe()

interface Props {
  groups: Pages[][]
}

export const DocsSidebar = (props: Props) => {
  const { groups } = props
  const pathname = useRouterState().location.pathname

  return (
    <nav>
      <ul className={styles.root}>
        {groups.map((group, id) => {
          const uniqueGroup = uniqueByTitle(group)
          return (
            <li key={id} className={styles.group}>
              <Collapsible.Root defaultOpen>
                <Collapsible.Trigger className={styles.trigger}>
                  <span> {group[0].category}</span>
                  <Icon size="sm" className={styles.indicator}>
                    <ChevronRightIcon />
                  </Icon>
                </Collapsible.Trigger>
                <Collapsible.Content>
                  <ul>
                    {uniqueGroup.map((item) => {
                      const href = `/docs/${item.slug}` as const
                      return (
                        <li key={item.id}>
                          <Link
                            to={href}
                            className={styles.link}
                          >
                            {item.title}
                            {item.status && (
                              <Badge textTransform="capitalize" size="sm">
                                {item.status}
                              </Badge>
                            )}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </Collapsible.Content>
              </Collapsible.Root>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const uniqueByTitle = (items: Pages[]): Pages[] =>
  Array.from(new Map(items.map((item) => [item.title, item])).values())
