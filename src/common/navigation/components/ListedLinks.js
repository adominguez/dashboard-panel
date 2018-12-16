import React from "react";

export default class ListedLinks extends React.Component {

  render() {
    const className = this.props.className;
    return (
      <div className="col-xs-12 col-sm-5 col-md-5 col-lg-8">
        <ul id="sparks" className={className}>
          {this.props.items.map((item, idx) => {
            return (
              <li className="sparks-info" key={"right-button-" + idx}>
                <a href={item.link}>
                  <h5 className="m-0">
                    <span className={`txt-color-${item.color}`}>
                      <i className={item.icon} /> {item.linkText}
                    </span>
                  </h5>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
