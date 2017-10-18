import { ClientFunction, Selector } from 'testcafe';

const basePage = 'http://localhost:3000/';

fixture `Getting Started`
    .page `${basePage}`;

test('Select 3', async t => {
    
    const select = Selector('select');
    const option = select.find('option');
    const submit = Selector('input[type="submit"]');

    await t
        .click(select)
        .click(option.withText('3'))
        .click(submit)
        ;
        
    const tds = await Selector('td');
    
    await t
          .expect(tds.count).eql(9)
        ;
        
    for (var i = 0; i < tds.count; i++) {
        await t.expect(tds.nth(i).getStyleProperty('background-color')).contains('#')
                .expect(tds.nth(i).getStyleProperty('background-color').length).eql(7)
                .expect(tds.nth(i).find('span').innerText).contains('#', 'f', 'F')
                .expect(tds.nth(i).find('span').innerText.length).gte(4)
                ;
        
    }      
    
});

test('select 10', async t => {
    
    const select = Selector('select');
    const option = select.find('option');
    const submit = Selector('input[type="submit"]');

    await t
        .click(select)
        .click(option.withText('10'))
        .click(submit)
        ;
        
    const tds = await Selector('td');
    
    await t
          .expect(tds.count).eql(100)
        ;
        
    for (var i = 0; i < tds.count; i++) {
        await t.expect(tds.nth(i).getStyleProperty('background-color')).contains('#')
                .expect(tds.nth(i).getStyleProperty('background-color').length).eql(7)
                .expect(tds.nth(i).find('span').innerText).contains('#', 'f', 'F')
                .expect(tds.nth(i).find('span').innerText.length).gte(4)
                ;
        
    }      
    
});

test.page `${basePage}404`('page 404', async t => {
    
    const divs = Selector('div');
  
    await t
        .expect(divs.count).gte(20)
        ;

        
    for (var i = 0; i < divs.count; i++) {
        await t.expect(divs.nth(i).getAttribute('class')).contains('still', 'rotate', 'shrink')
                .expect(divs.nth(i).innerText).contains('404')
                .expect(divs.nth(i).innerText.length).eql(3)
                ;
        
    }      
    
});
