import {test,expect}from '@playwright'
test('home',async({page})=>{
await waitForTimeOut(6000);
await page.goto("https://www.git.com");

})
