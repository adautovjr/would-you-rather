import HomeIcon from '@material-ui/icons/Home';
// import ListIcon from '@material-ui/icons/List';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const menuItems = [
    {
        label: "Home",
        icon: <HomeIcon />,
        path: "/"
    },
    {
        label: "Submit a question",
        icon: <AddCircleIcon />,
        path: "/add"
    },
    {
        label: "Leaderboard",
        icon: <EmojiEventsIcon />,
        path: "/leaderboard"
    }
];  

export default menuItems;