const address=["1299 S Juniper Street","Philadelphia","191147"];
const [, city,state ="no where"]=address;
console.log("WE ARE IN "+state+" AT "+city);

const item = ["Coffee (hot)","$2.00", "$2.50","$2.75"];
const [Coffee, ,Costs="FREE"]=item;
console.log(`A medium ${Coffee} costs ${Costs}`);