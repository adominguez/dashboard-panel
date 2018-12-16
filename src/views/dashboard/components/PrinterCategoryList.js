import React from "react";

import { getJSON } from "../../../common/utils/functions";
import PrinterCategoryForm from "./PrinterCategoryForm"

export default class PrinterCategoryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategory: {}
    };
    this.fetch = this.fetch.bind(this);
    this.onClick = this.onClick.bind(this)
  }

  componentDidMount() {
    this.fetch();
  }

  onClick(selectedCategory) {
    this.setState({
      selectedCategory : selectedCategory
    })
  }

  fetch = () => {
    return getJSON("assets/api/printers/printers-categories.json").then(categories => {
      this.setState({
        categories
      });
    });
  };

  render() {
    return (
      <div>

        <div
          className="modal fade"
          id="myModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <PrinterCategoryForm categoryForm={this.state.selectedCategory} buttonText="Save" buttonIcon="fa fa-save" />
                  </div>
                </div>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>



        <div className="well">
          <table className="table table-striped table-forum">
            <thead>
              <tr>
                <th colSpan={1}>Category name</th>
                <th
                  className="text-center hidden-xs hidden-sm"
                  style={{ width: 100 }}
                >
                  State
              </th>
                <th
                  className="text-center hidden-xs hidden-sm"
                  style={{ width: 200 }}
                >
                  Products in category
              </th>
                <th
                  className="hidden-xs hidden-sm"
                  style={{ width: 100 }}
                >
                  Actions
              </th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.categories.map((element, idx) => {
                  return (
                    <tr key={`printer-categories-${idx}`}>
                      <td>
                        <h4>
                          <a href="#"
                            data-toggle="modal"
                            data-target="#myModal"
                            onClick={() => this.onClick(element)}>
                            {element.name}
                          </a>
                          <small>{element.description}</small>
                        </h4>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <h4><small>{element.state}</small></h4>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>1342</a>
                      </td>
                      <td className="text-center" style={{ width: 40 }}>
                        <i className="fa fa-pencil fa-2x text-muted" />
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
