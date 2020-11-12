import { AuthenticationService } from './services/authentication.service';
import { CollectionService } from './services/collection.service';
import { RelationService } from './services/relation.service';

export { CaseConverter } from './helper/case-converter.helper';
export { SerializatorHelper } from './helper/serializator.helper';
export { User } from './models/user.model';
export { Collection } from './models/collection.model';
export { CollectionStructure } from './models/collection-structure.model';
export { CollectionStructureFieldFactory } from './factory/collection-structure-field.factory';
export { CollectionStructureFactory } from './factory/collection-structure.factory';
export { CollectionFactory } from './factory/collection.factory';
export { CollectionStructureField } from './models/collection-structure-field.model';
// export { CollectionService } from './services/collection.service';
// export { AuthenticationService } from './services/authentication.service';


AuthenticationService.authenticate("email@example.com", "d1r3ctu5").then(user => {
    console.log(user);

    CollectionService.listCollectionStructures({
        Authorization: `bearer ${user.token}`
    }).then(collectionStructures => {
        console.log(collectionStructures);
        console.log("******************")
        RelationService.listRelations({
            Authorization: `bearer ${user.token}`
        });
    });
})