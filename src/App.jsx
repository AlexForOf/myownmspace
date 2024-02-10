import React from 'react'
import './App.css'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import Header from './components/header/Header'
import { Button, Icon } from 'semantic-ui-react'

function App() {

  const [isCollapsedSidebar, setIsCollapsedSidebar] = React.useState(false)

  return (
    <main className='main-page-main'>
      <section>
        <Sidebar collapsed={isCollapsedSidebar}
          rootStyles={{
            height: "100%"
          }}
        >
          <Menu
            menuItemStyles={{
              button: {
                [`&.active`]: {
                  backgroundColor: '#13395e',
                  color: '#b6c8d9',
                },
              },
            }}
          >
            <MenuItem icon={<Icon name='bars' size='small'/>} onClick={() => setIsCollapsedSidebar(!isCollapsedSidebar)}></MenuItem>
            <MenuItem icon={<Icon name='home' size='small'/>}> Home </MenuItem>
            <MenuItem icon={<Icon name='calendar' size='small'/>}> Calendar </MenuItem>
            <SubMenu label="Boards" icon={<Icon name='table' size='small'/>}>
              <MenuItem> Board1 </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </section>
      <section className='main-page-content'>
        <Header />
      </section>
    </main>
  )

}

export default App
