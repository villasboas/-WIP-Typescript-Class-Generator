import { InstanceCreatorContract } from "./instance-creator-contract";
import { CollectionCreator } from "./collect-creator";

class InstanceCreatorSpy implements InstanceCreatorContract{
    createdInstances = 0;

    async create(): Promise<any> {
        this.createdInstances++;
    }
}

describe('Collection creator test suite', () => {
    it('should create n instances', async () => {
        const instanceCreatorSpy = new InstanceCreatorSpy();
        const sut = new CollectionCreator(instanceCreatorSpy)
        const size = Math.floor(Math.random() * 10)

        await sut.create(size);
        
        expect(instanceCreatorSpy.createdInstances).toBe(size)
    })

    it('should return an array with n elements', async () => {
        const instanceCreatorSpy = new InstanceCreatorSpy();
        const sut = new CollectionCreator(instanceCreatorSpy);
        const size = Math.floor(Math.random() * 10);

        const result = await sut.create(size);

        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBe(size)
    })
})
