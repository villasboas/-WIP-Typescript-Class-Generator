import { InstanceCreator } from './instance-creator';

class InstanceSpy {
    instanceSpyProperty = 0;
}

const classCreatorSpy = jest.fn(async () => {
    return {
        instanceSpyProperty: 1,
    }
})

const makeSut = async () => {
    const sut = new InstanceCreator(InstanceSpy, classCreatorSpy)
    return {
        sut
    }
}

describe('InstanceCreator test suite', () => {
    it('should get data from instance creator', async () => {
        const { sut } = await makeSut()
        await sut.create()
        expect(classCreatorSpy.mock.calls.length).toBe(1)
    })

    it('should add data to instance', async () => {
        const { sut } = await makeSut()
        const result = await sut.create()
        expect(result.instanceSpyProperty).toBe((await classCreatorSpy.mock.results[0].value).instanceSpyProperty);
    })

    it('should create an InstanceSpy object', async () => {
        const { sut } = await makeSut()
        const result = sut.create()
        expect(result).resolves.toBeInstanceOf(InstanceSpy)
    })
})