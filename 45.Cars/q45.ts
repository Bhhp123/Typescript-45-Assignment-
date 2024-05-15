function storeCarInfo(manufacturer: string, model: string, kwargs: {[key: string]: string | boolean}) {
  const carInfo: {[key: string]: string | boolean} = {
      manufacturer,
      model
  };
  Object.assign(carInfo, kwargs);
  return carInfo;
}

const car = storeCarInfo("Toyota", "Corolla", { color: "Silver", sunroof: true });
console.log(car);