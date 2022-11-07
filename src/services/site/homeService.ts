import { IHome } from "../../models/IHome";

export const fncInfo = () : IHome => {
    const item:IHome = {
        title: "Home Controller Title",
        desc: "Home Controller Title Desc"
    }
    return item
}