export const getFormattedBdayMap = (birthdayMap) => {
    return Object.keys(birthdayMap).reduce((acc, curr) => {
        const zoneMap = birthdayMap[curr].reduce((map, userDetails) => {
            if(map[userDetails.zoneName]){
                return {...map, [userDetails.zoneName]: [...map[userDetails.zoneName], userDetails]}
            }else{
                return {...map,[userDetails.zoneName]: [userDetails] }
            } 
        },{})
        return {...acc, [curr]: zoneMap}
    },{})
}