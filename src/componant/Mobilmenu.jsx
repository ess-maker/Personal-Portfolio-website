import { useState } from "react"
import assets from "../assets/imges"
import { navlinks } from "../content"
import styles from "../style"
import Inbutton from "./Inbutton"
import useClickOutside from "../hooks/useclickoutside"
import Toggle_switch from "./Toggle_switch"


const Mobilmenu = (prop) => {
    const [activeSection, setActiveSection] = useState("")
    const Ref = useClickOutside(prop.handelclose);
    const darkmode = localStorage.getItem('theme') === 'dark';
    const hamza = `<HaMza />`

    const handleSectionClick = (sectionId) => {
        setActiveSection(sectionId);
      };


  return (
    <>
    {prop.open && <div className="fixed z-[50] h-screen w-screen ${lo}  bg-Gray_900 opacity-95 lg:hidden top-0 left-0"></div>}
        <div ref={Ref} className={`fixed z-[60] ${darkmode ? 'bg-gray_dark_50' : 'bg-white'}  dark: ${prop.open ? "right-0 opacity-100" : "-right-[80rem] opacity-0"} h-screen w-1/2 top-0   shadow-2xl duration-500 ease-in xl:hidden`}>
            <div className={`${styles.flexBetween} p-4`}>
                <h1 className={`text-2xl not-italic font-bold leading-9 tracking-[-0.0375rem] font-Inter ${darkmode ? 'text-white' : 'text-Gray_900'}`}>{hamza}</h1>
                <img src={assets.close} onClick={prop.handelclose} alt="close" className="h-10 w-10 cursor-pointer" />
            </div>
            <ul className='flex-col border-y border-solid border-Gray_100 dark:border-gray_dark_400 flex gap-6 p-4'>
            {navlinks.map(nav => (
                <li key={nav.id}  onClick={() => handleSectionClick(nav.id)} className={`${styles.Body2} ${
                    activeSection === nav.id ? "!text-Gray_900 " : "" 
                  } duration-500 ${darkmode ? 'text-white' : 'text-Gray_900'} hover:text-Gray_900 text-[#4B5563]`}> <a href={`#${nav.id}`}>{nav.titel}</a></li>
            ))}
        </ul>
        <div className="flex-col flex gap-4 justify-center p-4">
            <Inbutton styles = {`${darkmode ? 'text-black dark:bg-white ' : 'text-white bg-Gray_900'} !w-full `}  link={assets.Resume} name="Download CV" />
        </div>
        </div>
        </>
      )
}

export default Mobilmenu