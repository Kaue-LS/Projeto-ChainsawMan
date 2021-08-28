import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./Main.scss";
import { Container } from "../../Components/Container/styled";
import ReadAll from "../ReadAll/ReadAll";
import Create from "../Create/Create";
import DeleteAll from "../DeleteAll/DeleteAll";
import About from "../About/About";
import ReadOne from "../ReadOne/ReadOne";
import UpdateOne from "../UpdateOne/Update";
import DeleteOne from '../DeleteOne/DeleteOne'
// import { ThemeButton } from "../../Components/ThemeButton/styled";


export default function Main() {
  

  return (
    
      <BrowserRouter>
        <Navbar />
        <Container>
          <Switch>
            <Route path="/" exact component={ReadAll}></Route>
            <Route path="/create" component={Create}></Route>
            <Route path="/deleteall" component={DeleteAll}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/view/:id" component={ReadOne}></Route>
            <Route path="/update/:id" component={UpdateOne}></Route>
            <Route path="/delete/:id" component={DeleteOne}></Route>

          </Switch>

          {/* <ThemeButton className="im im-light-bulb"></ThemeButton> */}
        </Container>
      </BrowserRouter>
    
  );
}
