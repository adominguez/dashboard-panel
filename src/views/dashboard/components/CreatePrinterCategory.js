import React from "react";

import {
  BigBreadcrumbs,
  WidgetGrid,
  JarvisWidget
} from "../../../common";

import PrinterCategoryForm from "./PrinterCategoryForm";
import PrinterCategoryList from "./PrinterCategoryList";

export default class CreatePrinterCategory extends React.Component {

  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={["3D Printers", "Create printer category"]}
            icon="fa fa-lg fa-fw fa-cube"
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
        </div>

        {/* widget grid */}
        <WidgetGrid>
          {/* row */}
          <div className="row">
            {/* NEW WIDGET ROW START */}
            <div className="col-sm-12">
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-1"
                colorbutton={false}
                editbutton={false}
                deletebutton={false}
                sortable={false}
                fullscreenbutton={false}
                color="blue"
              >
                <header>
                  <h2>Create new printer category </h2>
                </header>
                <div>
                  <div className="widget-body">
                    <PrinterCategoryForm />
                  </div>
                </div>
              </JarvisWidget>
            </div>
          </div>
        </WidgetGrid>
        <WidgetGrid>
          <div className="row">
            <div className="col-sm-12">
              <PrinterCategoryList />
            </div>
          </div>
        </WidgetGrid>
      </div>
    );
  }
}
