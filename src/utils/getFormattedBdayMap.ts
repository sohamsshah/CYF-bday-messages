export const getFormattedBdayMap = (birthdayMap: {[key: string]: [{name: string, mobileNumber: string, zoneName: string}]}) => {
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