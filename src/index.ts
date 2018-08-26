import { App } from './components/App'
import { injectGlobal } from 'preact-emotion'

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    background: #fafafa;
    font-family: 'Helvetica Neue', arial, sans-serif;
    font-weight: 400;
    color: #444;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  #app {
    height: 100%;
  }
`

export default App