import faker from "faker";
import puppeteer from "puppeteer";
// Для фикса бага ReferenceError: regeneratorRuntime is not defined
import "regenerator-runtime/runtime";

// Определяем переменные, необходимые для работы с Puppeteer:
let page;
let browser;
const [width, height] = [600, 1000];
// зададим URL формы
const URL = "https://kodaktor.ru/g/puppetform";

// С помощью Faker, создаём фиктивного юзера
const lead = {
  name: faker.name.firstName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  message: faker.random.words(),
};

// Настраиваем поведение Puppeteer с помощью методов Jest beforeAll и afterAll
beforeAll(async () => {
  browser = await puppeteer.launch({
    waitUntil: "domcontentloaded",
    headless: false,
    slowMo: 20,
    devtools: false,
    args: [`--window-size=${width},${height}`, `--window-position=40,40`],
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(async () => await browser.close());

describe("Contact form", () => {
  test("lead can submit a contact request", async () => {
    await page.goto(URL);
    // Ожидание появления формы обратной связи
    await page.waitForSelector("[data-test=contact-form]");
    // Щелчки по полям и заполнение их данными из объекта фейкового юзера
    await page.click("input[name=name]");
    await page.type("input[name=name]", lead.name);
    await page.click("input[name=email]");
    await page.type("input[name=email]", lead.email);
    await page.click("input[name=tel]");
    await page.type("input[name=tel]", lead.phone);
    await page.click("textarea[name=message]");
    await page.type("textarea[name=message]", lead.message);
    // Установка флага чекбокса
    await page.click("input[type=checkbox]");
    // Отправка формы
    await page.click("button[type=submit]");
    // Ожидание появления модального окна
    await page.waitForSelector(".modal");
    /* Второй параметр функции test(..., 16000) позволяет наблюдать за тем, как именно браузер работает со страницей.
    Если выполнять тестирование с использованием браузера, видимого на экране, и не задать при этом тайм-аут, возникнет ошибка */
  }, 15000);
});
