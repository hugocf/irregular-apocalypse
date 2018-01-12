import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import style from './style.css'

interface HeaderProps {}

interface HeaderState {}

export class Header extends Component<HeaderProps, HeaderState> {
  render () {
    return (
      <header class={style.header}>
        <h1>Irregular Apocalypse</h1>
        <nav>
          <Link activeClassName={style.active} href='/'>
            Home
          </Link>
          <Link activeClassName={style.active} href='/profile'>
            Me
          </Link>
          <Link activeClassName={style.active} href='/profile/john'>
            John
          </Link>
        </nav>
      </header>
    )
  }
}