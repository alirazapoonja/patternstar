function Pattern(rows) {
    let currentRow = 1;
    function generateLine(numStars) {
        let starsBefore = "";
        let starsAfter = "";
        for (let i = 0; i < numStars; i++) {
            starsBefore += "* ";
        }
        for (let i = 0; i < numStars; i++) {
            starsAfter += "* ";
        }
        return starsBefore + "Eid Mubarak " + starsAfter.trim();
    }
    do {
        const line = generateLine(currentRow);
        console.log(line);
        currentRow++;
    } while (currentRow <= rows);
}
// Example usage: generating a pattern with 5 rows
Pattern(5);
export {};
