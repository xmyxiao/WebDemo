const fs = require('fs');
const xlsx = require('node-xlsx')
// excel数据
const excelData = xlsx.parse('./excel/276.xlsx');
// 最终数据
let finalArr = [];

function handelExcel() {
  // excel的第一个sheet
  const excelSheet = excelData[0].data;
  // 表头
  const columns = excelSheet[0];
  // 表头对应的key
  const columnsObj = {
    number: '序号',
    name: '企业名称',
    addres: '企业地址',
    city: '城市',
    lng: '经度',
    lat: '纬度'
  }
  let JSONKey = []
  // 设置JSON key值
  columns.forEach(item => {
    for (key in columnsObj) {
      const itemKey = columnsObj[key];
      itemKey === item ? JSONKey.push(key) : ''
    }
  })
  // 表内容
  const jsonData = excelSheet.slice(1);
  jsonData.forEach(lineItem => {
    let arrItem = {}
    lineItem.forEach((item, index) => Object.assign(arrItem, { [JSONKey[index]]: item }))
    finalArr.push(arrItem);
  })
};

handelExcel();
generatJSON('./json/data.json', JSON.stringify(finalArr, null , '\t'))


/**
 * 生成JSON文件
 * @param {*} fileName 
 * @param {*} data 
 */
function generatJSON(fileName, data) {
  fs.writeFile(fileName, data, 'utf-8', function (err) {
    if (err) {
      console.log('errr');
    } else {
      console.log('success');
    }
  })
}