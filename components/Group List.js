
/*
Comparing groups like list
Number of max members is 20
Find smallest member list
Find Largest member list
Compare smallest member list against Larger member list
Move to next largest list and take the common list and compare
Return new common list

If largest member constains smallest member movie save in group like list
If not do not save
Iterate to next index



*/

//get group memebers
//assign member list to array
//solutions 2D array or hashmap

//external needs fetch group
//fetch members list
function createGroupList(groupMembers)
{
    


}

/*
* Takes two group members list and compares them to each other.
* @param listA takes member's A list
* @param listB takes member's B List
* @return      the common list
*/
export function compareLists(listA, listB) 
{
    commonList = []
    for ( iteratorAList = 0; iteratorAList < listA.length; iteratorAList++)
    {

        for ( iteratorBList = 0; iteratorBList < listB.length; iteratorBList++) 
        {

            if( listA[iteratorAList] === listB[iteratorBList] )
            {
                commonList[iteratorAList] = listA[iteratorAList];
            }

        }

    }

    return commonList;
}