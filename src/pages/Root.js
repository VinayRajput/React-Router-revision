import MainNavigation from "../components/mainNavigation";
import {Outlet} from 'react-router-dom';
import classes from '../style/index.css';

const RootLayout = () => {
    return <>
        <MainNavigation/>
        <main className={classes.content}>
            <Outlet/>
        </main>
    </>
}

export default RootLayout