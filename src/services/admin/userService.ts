import { UserModel } from "../../models/UserModel";
import {db} from '../../utils/db'

export const userSave = async ( name: string, email: string, password: string ) => {
    /*
    db.then( item => {
        UserModel.create({ name, email, password }).then( item => {
            console.log("Save Success", item);
            console.log("ID", item.id);
        })
    })
    */
    await db
    return await UserModel.create({ name, email, password })
}
