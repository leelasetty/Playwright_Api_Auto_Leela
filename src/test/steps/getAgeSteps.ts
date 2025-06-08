import { Given, When, Then } from "@cucumber/cucumber";
import { APIResponse } from "playwright";
import { expect, APIRequestContext, request } from "@playwright/test";

let apiRequestContext: APIRequestContext;
let getApiResponse: APIResponse;

Given(
  "I send a GET request to the endpoint with the name of a person as {string}",
  async function (name) {
    apiRequestContext = await request.newContext();
    getApiResponse = await apiRequestContext.get("https://api.agify.io/", {
      params: {
        name: name,
      },
    });
  }
);

Given(
  "I send a GET request to the endpoint with the name of a person as {string} to a wrong parameter",
  async function (name) {
    getApiResponse = await apiRequestContext.get("https://api.agify.io/", {
      params: {
        username: name,
      },
    });
  }
);

When("the response status is ok and {string}", async function (statusValue) {
    expect(getApiResponse.status()).toBe(parseInt(statusValue));
    expect(getApiResponse.ok()).toBeTruthy();
});

Then(
  "the response json body contains name of {string} and his age",
  async function (name) {
      const getApiResponseBody = JSON.parse(await getApiResponse.text());
      expect(getApiResponseBody).toHaveProperty("name", name);
      expect(getApiResponseBody).toHaveProperty("age");
  }
);

Then("the age returned is valid numerical value", async function () {
    const responseForValidAge = JSON.parse(await getApiResponse.text());
    expect(responseForValidAge.age).toBeGreaterThan(0);
});

Then("the age returned is null", async function () {
    const responseForInvalidAge = JSON.parse(await getApiResponse.text());
    expect(responseForInvalidAge.age).toBeNull();
});

Then(
  "the response status is not ok with {string}",
  async function (statusValue) {
      expect(getApiResponse.status()).toBe(parseInt(statusValue));
  }
);
