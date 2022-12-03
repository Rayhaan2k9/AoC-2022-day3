function organiser(inputData) {
  const data = inputData.split("\n");
  const formattedData = data.map((str) => [
    str.substring(0, str.length / 2).split(""),
    str.slice(str.length / 2).split(""),
  ]);

  //create object with letters as key and numbers as value
  const priorities = {};
  let charCode = 97;
  for (let i = 1; i < 54; i++) {
    priorities[String.fromCharCode(charCode)] = i;
    if (i === 27) {
      charCode = 65;
      priorities[String.fromCharCode(charCode)] = i;
    }
    charCode++;
  }

  function findCommonElement(array1, array2) {
    //removes non letters
    const lettersArray1 = array1.filter((char) => /[a-z]/gi.test(char));
    const lettersArray2 = array2.filter((char) => /[a-z]/gi.test(char));
    //loop for array1
    for (let i = 0; i < lettersArray1.length; i++) {
      // Loop for array2
      for (let j = 0; j < lettersArray2.length; j++) {
        // Compare the element of each and
        // every element from both of the
        // arrays
        if (lettersArray1[i] === lettersArray2[j]) {
          // Return if common element found
          return lettersArray1[i];
        }
      }
    }
  }

  //   const splitArrays = formattedData.map((arr) => arr.join().split(""));

  const result = formattedData.map((arr) => findCommonElement(arr[0], arr[1]));

  return result.reduce((acc, curr) => acc + priorities[curr], 0);
}

function groupOrganiser(inputData) {
  const groups = [];
  const data = inputData.split("\n");
  const clonedData = [...data];

  for (let i = 0; i < data.length; i += 3) {
    groups.push(clonedData.splice(0, 3).map((str) => str.split("")));
  }

  //create object with letters as key and numbers as value
  const priorities = {};
  let charCode = 97;
  for (let i = 1; i < 54; i++) {
    priorities[String.fromCharCode(charCode)] = i;
    if (i === 27) {
      charCode = 65;
      priorities[String.fromCharCode(charCode)] = i;
    }
    charCode++;
  }

  function findCommonElement(array1, array2, array3) {
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        for (let k = 0; k < array3.length; k++) {
          if (array1[i] === array2[j] && array2[j] === array3[k]) {
            return array1[i];
          }
        }
      }
    }
  }

  const result = groups.map((arr) => findCommonElement(arr[0], arr[1], arr[2]));

  return result.reduce((acc, curr) => acc + priorities[curr], 0);
}

module.exports = { organiser, groupOrganiser };
