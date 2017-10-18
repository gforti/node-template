import { ClientFunction, Selector } from 'testcafe';

const allElements = Selector(id => document.querySelectorAll(id));

fixture `Getting Started`
    .page `http://localhost:3000/`;

test('Has Ordered List', async t => {
    const olElem = Selector('ol');

    await t
        .expect(olElem.count).eql(1)
        .expect(olElem.exists).ok();
    
});


test('Has Ordered List Items', async t => {
    const liCount = Selector('li').count;
    const li = Selector('li');

    await t
        .expect(liCount).eql(3);

    for (var i = 0; i < liCount; i++)
        await expect(li.nth(i).innerText.length).ok();
            
});

test('Has two links', async t => {
    const aCount = Selector('a').count;
    const a = Selector('a');

    await t
        .expect(aCount).eql(2);

    for (var i = 0; i < aCount; i++) {
        await expect(a.nth(i).href.length).ok();
        await expect(a.nth(i).href.toLowerCase()).contains('todo', 'read-todo');
    }       
            
});

 

test.page `http://localhost:3000/read-todo`('Read Todo page', async t => {
    const tr = await Selector('tr');
  
    await t
            .expect(tr.count).gte(10);
            
});


test.page `http://localhost:3000/fake-page`('fake page displays index', async t => {
    const olElem = Selector('ol');

    await t
        .expect(olElem.count).eql(1)
        .expect(olElem.exists).ok();
            
});
