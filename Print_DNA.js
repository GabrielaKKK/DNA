function printDNA(length) {

    let sequence = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
    let curr = 0;
    for (let i = 1; i <= length; i++) {
        
        if (curr >= sequence.length) {
            curr = 0;
        }
        let leter1 = sequence[curr];
        curr++;
        if (curr >= sequence.length) {
            curr = 0;
        }
        let leter2 = sequence[curr];
        curr++;

        if (i % 4 === 1) {
            console.log(`**${leter1}${leter2}**`);
        } else if (i % 4 === 2) {
            console.log(`*${leter1}--${leter2}*`);
        } else if (i % 4 === 3) {
            console.log(`${leter1}----${leter2}`);
        } else if (i % 4 === 0) {
            console.log(`*${leter1}--${leter2}*`);            
        }
    }
}
printDNA(100);