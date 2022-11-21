import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListConteiner/ItemListContainer";


const App = ()=>{
    return (
        <div>
        <NavBar/>
        <ItemListContainer greeting={"Star Nutrition Suplementos"} />
        </div>
    )
}
export default App;
