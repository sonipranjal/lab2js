var friendslist = ['pranjal', 'books', 'god', 'janu', 'parents'];

for (var i = 0; i < friendslist.length; i++) {
    console.log(friendslist[i] + ":");
    for (var j = 99; j > 0; j--) {
        if (j == 1) {
            console.log("1 line of code in the file, 1 line of code; " + friendslist[i] + " strikes one out, clears it all out, no more lines of code in the file");

        }
        else {
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friendslist[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");

        }
    }
}