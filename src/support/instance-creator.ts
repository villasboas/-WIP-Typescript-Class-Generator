export class InstanceCreator {
    constructor(public classReference, public classCreator) {}

    /**
     * Create a new instance of classReference
     *
     * @returns 
     */
    async create(): Promise<any> {
        const classData = await this.classCreator()
        const classInstance = new this.classReference;

        Object.assign(classInstance, classData)
        
        return classInstance;
    }
}
