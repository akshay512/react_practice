import React,{Component} from 'react';
import {Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom'
import DishDetail from './DishdetailComponent'


    // renderDish(dish) {
    //     if(dish!=null) {
    //         return(
    //             <DishDetail dish={dish} />
    //         );
    //     } else {
    //         return(
    //             <div>
                    
    //             </div>
    //         );
    //     }
    // }

    function RenderMenuItem({dish,onClick}) {
        return (
            // <Card onClick={() => onClick(dish.id)}>
            <Card>
                <Link to={`/menu/${dish.id}`} >
                            <CardImg width="100%" object src={dish.image} alt={dish.name} />
                            
                        <CardImgOverlay>
                            <CardTitle>
                                {dish.name}
                            </CardTitle>
                        </CardImgOverlay>
                        </Link>

                    </Card>
        );
    }

    const Menu = (props) => {

        const menu = props.dishes.map((dish)=> {
            return (
                <div className="col-12 col-md-5 m-1" key={dish.id}>
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            );
        })

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                        {menu}
                </div>
                {/* <div className="row">
                        {this.renderDish(this.state.selectedDish)}
                </div> */}
                
            </div>
        )
    }




export default Menu;