const input = `eightfivesssxxmgthreethreeone1sevenhnz
hzdlftdtfqfdbxgsix9onetwo13
29threelgxljfhrjr
pxvmbjprllmbfpzjxsvhc5
seven2jtgjltvzbcdnjtsfiveonebhkzld
twothreesixeight6eight6
nptjqqxoneninert1927
7beighttwob
6onesix
6fourfive97
jxcgpx5ninemsqqfmkpnj
jsdkqjbgx1gz5
9fourxxmdqmmlrbpqgznone8lvtxftmfpseven
qsdzrx6
khone9fivefive2
nine9eightseven
threefour3pzzxmrmvpn6sixmfckm
twoseventwohncgscdmbsdzh6zckqbvml
six5nine5jlhthreefive
7onesztpkqmjlfourhrrcf3threeone
83zgthreethreenine
ninevgvrhtsrrnbnxg2fourvlqkdqxxqcmfqbbmx3
mqphlgz8sghhvsevenpblfrmxvsixcqpsdjvs
fourlltktxt93brbmpml8
mqfkvscjj56
fivehhh8four17fbqxtksseven
5rbzgfournplgvtsixbqvmd
sevenflknr33qtwosixstmsblmrzczdqflxg
dblfhbt7sevenninesix2threethree
81fourtwo
three87tgz3
bkjnnzsjgmfive4vsvh
threeqkrsbzzjbmkjdmthree1ninethree7
5oneqdzzpj
5fourlfrp
ninefbfhptcqql1f5eightfncmrvkff
mlhxgnxxxrr3ninefnlcdlvseven
sixfiveone5
sevensixtwofivenine17vkshzpbkbhtssg
5seventvzqcjfzj4
6eightspklnbxqcdshsdhgq8eightninej
eight3fiveninefivemtxm9eightwot
lsxlqlnsevenpstsbbzpkhphrkjdd42fbxqdmc7six
fr2dllkdtqfh3hgvf
cqjeightwothree9hvrmtg
74cxeight
seven8fivescftvkmvxh66rkcfqfjf8
4twothree
six4onedhsevencngfntnsss8
8262sixthreepxvgpqf4two
8qtthree
three6gqfcml3zfxhfsvr
jltxcptthjsixmszdqt9xkbg89
zheightwotwo5threeqrgbr
1sevenpvgqtrtjfqtvklnt
1vspr99lvvn9mktnjv
lrj8lltb5three
ninevjmsfkqkns2
1fiveeightmh2
lck76
gjkmgqhnvgnine7
55jjzqxhtmmsevenseven2ffz`;

function sumCalibrationValues(input) {
    const lines = input.split('\n');
    let sum = 0;
  
    // Regular expression to find all digits in a line
    const digitPattern = (/\d/g);
    for (const line of lines) {
      const digits = line.match(digitPattern);
      
      if (digits && digits.length >= 2) {
        const firstDigit = digits[0];
        const lastDigit = digits[digits.length - 1];
        const calibrationValue = parseInt(firstDigit, 10) + parseInt(lastDigit, 10);
        sum += calibrationValue;
      }
    }
  
    return sum;
  }

  const sum = sumCalibrationValues(input);
  console.log(`The sum of all the calibration values in the source code document is: ${sum}`);
  