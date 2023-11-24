import { GetProduct } from './products-api/api';
import axios from 'axios';

const refs = {
  footerSubmitBtnEl: document.querySelector('.footer-form-btn'),
  footerInputEl: document.querySelector('.footer-input'),
};

refs.footerSubmitBtnEl.addEventListener('click', onSubmit);
refs.footerInputEl.addEventListener('input', onInput); //throttle библиотека и отрабативать every n мс

refs.footerSubmitBtnEl.disabled = true;

function onInput() {
  const isValid = this.validity.valid;
  console.log(isValid);
  refs.footerSubmitBtnEl.disabled = true;
  if (isValid) {
    refs.footerSubmitBtnEl.disabled = false;
  }

  //   const isValid = refs.footerInputEl.ValidityState.patternMismatch;
  //   console.log(isValid);
  //is  valid
}

// refs.footerSubmitBtnEl.disabled = true;

async function onSubmit(e) {
  e.preventDefault();

  const userEmailData = {
    email: refs.footerInputEl.value,
  };
  const getProduct = new GetProduct();
  //   console.log(getProduct.subscription(userEmailData));

  try {
    const data = await getProduct.subscription(userEmailData);
    // if (userEmailData.email.trim() === 0) {
    //   alert('Enter your email please');
    // }
    refs.footerSubmitBtnEl.disabled = false;
    console.log(data);
    alert(data.message);
    //   "message": "Welcome to the Food Boutique! 🥦🍓 With Food Boutique, you're not just subscribing to food, you're signing up for a fresher, fitter, and happier you. Get ready to elevate your wellness journey, one bite at a time!"
    // }

    // console.log(userEmailData);
  } catch (error) {
    console.error(error);

    //   if ()
    //   alert('Please enter your email')
    //    alert(data.message);
  }
}

// if(201)  message modal?
//    if (response.status === 200) return;
//       {
//if (409)

// const userEmail = refs.footerInputEl.value.

//     {
//     email: 'test@gmail.com',
//   };

// async subscription(bodyData) {
//     try {
//       const url = '/subscription';
//       const response = await axios.post(url, bodyData);
//       return response.data;
//     } catch (error) {
//       return Promise.reject(response.status);
//     }
//   }

//   const dataJson = JSON.stringify(userEmailData);
//   console.log(dataJson);

//    if (response.status === 400) {
//      alert(response.data.message);
//    }
