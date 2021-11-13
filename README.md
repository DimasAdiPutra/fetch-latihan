untuk mengatasi error pada Promise, kita bisa menggunakan then dan catch
const coba = cobaPromise();
coba
  .then(() => console.log(coba))
  .catch((err) => console.error(err));

pada async dan await kita bisa gunakan try dan catch
function cobaPromise() {
  return new Promise((resolve, reject) => {
    const time = 3000;
    if(time < 500) {
      setTimeOut(() => {
        resolve('selesai');
      }, time)
    } else {
      reject('kelamaan!')
    }
  })
}

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch(err) {
    concole.error(err);
  }
}

cobaAsync();

lalu bagaimana jika kita menggunakan fetch?
kita bisa gunakan throw new Error(error-nya);

Dan disini kita akan mencoba me-refactoring code yang kita buat sebelumnya dengan async dan await, lalu kita berikan errornya juga