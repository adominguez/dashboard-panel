import React from "react";

import BootstrapValidator from "../../../common/forms/validation/BootstrapValidator";

const validatorOptions = {
  feedbackIcons: {
    valid: "glyphicon glyphicon-ok",
    invalid: "glyphicon glyphicon-remove",
    validating: "glyphicon glyphicon-refresh"
  },
  fields: {
    name: {
      group: ".col-md-8",
      validators: {
        notEmpty: {
          message: "The category name is required"
        },
        stringLength: {
          max: 200,
          min: 4,
          message: "The category name must be more than 4 characters and less than 200 long"
        }
      }
    },
    description: {
      // The group will be set as default (.form-group)
      validators: {
        notEmpty: {
          message: "The category description is required"
        },
        stringLength: {
          max: 500,
          min: 4,
          message: "The category description must be more than 4 characters and less than 500 characters long"
        }
      }
    },
  }
};

export default class PrinterCategoryForm extends React.Component {

  static defaultProps = {
    categoryForm: {},
    states: [
      {value: 'enabled', label: 'Enabled'},
      {value: 'disabled', label: 'Disabled'}
    ],
    buttonText: "send",
    buttonIcon: "glyphicon glyphicon-send",
    buttonColor: "blue",
    buttonColorText: "white"
  };

  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        name: this.props.categoryForm.name || "",
        description: this.props.categoryForm.description || "",
        state: this.props.categoryForm.state || "enabled",
      },
      invalid: null
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    const { formValues } = this.state
    e.preventDefault();
    if(formValues.name && formValues.description && formValues.state) {
      this.setState({
        invalid: false
      })
      alert('Envía datos');
    } else {
      this.setState({
        invalid: true
      })
    }
  }

  handleValidate(e, value) {
    const formValues = this.state.formValues;
    switch (e.currentTarget.name) {
      case 'name':
        this.setState({
          formValues: {
            ...formValues,
            name: e.currentTarget.value
          }
        })
        break;
        case 'description':
        this.setState({
          formValues: {
            ...formValues,
            description: e.currentTarget.value
          }
        })
        break;
        case 'state':
        this.setState({
          formValues: {
            ...formValues,
            state: e.currentTarget.value
          }
        })
        break;    
      default:
        break;
    }
  }

  render() {
    console.log('this.props.categoryForm', this.props.categoryForm);
    return (
      <BootstrapValidator options={validatorOptions}>
        <form id="printerCategoryForm" onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Printer Category</legend>
            <div className="form-group">
              <div className="row">
                <div className="col-md-8">
                  <label className="control-label">Name</label>
                  <input type="text" className="form-control" name="name" defaultValue={this.props.categoryForm.name || ""} onChange={(event) => this.handleValidate(event)} />
                </div>

                <div className="col-md-4 selectContainer">
                  <label className="control-label">State</label>
                  <select 
                    className="form-control"
                    name="state"
                    defaultValue={this.props.categoryForm.state || ""}
                    onChange={(event) => this.handleValidate(event)}>
                    {
                        this.props.states.map((element, idx) => {
                          return (
                            <option value={element.value} key={'optionStateCategoryForm' + idx}>{element.label}</option>
                          )
                        })
                    }
                  </select>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <div className="form-group">
              <label className="control-label">Description</label>
              <textarea 
                className="form-control"
                name="description"
                rows="8"
                defaultValue={this.props.categoryForm.description || ""}
                onChange={(event) => this.handleValidate(event)} />
            </div>
          </fieldset>

          <div className="form-actions">
            <div className="row">
              <div 
                className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                <div className="pull-left alert alert-danger fade in" hidden={!this.state.invalid}><i className="fa-fw fa fa-times"></i><strong>Error!</strong> You have errors in the form, please, check the fields.</div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                <button className={`btn btn-default bg-color-${this.props.buttonColor} txt-color-${this.props.buttonColorText}`} >
                  <i className={this.props.buttonIcon} /> {this.props.buttonText}
                </button>
              </div>
            </div>
          </div>
        </form>
      </BootstrapValidator>
    );
  }
}
