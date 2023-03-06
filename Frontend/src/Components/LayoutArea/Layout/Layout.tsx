import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <Menu />
            <hr />
            <Routing />
        </div>
    );
}

export default Layout;
