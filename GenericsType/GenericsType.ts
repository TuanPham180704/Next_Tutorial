function identify<T>(value : T): T {
    return value
}

const str = identify<string>("tuan")
const age = identify<number>(21)
const addresses = identify<{ location: string}[]>([
  { location: "VietNam" },
  { location: "USA" }
]);