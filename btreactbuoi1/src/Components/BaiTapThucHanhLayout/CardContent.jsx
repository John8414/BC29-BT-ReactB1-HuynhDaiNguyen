import React, { Component } from 'react';

export default class CardContent extends Component {
    render() {
        return (
            <div className="card border-0 col-xxl-3 p-3">
                <img className="card-img-top" src="https://picsum.photos/id/237/200/300" alt />
                <div className="card-body ">
                    <h4 className="card-title"> Card Title</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ducimus unde a?</p>
                </div>
                <div className="card-footer bg-light mt-4">
                    <button className="btn btn-outline-primary">Find Out More!</button>
                </div>
            </div>
        );
    }
}
