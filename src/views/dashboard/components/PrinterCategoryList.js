import React from "react";

import { getJSON } from "../../../common/utils/functions";
import PrinterCategoryForm from "./PrinterCategoryForm"
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default class PrinterCategoryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategory: {}
    };
    this.fetch = this.fetch.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  onClick(selectedCategory) {
    this.setState({
      selectedCategory: selectedCategory
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
          id="editModalCategory"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="editModalCategoryLabel"
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
                <h4 className="modal-title" id="editModalCategoryLabel">
                  Editing category {this.state.selectedCategory.name}
                </h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <PrinterCategoryForm categoryForm={this.state.selectedCategory} buttonText="Save" buttonIcon="fa fa-save" hideHeader />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="removeModalCategory"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="removeModalCategoryLabel"
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
                <h4 className="modal-title" id="removeModalCategoryLabel">
                  Removing category {this.state.selectedCategory.name}
                </h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <p>The category will be remove and the printers assigned in the category {this.state.selectedCategory.name} will be reasigned in the default category.</p>
                    <p>Are you sure that you want to remove this category?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  colSpan={2}
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
                          {element.name}
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
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip id="tooltip-top-tooltip">
                              Edit category...
                          </Tooltip>
                          }
                        >
                          <a href="#"
                            data-toggle="modal"
                            data-target="#editModalCategory"
                            onClick={() => this.onClick(element)}>
                            <i className="fa fa-pencil fa-2x text-muted" />
                          </a>
                        </OverlayTrigger>
                      </td>
                      <td className="text-center" style={{ width: 40 }}>
                        <OverlayTrigger
                          placement="left"
                          overlay={
                            <Tooltip id="tooltip-top-tooltip">
                              delete category...
                          </Tooltip>
                          }
                        >
                          <a href="#"
                            data-toggle="modal"
                            data-target="#removeModalCategory"
                            onClick={() => this.onClick(element)}>
                            <i className="fa fa-trash-o fa-2x text-muted" />
                          </a>
                        </OverlayTrigger>
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
