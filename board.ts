const white: string = "  ";
const black: string = "██";

for (let i:number = 0; i <= 6; i++) {
    let line:string = "";
    for (let j:number = 0; j <=8; j++) {
        if (i % 2) {
            if (j % 2) {
                line += black;
            } else {
                line += white;
            }
        } else {
            if (j % 2) {
                line += white;
            } else {
                line += black;
            }
        }
    }
    console.log(line);
}

