function storeCarInfo(manufacturer, model, kwargs) {
    var carInfo = {
        manufacturer: manufacturer,
        model: model
    };
    Object.assign(carInfo, kwargs);
    return carInfo;
}
var car = storeCarInfo("Toyota", "Corolla", { color: "Silver", sunroof: true });
console.log(car);
