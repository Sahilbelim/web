import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
          img: props.img,
          title: props.title,
          content: props.content,
        };
     }

    render() {
      console.log(this.props.img)
      console.log(this.img)
      console.log(this.title)
    return (
      <>
        <div className="col-12 col-md-4">
          <div className="card rounded-3" style={{minHeight:"500px "}}>
            <div className="card-img-top">
              <img
                src={this.props.img}
                alt=""
                className="img-fluid flex-fill rounded-top"
                width="450px"
                height="300px"
              />
            </div>
            <div className="card-body px-4">
              <div className="h4">
                <b>{this.props.title}</b>
              </div>
              <p className="fs-5 text-secondary pt-3 px-3" align="justify">
                {this.props.content}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
