import * as H from "history";
export type employee = {
    id: string;
    name: string;
};

export type FormProps = {
    addEmployee: (newEmployee: employee) => void;
};
export interface IEmployee {
    _id:string,
    name:string,
    dateOfBirth:Date,
    gender:string
    salary:number
}


export interface RouteComponentProps<P> {
    match: match<P>;
    location: H.Location;
    history: H.History;
    staticContext?: any;
}

export interface match<P> {
    params: P;
    isExact: boolean;
    path: string;
    url: string;
}