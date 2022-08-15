import  { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
     await page.goto('http://localhost:3001/');
     console.log('Before tests');
})

test.describe("css selector for playwright test",()=>{
    // check for heading 1
    test("check for head 1",async({page})=>{
        const name = await page.innerText('.heading1');
       expect(name).toBe('head1');
    })
    // text selector
    test("check for text",async({page})=>{
        const name = await page.innerText('button');
       expect(name).toBe('clicked');
    })
    // check for div class c
    test("check for div class c",async({page})=>{
        const name = await page.innerText('.c >> h1');
        expect(name).toBe('hello');
    })

})

test.afterAll(async ({page}) => {
    console.log('After tests',page);
});
  