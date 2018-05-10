import StackTrace from 'stacktrace-js';

window.onerror = (msg, file, line, col, error) => {
  console.log(msg);
  console.log(file);
  console.log(line);
  console.log(col);
  console.log(error);
  console.log("================");
  StackTrace
  .fromError(error)
  .then((stackframes) => {
    console.log
    const query = {
      stack: JSON.stringify(stackframes),
      date: new Date(),
    };
    console.log('query');
    return console.log(query);
  })
  .catch((err) => {
    console.log(err);
  });

  // console.log('error');
  // console.log(error);
  return true;
};

const main = () => {
  hogw();
  console.log("hogehoge");
}

main();

