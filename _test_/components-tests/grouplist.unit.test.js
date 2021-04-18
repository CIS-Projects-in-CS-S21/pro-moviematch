import {compareLists} from '../../components/Group_List'


describe("Test Array Comparison", () => 
{
    it("Returns common list", () => 
    {
        var A = [5, 4];
        var B = [1, 3, 4, 9, 32, 43, 5];

        var output = [5, 4];

        expect(compareLists(A,B)).toEqual(output)
    })
    
})