const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

const showRecip = async function () {
  try {
    const res = await fetch(
      'https://forkify-api.jonas.io/api/v2/recipes/e2f86576-5ce0-4b83-a865-6647b69b4727',
    );

    const data = await res.json();
    console.log(res, data);

    if (!res.ok) throw new Error(`${data.message},(${res.status})`);
  } catch (err) {
    alert('err');
  }
};

showRecip();
