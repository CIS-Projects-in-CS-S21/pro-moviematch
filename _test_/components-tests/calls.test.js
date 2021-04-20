import {setMap} from "../../components/Group_List"

describe("Get Members:", () => {
    
    it("returns list of members", () => {
        const output = [
            64924,
            55457,
            95835,
            73851,
            17359,
            46892
        ]

        let membersList = new Map()

        expect(setMap(membersList)).toEqual(output)
    })
})