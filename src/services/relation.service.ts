import { Service } from "./service";

export abstract class RelationService {
    static listRelations(
        extraHeaders?: Object
    ): Promise<any> {
        return Service.doRequest('GET', 'relations', undefined, extraHeaders).then(relationsData => {
            console.log(relationsData.data)
        });
    }
}