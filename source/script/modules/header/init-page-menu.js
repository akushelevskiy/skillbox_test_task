export const initPageMenu = ()=>{

    const resizeObserver = new ResizeObserver((entries, observer) => {
        for(let entry of entries){
            const width = entry.contentBoxSize[0].inlineSize

            if(width<1024){
                document.addEventListener('keydown', onKeyPress)
                hideMenuItems()
            }else{
                document.removeEventListener('keydown', onKeyPress)
                if (document.querySelector('.header__sandwich').classList.contains('is-active')) {
                    hideMenu()
                }
                showMenuItems()
            }

        }

    })
    const onKeyPress = (e)=>{
        console.log(e.keyCode)
        if(e.keyCode === 27){
            if (document.querySelector('.header__sandwich').classList.contains('is-active')) {
                hideMenu()
            }
        }
    }
    const disableScroll = ()=>{
        document.querySelector('body').classList.add('scroll-lock')
    }
    const enableScroll = ()=>{
        document.querySelector('body').classList.remove('scroll-lock')
    }
    const FadeIn = (el,timeout)=>{
        setTimeout(()=>{
            if(el) {
                el.style.opacity = 1;
                el.style.transform = 'translateX(0)'
                FadeIn(el.nextElementSibling, timeout)
            }
        },timeout)
    }

    const showMenuItemsOneByOne = ()=>{
        let firstMenuItem = document.querySelector('.main-nav__item')
        FadeIn(firstMenuItem,100)
    }
    const showMenuItems = ()=>{
        let menuItems = document.querySelectorAll('.main-nav__item')
        menuItems.forEach((menuItem)=>{
            menuItem.style.opacity =1;
            menuItem.style.transform = 'translateX(0)'
        })
    }
    const hideMenuItems = ()=>{
        let menuItems = document.querySelectorAll('.main-nav__item')
        menuItems.forEach((menuItem)=>{
            menuItem.style.opacity =0;
            menuItem.style.transform = 'translateX(-15px)'
        })
    }
    const showMenu = ()=>{
        document.querySelector('.header__sandwich').classList.add('is-active')
        document.querySelector('.main-nav').classList.add('is-active')
        document.querySelector('.header__logo').classList.add('is-menu')
        disableScroll()
        showMenuItemsOneByOne()
    }
    const hideMenu = ()=>{
        document.querySelector('.header__sandwich').classList.remove('is-active')
        document.querySelector('.main-nav').classList.remove('is-active')
        document.querySelector('.header__logo').classList.remove('is-menu')

        enableScroll()
        hideMenuItems()
    }
    const toggleMenu = ()=>{
        if (!document.querySelector('.header__sandwich').classList.contains('is-active')) {
            showMenu()
        }
        else {
            hideMenu()
        }
    }
    resizeObserver.observe(document.querySelector('.wrapper'))

    document.querySelector('.header__sandwich').addEventListener('click',()=>{
        toggleMenu()
    })
}
