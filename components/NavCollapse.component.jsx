const NavCollapse = ({ children  }) => {
    const collapseNav = () => {
    }

    return <div className="navCollapse" onClick={() => collapseNav()}>
        {children}
    </div>
}

export default NavCollapse;
