async function sleep(x) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {resolve()}, x);
    });
}

async function other() {
    await sleep(1000);
    console.log('Прошла одна секунда');
    }

other();