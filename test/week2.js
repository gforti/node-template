

import { ClientFunction, Selector } from 'testcafe';

const basePage = 'http://localhost:3000/';

fixture `Getting Started`
    .page `${basePage}`;

test('Index Page complete', async t => {
    const titleElem = await Selector('h1');
    const pElem = await Selector('p');
    const aElem = await Selector('a');

    await t
        .expect(titleElem.count).gte(1)
        .expect(titleElem.nth(0).innerText).ok()
        .expect(pElem.count).eql(1)
        .expect(pElem.nth(0).innerText).ok()
        .expect(pElem.nth(0).innerText).contains('ipsum')
        .expect(aElem.count).gte(3)
        ;
    
});


test.page `${basePage}about`('About Page', async t => {
    const imgElem = Selector('img');
    const pElem = await Selector('p');
    const aElem = await Selector('a');

    await t
        .expect(imgElem.count).eql(1)
        .expect(imgElem.exists).ok()
        .expect(pElem.count).eql(2)
        .expect(pElem.nth(0).innerText).contains('ipsum')
        .expect(aElem.count).gte(3)
        ;
            
});


test.page `${basePage}form`('Form Page', async t => {
    
    const nameElem = Selector('input[name="name"]');
    const emailElem = Selector('input[name="email"]');
    const commentsElem = Selector('textarea[name="comments"]');
    
    
    await t
        .typeText(nameElem, 'Peter Parker')
        .typeText(emailElem, 'Peter@Parker.com')
        .typeText(commentsElem, 'My powers are spider base.')
        .click( 'input[type="submit"]')
        ;
        
    const labelsElem = await Selector('strong'); 
    
     for (var i = 0; i < labelsElem; i++) {
        await expect(labelsElem.nth(i).innerText.toLowerCase()).contains('name', 'email', 'comments');
    }  
      
});
