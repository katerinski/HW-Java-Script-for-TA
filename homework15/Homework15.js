require('chromedriver');
const assert = require('assert');
const { Builder, Key, By, until } = require('selenium-webdriver');

describe('Check web element functionality', function () {

    let driver;
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // 1.
    it('1.Check dropdown elements', async function () {
        await driver.get('http://the-internet.herokuapp.com/dropdown');
        let option = await driver.findElement(By.name('#dropdown > option:nth-child(1)'));
        let option1 = await driver.findElement(By.css('#dropdown > option:nth-child(2)'));
        assert.equal(await option.getAttribute('disabled'), 'true')
        assert.equal(await option1.getAttribute('disabled'), null)
    });

    //2.
    it('2.Check hovering', async function () {
        const action = driver.actions({ async: true });
        await driver.get('http://the-internet.herokuapp.com/hovers');
        const userAvatar = await driver.findElements(By.className("figure"));
        const userAvatarTitles = await driver.findElements(By.className("figcaption"));
        await action.move({ origin: userAvatar[0] }).perform();
        const titleDisplay = await userAvatarTitles[0].getCssValue("display");
        assert.equal(titleDisplay, "block");
    });

    // 3.  
    it('3.Check form populating', async function () {
        await driver.get('http://formy-project.herokuapp.com/form');

        const firstNameInput = await driver.findElement(By.id("first-name"));
        const lastNameInput = await driver.findElement(By.id("last-name"));
        const jobTitleInput = await driver.findElement(By.id("job-title"));
        const highSchoolEducation = await driver.findElement(By.id('radio-button-1'));
        const maleSex = await driver.findElement(By.id("checkbox-1"));
        const date = await driver.findElement(By.id("datepicker"));
        const experience = await driver.findElement(By.id("select-menu"));
        const experienceId = await driver.findElement(By.css("#select-menu > option:nth-child(3)"));
        const submitButton = await driver.findElement(By.className("btn btn-lg btn-primary"));

        await firstNameInput.sendKeys("Peter");
        await lastNameInput.sendKeys("Peterson");
        await jobTitleInput.sendKeys("tester");
        await highSchoolEducation.click();
        await maleSex.click();
        await experience.click();
        await experienceId.click();
        await date.sendKeys("12/12/2020");
        await submitButton.click();
        const successMessage = await driver.wait(until.elementLocated(By.className("alert alert-success")));
        const successText = await successMessage.getText();
        assert.equal(successText, "The form was successfully submitted!");
    });

    // 4.  
    it('4.Check table sorting', async function () {
        await driver.get('http://the-internet.herokuapp.com/tables');

        const dues = await driver.findElement(
            By.xpath('//table[@id="table2"]//thead//span[@class="dues"]')
        );
        await dues.click();
        const firstRawDue = await driver.findElement(
            By.xpath('//table[@id="table2"]//tbody//tr[1]//td[@class="dues"]')
        );
        const secondRawDue = await driver.findElement(
            By.xpath('//table[@id="table2"]//tbody//tr[2]//td[@class="dues"]')
        );
        const thirdRawDue = await driver.findElement(
            By.xpath('//table[@id="table2"]//tbody//tr[3]//td[@class="dues"]')
        );
        const fourthRawDue = await driver.findElement(
            By.xpath('//table[@id="table2"]//tbody//tr[4]//td[@class="dues"]')
        );

        assert.equal(await firstRawDue.getText(), "$50.00");
        assert.equal(await secondRawDue.getText(), "$50.00");
        assert.equal(await thirdRawDue.getText(), "$51.00");
        assert.equal(await fourthRawDue.getText(), "$100.00");
    });

    after(() => driver && driver.quit());

})
