import{ useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdb-react-ui-kit';

const Navbar = () => {
  const [openNavSecond, setOpenNavSecond] = useState(false);
  return (
    
    <div>

    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <div style={{display:'flex',justifyContent: 'space-between'}}>
      <MDBNavbarBrand href='/' style={{marginBlock:'10'}}>
            <img
              src='https://res.cloudinary.com/dycpjbdto/image/upload/v1708778225/new-removebg-preview_xdfemo.png'
              height='65'
              width='600%'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
          </div>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <div style={{display:"flex", justifyContent:'space-around' }}>
        <MDBCollapse navbar open={openNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current='page' href='/'>
              Home
            </MDBNavbarLink>
            <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
            <MDBNavbarLink href='/client'>Plan Your Event</MDBNavbarLink>
            <MDBNavbarLink href='/portfolio'>PortFolio</MDBNavbarLink>
            <MDBNavbarLink href='/letstalk'>Lets Talk!</MDBNavbarLink>
            <MDBNavbarLink href='/AboutUs'>About Us</MDBNavbarLink>
            <MDBNavbarLink href='/login' style={{color:'#00A3AF'}} >
                <strong>Are You Vendor?</strong>
              </MDBNavbarLink>
              <MDBDropdown >
                <MDBDropdownToggle tag='a' className='nav-link' role='button' style={{color:'#00A3AF'}}>
<strong>Login As:</strong>                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem  href='/login' link>Event Planner</MDBDropdownItem>
                  <MDBDropdownItem href='/login' link>Client</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
          </MDBNavbarNav>
        </MDBCollapse>
        </div>
      </MDBContainer>
    </MDBNavbar>




    </div>
    )
    }
    export default Navbar;
