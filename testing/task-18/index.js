const { get } = require("axios");
const x = -4;
const header = { "Content-type": "application/json" };

(async () => {
  const firstResponse = await get(`http://kodaktor.ru/api2/there/${x}`, {
    header,
  })
    // воспользуемся деструктуризацией {data} для вывода только необходимого значение, иначе на выходе много служебной информации
    .then(({ data }) => data)
    .catch((err) => console.log(err.message));
  console.log(firstResponse);
  const secondResponse = await get(
    `http://kodaktor.ru/api2/andba/${firstResponse}`,
    {
      header,
    }
  )
    .then(({ data }) => data)
    .catch((err) => console.log(err.message));
  console.log(secondResponse);
})();
