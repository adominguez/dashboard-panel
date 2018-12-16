import Loadable from "react-loadable";
import { Loading } from "../../common/navigation";

const Printers = Loadable({
  loader: () => import("./components/Printers"),
  loading: Loading
});

const CreatePrinter = Loadable({
  loader: () => import("./components/CreatePrinter"),
  loading: Loading
});

const CreatePrinterCategory = Loadable({
  loader: () => import("./components/CreatePrinterCategory"),
  loading: Loading
});

export const routes = [
  {
    path: ["/", "/printers"],
    exact: true,
    name: "3D Printers",
    component: Printers
  },
  {
    path: "/printers/create-printer-category",
    exact: true,
    name: "Create Printer Category",
    component: CreatePrinterCategory
  },
  {
    path: "/printers/create-printer",
    exact: true,
    name: "Create Printer",
    component: CreatePrinter
  }
];
