import { InstanceCreatorContract } from "./instance-creator-contract";

export class CollectionCreator {
    constructor (public instanceCreator: InstanceCreatorContract) {}
  
    /**
     * Create a collection of instances
     *
     * @param collectionLength 
     * @returns 
     */
    async create(collectionLength: number): Promise<any[]> {
        const result = [];

        for (let i = 0; i < collectionLength; i++) {
            result.push(await this.instanceCreator.create())
        }

        return result;
    }  
}