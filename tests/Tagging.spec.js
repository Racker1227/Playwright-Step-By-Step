
//grep command is used for filtring and tagging
// command(for tagging) : - npx playwright test Tagging.spec.js --grep "@smoke"  
// we want only smoke tests:- npx playwright test Tagging.spec.js --grep "@smoke" --grep-invert "@regression"
import {test, expect} from '@playwright/test';

test('Test-1 @smoke', async ({ page }) => {

    console.log("This is Test-1");

})   

test('Test-2 @smoke', async ({ page }) => {

    console.log("This is Test-2");

}) 

test('Test-3 @regression', async ({ page }) => {

    console.log("This is Test-3");

}) 

test('Test-4 @regression', async ({ page }) => {

    console.log("This is Test-4");

}) 

test('Test-5 @sanity', async ({ page }) => {

    console.log("This is Test-5");

}) 

test('Test-6 @smoke@regression', async ({ page }) => {

    console.log("This is Test-6");

}) 