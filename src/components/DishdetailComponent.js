import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return (
            <Card>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>
                    {dish.description}
                </CardText>
            </CardBody>
        </Card>
        );
    }

    renderComments(comments) {
        let commentitems = comments.map((commentval,index) => {
            return (
                <div className="container">
                    <li key={index}>

                    <p class="row">{commentval.comment}</p>
                    <div class="row pt-2">
                        <p>--{commentval.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commentval.date)))}</p>
                    </div>
                    </li>
                </div>
            )
        }
        );

        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-group list-unstyled">
                {commentitems}
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            </div>

        )
    }
}

export default DishDetail;