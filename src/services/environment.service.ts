import * as environment from "../../.env.json";
import { EnvironmentDataType } from "../data-types/environment.data-type";

export abstract class EnvironmentService{
    static getEnvironment(): EnvironmentDataType{
        return (<EnvironmentDataType> environment);
    }
}