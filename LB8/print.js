function printNumberInDifferentLanguages(number) {
    const englishDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const arabicDigits = ['صفر', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'];
    const thaiDigits = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
  
    console.log(`English: ${number.toString().split('').map(digit => englishDigits[digit]).join(' ')}`);
    console.log(`Arabic: ${number.toString().split('').map(digit => arabicDigits[digit]).join(' ')}`);
    console.log(`Thai: ${number.toString().split('').map(digit => thaiDigits[digit]).join(' ')}`);
  }
  
  printNumberInDifferentLanguages(123);
  