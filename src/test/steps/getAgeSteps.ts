import { Given, When, Then } from "@cucumber/cucumber";
import { APIResponse } from "playwright";
import { expect, APIRequestContext, request } from "@playwright/test";

let apiRequestContext: APIRequestContext;
let getApiResponse: APIResponse;
let getApiResponseBody;

Given(
  "I send a GET request to the user endpoint with the name of a person as {string}",
  async function (name) {
    apiRequestContext = await request.newContext();
    getApiResponse = await apiRequestContext.get("https://api.agify.io/", {
      params: {
        name: name,
      },
    });
  }
);

When("the response status is ok and {string}", async function (statusValue) {
  expect(getApiResponse.status()).toBe(parseInt(statusValue));
  expect(getApiResponse.ok()).toBeTruthy();
});

Then(
  "the response json body contains name as {string} and his age",
  async function (name) {
    getApiResponseBody = JSON.parse(await getApiResponse.text());
    expect(getApiResponseBody).toHaveProperty("name", name);
    expect(getApiResponseBody.age).toHaveProperty("age"); // verify
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
