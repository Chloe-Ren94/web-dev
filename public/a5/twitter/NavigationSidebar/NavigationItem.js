const NavigationItem = (navigation, active) => {
    return(`
        <a href=${navigation.link} class="list-group-item ${active === navigation.text ? 'active' : ''}">
           ${navigation.icon}
           <span class="d-none d-xl-inline-block">${navigation.text}</span>
        </a>
    `)
}
export default NavigationItem;