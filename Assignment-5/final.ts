type student = {
  name?: string;
  age?: number;
  email?: string;
  city?: string;
  state?: string;
};

type Details = {
  [key: string]: string;
};

namespace Util {
  export function concatKeysAndValues(obj: {
    [key: string]: string | Details;
  }): string {
    let result: string = "";
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        result += `${key}: ${obj[key]}, `;
      } else {
        result += concatKeysAndValues(obj[key] as Details);
      }
    }
    return result;
  }
}

const Data: { [key: string]: string | Details } = {
  name: "Anjali",
  email: "anjali@123",
  city: "Telangana",
  state: "Telangana",
  address: {
    street: "123 Main St",
    zip: "12345",
    country: "india",
  },
};

console.log(Util.concatKeysAndValues(Data));
