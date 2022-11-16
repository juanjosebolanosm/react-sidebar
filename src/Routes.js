import { Restaurant } from "@material-ui/icons";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "./pages/Products";
import UserCreate from "./UserCreate";
import UserUpdate from "./pages/DeliveryUpdate";
import Restaurants from "./pages/Restaurants";
import Domiciliarios from "./pages/Domiciliario";
import CreateRestaurant from "./pages/CreateRestaurant";
import CreateProduct from "./pages/CreateProduct";
import Manager from "./pages/Manager";
import CreateManager from "./pages/CreateManager";
import CreateDelivery from "./pages/CreateDelivery";
import RestaurantUpdate from "./pages/RestaurantUpdate";
import ProductUpdate from "./pages/ProductUpdate";
import ManagerUpdate from "./pages/ManagerUpdate";
import DeliveryUpdate from "./pages/DeliveryUpdate";


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                {/* <Users /> */}
                <Restaurants />
            </Route>
            <Route exact path="/productos">
                <Products />
            </Route>
            <Route exact path="/manager">
                <Manager />
            </Route>
            <Route exact path='/createRestaurant' component={CreateRestaurant} />
            <Route exact path='/createProduct' component={CreateProduct} /> 
            <Route exact path='/createManager' component={CreateManager} />
            <Route exact path='/createDelivery' component={CreateDelivery} />
            <Route exact path='/update/:id' component={UserUpdate} />
            <Route exact path='/updateRestaurant/:id' component={RestaurantUpdate} />
            <Route exact path='/updateProduct/:id' component={ProductUpdate} />
            <Route exact path='/updateManager/:id' component={ManagerUpdate} />
            <Route exact path='/updateDelivery/:id' component={DeliveryUpdate} />
            <Route exact path="/domiciliarios">
                <Domiciliarios />
            </Route>
        </Switch>
    );
};

export default Routes;
