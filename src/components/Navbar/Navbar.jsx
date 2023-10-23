import React, {useContext, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import styles from "./navbar.module.css"
import {SlMenu} from 'react-icons/sl'
// import {UserContext} from "../../context/AuthContext";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    useDisclosure,
} from '@chakra-ui/react'


const Navbar = () => {
    // const {user} = useContext(UserContext);
    const {onOpen, onClose, isOpen} = useDisclosure()
    const firstFieldRef = React.useRef(null)


    const [activeDropdown, setActiveDropdown] = useState(false);


    return <>
     <div className={styles.navbar}>
          <SlMenu/>
          <p>BB1</p>


     </div>
    
    
    </>
};

export default Navbar;