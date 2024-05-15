function describeCity(city: string, country: string = "Pakistan"): void {
  console.log(`${city} is in ${country}.`);
}

describeCity("Karachi"); // Karachi is in Pakistan.
describeCity("Lahore"); // Lahore is in Pakistan.
describeCity("New York", "USA"); // New York is in USA.
