import tranFormJson from "./tranformJson";

describe("tranFormJson function", () => {
  it("should return empty object with empty data", () => {
    const data = { users: [] };
    const result = tranFormJson(data);
    expect(result).toEqual({});
  });

  it("should group users by department with single user", () => {
    const data = {
      users: [
        {
          firstName: "test",
          lastName: "demo",
          company: { department: "Sales", address: { postalCode: 1234 } },
          gender: "male",
          age: 30,
          bloodGroup: "A+",
          hair: { color: "black" },
          eyeColor: "brown",
        },
      ],
    };
    const result = tranFormJson(data);
    expect(result).toEqual({
      Sales: {
        male: 1,
        female: 0,
        ageRange: "30-30",
        bloodGroup: { "A+": 1 },
        hair: { black: 1 },
        eyeColor: { brown: 1 },
        addressUser: { testdemo: 1234 },
      },
    });
  });

  it("should group users by department with multiple users in the same department", () => {
    const data = {
      users: [
        {
          firstName: "test",
          lastName: "demo",
          company: { department: "Sales", address: { postalCode: 1234 } },
          gender: "male",
          age: 30,
          bloodGroup: "A+",
          hair: { color: "black" },
          eyeColor: "brown",
          address: { state: "NY", country: "USA" },
        },
        {
          firstName: "test2",
          lastName: "demo2",
          company: { department: "Sales", address: { postalCode: 4321 } },
          gender: "female",
          age: 25,
          bloodGroup: "O-",
          hair: { color: "blonde" },
          eyeColor: "blue",
          address: { state: "CA", country: "USA" },
        },
      ],
    };
    const result = tranFormJson(data);
    expect(result).toEqual({
      Sales: {
        male: 1,
        female: 1,
        ageRange: "25-30",
        bloodGroup: { "A+": 1, "O-": 1 },
        hair: { black: 1, blonde: 1 },
        eyeColor: { brown: 1, blue: 1 },
        addressUser: { testdemo: 1234, test2demo2: 4321 },
      },
    });
  });

  it("should group users by department with multiple users in different departments", () => {
    const data = {
      users: [
        {
          firstName: "test3",
          lastName: "demo3",
          company: { department: "Sales", address: { postalCode: 4321 } },
          gender: "male",
          age: 30,
          bloodGroup: "A+",
          hair: { color: "black" },
          eyeColor: "brown",
          address: { state: "NY", country: "USA" },
        },
        {
          firstName: "test2",
          lastName: "demo2",
          company: { department: "Marketing", address: { postalCode: 9999 } },
          gender: "female",
          age: 25,
          bloodGroup: "O-",
          hair: { color: "blonde" },
          eyeColor: "blue",
          address: { state: "CA", country: "USA" },
        },
      ],
    };
    const result = tranFormJson(data);
    expect(result).toEqual({
      Sales: {
        male: 1,
        female: 0,
        ageRange: "30-30",
        bloodGroup: { "A+": 1 },
        hair: { black: 1 },
        eyeColor: { brown: 1 },
        addressUser: { test3demo3: 4321 },
      },
      Marketing: {
        male: 0,
        female: 1,
        ageRange: "25-25",
        bloodGroup: { "O-": 1 },
        hair: { blonde: 1 },
        eyeColor: { blue: 1 },
        addressUser: { test2demo2: 9999 },
      },
    });
  });
});
