import isValidUrl from "../js/isValidUrl";

describe("Testing the isValidUrl functionality", () => {
  test("Testing the isValidUrl function", () => {
    expect(isValidUrl).toBeDefined();
  });

  test("Return field is empty if so", () => {
    expect(isValidUrl("")).toBe("Field is empty");
  });

  test("Return invalid URL if so", () => {
    expect(isValidUrl("www:Invalid_URL.0101010")).toBe("Invalid URL");
  });

  test("Return true if the URL is valid", () => {
    expect(isValidUrl("https://www.bayoumi.com")).toBeTruthy();
    expect(isValidUrl("www.bayoumi.com")).toBeTruthy();
    expect(isValidUrl("bayoumi.net/dev")).toBeTruthy();
  });
});
