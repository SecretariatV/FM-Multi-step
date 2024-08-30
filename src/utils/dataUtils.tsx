import { lazy } from "react";
import { IRouterType } from "./typeUtils";

const LazyMainLayout = lazy(() => import("@features/layouts/mainLayout"));
const LazyPersonalArticle = lazy(
  () => import("@features/accessories/personal")
);
const LazyPlanArticle = lazy(() => import("@features/accessories/plan"));
const LazyPickArticle = lazy(() => import("@features/accessories/pick"));
const LazyFinishArticle = lazy(() => import("@features/accessories/finish"));
const LazyConfirmArticle = lazy(() => import("@features/accessories/confirm"));

const ROUTER_DATA: IRouterType[] = [
  {
    title: "Main",
    path: "/",
    element: <LazyMainLayout />,
    children: [
      { title: "Step1", path: "", element: <LazyPersonalArticle /> },
      { title: "Step2", path: "plan", element: <LazyPlanArticle /> },
      { title: "Step3", path: "pick", element: <LazyPickArticle /> },
      { title: "Step4", path: "finish", element: <LazyFinishArticle /> },
      { title: "Confirm", path: "confirm", element: <LazyConfirmArticle /> },
    ],
  },
];

export { ROUTER_DATA };
