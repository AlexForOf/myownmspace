import React from "react"
import "./Header.css"
import { Button, Dropdown, DropdownMenu, DropdownDivider, DropdownItem, Image, Menu, MenuItem, MenuMenu } from "semantic-ui-react";

const friendOptions = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess',
      image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu',
      image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
    {
      key: 'Stevie Feliciano',
      text: 'Stevie Feliciano',
      value: 'Stevie Feliciano',
      image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
    },
    {
      key: 'Christian',
      text: 'Christian',
      value: 'Christian',
      image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
    },
    {
      key: 'Matt',
      text: 'Matt',
      value: 'Matt',
      image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
    },
    {
      key: 'Justen Kitsune',
      text: 'Justen Kitsune',
      value: 'Justen Kitsune',
      image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
  ]
const Header = () => {
    const image = "https://react.semantic-ui.com/images/wireframe/image.png"


    return (
        <header className="page-main-header">
            <div className="main-header-info">
                <div className="header-info header-info-left">
                    <Image src={image} size='tiny' />
                </div>
                <div className="header-info header-info-right">
                    <h2>Board 1</h2>
                    <p>Description</p>
                </div>
            </div>
            <div className="custom-menu main-header-menu">
                <Menu secondary>
                    <MenuItem 
                        name="List"
                    />
                    <MenuItem 
                        name="Board"
                    />
                    <MenuItem 
                        name="Schedule"
                    />
                </Menu>
            </div>
            <div className="custom-menu main-header-users">
                <Menu secondary>
                    <Dropdown item placeholder="Users" selection options={friendOptions}>
                    </Dropdown>
                    <Dropdown item text="Filter" direction="left">
                        <DropdownMenu>
                            <DropdownItem>Electronics</DropdownItem>
                            <DropdownItem>Automotive</DropdownItem>
                            <DropdownItem>Home</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <MenuItem>
                        <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" avatar />
                        <span>User</span>
                    </MenuItem>
                </Menu>
            </div>
        </header>
    )

}

export default Header;
