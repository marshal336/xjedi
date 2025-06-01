import { IoIosHome, IoIosPeople } from "react-icons/io";
import { FaNewspaper, FaBookOpen } from "react-icons/fa";
import { MdAirplay, MdHelpCenter, MdOutlineStackedLineChart } from "react-icons/md";

export const headerMenuLinks = [
    {
        logo: <IoIosHome />,
        link: '/',
        title: 'Home'
    },
    {
        logo: <FaNewspaper />,
        link: '/news',
        title: 'News'
    },
    {
        logo: <IoIosPeople />,
        link: '/forum',
        title: 'Forum'
    },
    {
        logo: <MdAirplay />,
        link: '/how-to-play',
        title: 'How to play'
    },
    {
        logo: <FaBookOpen />,
        link: '/rules',
        title: 'Rules'
    },
    {
        logo: <MdHelpCenter />,
        link: '/help',
        title: 'Help'
    },
    {
        logo: <MdOutlineStackedLineChart />,
        link: '/rating',
        title: 'Rating'
    },
]