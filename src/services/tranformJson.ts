type RecordType<T> = {
  [x: string]: string | number | T;
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
        addressUser: {
          state: {},
          country: {},
        },
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
      if (!acc[departMent].addressUser.state[user.address.state]) {
        acc[departMent].addressUser.state[user.address.state] = 1;
      } else {
        acc[departMent].addressUser.state[user.address.state] += 1;
      }
      if (!acc[departMent].addressUser.country[user.address.country]) {
        acc[departMent].addressUser.country[user.address.country] = 1;
      } else {
        acc[departMent].addressUser.country[user.address.country] += 1;
      }
    }
    return acc;
  }, {});

  return groupData;
};

export default tranFormJson;
