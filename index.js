// code your solution here
function superbowlWin(record){
    const win = (record) => record.result === "W";
    const winning = record.find(win)
    if (winning){
        return winning.year
    }else{
        return undefined;
    }
}
