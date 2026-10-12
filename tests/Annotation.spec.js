//Annotations:- only,skip,fixme,slow,retries,fail,flaky,timeout,tag
//Ex:- test.only, test.skip, test.fixme, test.slow, test.retries, test.fail, test.flaky, test.timeout, test.describe.configure({ tags: ['tag1', 'tag2'] })

import {test, expect} from '@playwright/test';

//skip:- skip is used to skip a test case. It will not be executed and will be reported as "skipped" in the test report.
test.skip("Annotation Test -1 ", async ({ page }) => {

    console.log("This is Annotation Test-1");

})

test.fail("Annotation Test -2 ", async ({ page }) => {

    console.log("This is Annotation Test-2");
    expect(10).toBe(20);  //This test will fail because of assertion failure

})

//fixme:- fixme is used to mark a test as broken or not working. It will be skipped and reported as "FIXME" in the test report.
test.fixme("Annotation Test -3 ", async ({ page }) => {

    console.log("This is Annotation Test-3");

})

test("Annotation Test -4 ", async ({ page }) => {

    test.slow(); //This test will be marked as slow in the test report
    console.log("This is Annotation Test-4");

})

test("Annotation Test -5 ", async ({ page }) => {

    console.log("This is Annotation Test-5");

})
