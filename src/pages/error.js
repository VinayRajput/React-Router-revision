import MainNavigation from "../components/mainNavigation";

const errorPage  = () => {
    return <>
        <MainNavigation/>
        <main>
            <h1>404! </h1>
            <p>Could not find this page!</p>
        </main>
    </>
}

export default errorPage