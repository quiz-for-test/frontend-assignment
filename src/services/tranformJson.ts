type RecordType<T> = {
  [key: string]: T;
};
type DataType = {
  users: RecordType<any>[];
};
const tranFormJson = (data: DataType) => {
  const { users } = data;

  const groupData = users.reduce((acc, user) => {
    const departMent = user.company.department;
    if (!acc[departMent]) {
      acc[departMent] = {
        male: 0,
        female: 0,
        ageRange: "0-0",
        bloodGroup: {},
        hair: {},
        eyeColor: {},
        addressUser: {},
      };
    }
    if (acc[departMent]) {
      // male
      acc[departMent].male += user.gender === "male" ? 1 : 0;
      // female
      acc[departMent].female += user.gender === "female" ? 1 : 0;
      //age range
      let ageSplitMin = Number(acc[departMent].ageRange.split("-")[0]);
      let ageSplitMax = Number(acc[departMent].ageRange.split("-")[1]);
      ageSplitMin =
        user.age < ageSplitMin || ageSplitMin === 0 ? user.age : ageSplitMin;
      ageSplitMax =
        user.age > ageSplitMax || ageSplitMax === 0 ? user.age : ageSplitMax;
      acc[departMent].ageRange = [ageSplitMin, ageSplitMax].join("-");
      // bloodGroup
      if (!acc[departMent].bloodGroup[user.bloodGroup]) {
        acc[departMent].bloodGroup[user.bloodGroup] = 1;
      } else {
        acc[departMent].bloodGroup[user.bloodGroup] += 1;
      }
      // hair color
      if (!acc[departMent].hair[user.hair.color]) {
        acc[departMent].hair[user.hair.color] = 1;
      } else {
        acc[departMent].hair[user.hair.color] += 1;
      }
      // eyes color
      if (!acc[departMent].eyeColor[user.eyeColor]) {
        acc[departMent].eyeColor[user.eyeColor] = 1;
      } else {
        acc[departMent].eyeColor[user.eyeColor] += 1;
      }
      // addressUser
      acc[departMent].addressUser[`${user.firstName}${user.lastName}`] =
        user.company.address.postalCode;
    }
    return acc;
  }, {});

  return groupData;
};

export default tranFormJson;
