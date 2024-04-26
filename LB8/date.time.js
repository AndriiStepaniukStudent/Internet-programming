const date = new Date();

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

console.log('France:', date.toLocaleDateString('fr-FR', options));
console.log('China:', date.toLocaleDateString('zh-CN', options));
console.log('Egypt:', date.toLocaleDateString('ar-EG', options));
console.log('Thailand:', date.toLocaleDateString('th-TH-u-nu-thai', options));
