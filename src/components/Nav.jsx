import React from 'react'

const logo = require('../assets/images/dj.svg')

class Nav extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
              profileOpen: false,
              navOpen: false
      };

          this.toggleNavMenu = this.toggleNavMenu.bind(this);
          
          this.toggleProfileMenu = this.toggleProfileMenu.bind(this);
    }

	  toggleNavMenu() {
		  this.setState({ navOpen: !this.state.navOpen });
    }

    toggleProfileMenu() {
		  this.setState({ profileOpen: !this.state.profileOpen });
    }
    
    render () {
      return (
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8" src={logo} alt="DJ Logo" />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Home</a>
                    <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">About</a>
                    <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Services</a>
                    <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Contact</a>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">    
                  {/* <!-- Profile dropdown --> */}
                  <div className="ml-3 relative">
                    <div>
                      <button onClick={this.toggleProfileMenu} className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true">
                        USER MENU
                      </button>
                    </div>
                    {/* Profile dropdown panel, show/hide based on dropdown state */}
                    <div className={this.state.profileOpen ? "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg block md:block" : "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg hidden md:hidden"}>
                      <div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div onClick={this.toggleNavMenu} className="-mr-2 flex md:hidden">
                {/* <!-- Mobile menu button --> */}
                <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                  <svg className={this.state.navOpen ? "hidden h-6 w-6" : "block h-6 w-6"} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <svg className={this.state.navOpen ? "block h-6 w-6" : "hidden h-6 w-6"} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={this.state.navOpen ? "block md:block" : "hidden md:hidden"}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Home</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">About</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Services</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Contact</a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5 space-x-3">
                <div className="flex-shrink-0">
                  USER MENU
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Your Profile</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Settings</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Sign out</a>
              </div>
            </div>
          </div>
        </nav>
      )
    }
}


export default Nav