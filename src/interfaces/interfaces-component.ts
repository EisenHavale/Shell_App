import { ReactNode } from "react";

export interface IHeaderProps {
    children: ReactNode;
    context: IContext[];
}

export interface IContext {
    name:string;
    path:string;
}

export interface ITab {
    label:string;
    path:string;
}