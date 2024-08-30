interface IAppProps {
  step: number;
}

interface IRouterType {
  title: string;
  path: string;
  element: JSX.Element;
  children?: IRouterType[];
}

export type { IAppProps, IRouterType };
