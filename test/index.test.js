require('chromedriver');
const webdriver = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
const { By, until } = webdriver;

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var ChromeOptions = new chrome.Options()
ChromeOptions.headless()
 .addArguments("start-maximized")
 .addArguments("disable-infobars")
 .addArguments("--disable-extensions")
 .addArguments("--disable-gpu")
 .addArguments("--disable-dev-shm-usage")
 .addArguments("--no-sandbox")
 

const driver = new webdriver.Builder().forBrowser('chrome')
//.setChromeOptions(new chrome.Options().headless())
.setChromeOptions(ChromeOptions)
.build()



const should = chai.should();
const chaiHttp = require("chai-http");

var expect = require('chai').expect



chai.use(chaiHttp);

const server = require("../main");

describe('src', function () {
    it('index.css', done => {
        chai.request(server)
            .get("/src/index.css")
            .set('content-type', 'text/css')
            .end((error, response) => {
                response.should.have.status(200);
                done()

            })
    });
    it('index.js', done => {
        chai.request(server)
            .get("/src/index.css")
            .set('content-type', 'text/javascript')
            .end((error, response) => {
                response.should.have.status(200);
                done()
            })
    });
    it('jquery.', done => {
        chai.request(server)
            .get("/src/index.css")
            .set('content-type', 'src/jquery-3.5.1.min.js')
            .end((error, response) => {
                response.should.have.status(200);
                console.log("jquery ok")
                done()
            })
    });
})




describe('ekle check sil', () => {
  
  let testText="denemewasasqqwsswewwweqw"
  it('ekle check sil',done   => {
    driver.get('http://localhost:8080').then(function(res) {
      driver
        .findElement(By.id('add-text'))
        .sendKeys(testText)
        .then(() => driver.findElement(By.id('add-button')).click())
        .then(() => {
          driver.wait(until.elementLocated(By.css('[id="list"]>div'))).then(async () => {
        
            var jobText= await driver.findElement(By.css('[id="list"]>div>[value="'+testText+'"]')).getAttribute("value")
            expect(jobText).to.equal(testText);
            var checkbox= await driver.findElement(By.css('[id="list"]>div>[type="checkbox"]')).getAttribute("checked")
            expect(checkbox).to.be.a('null');
            var button= await driver.findElement(By.css('[id="list"]>div>[type="button"]')).getAttribute("onclick")
            expect(button).to.include('del')

            await driver.findElement(By.css('[id="list"]>div>[value="'+testText+'"]+[type="checkbox"]')).click()
            var checkboxVal= await driver.findElement(By.css('[id="list"]>div>[value="'+testText+'"]+[type="checkbox"]')).getAttribute("checked")
            expect(checkboxVal).to.equal("true");
            
            await driver.findElement(By.css('[id="list"]>div>[value="'+testText+'"]+[type="checkbox"]+[type="button"]')).click()
            
            var list= await driver.findElement(By.css('[id="list"]')).getAttribute("innerHTML")
            expect(button).to.not.include(testText)
            
            await driver.quit();
            done();
          });
        });
    });
  });
});


