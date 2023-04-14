jQuery.validator.addMethod(
  "phone_number",
  function (value) {
    return /^(\+?7|8)?9\d{9}$/.test(value);
  },
  ""
);

// $("#callback-form").validate({
//   debug: true,
//   rules: {
//     // simple rule, converted to {required:true}
//     company: "required",
//     name: "required",
//     job: "required",
//     phone: "phone_number",
//     email: {
//       required: true,
//       email: true,
//     },
//     "callback.inn": {
//       required: false,
//       digits: true,
//     },
//     // compound rule
//   },
//   messages: {
//     inn: {
//       digits: "123123",
//       required: "",
//     },
//     phone: {
//       digits: "",
//       required: "",
//     },
//     email: {
//       required: "",
//       email: "",
//     },
//     company: {
//       required: "",
//     },
//   },
//   errorClass: "is-invalid",
//   validClass: "is-valid",
// });

var callback_form = document.querySelector("#callback-form");
var validateBtn = document.querySelector("#callback-submit");

innCheck = function (str) {
  return /^(\d{10})$/.test(str);
};

emailCheck = function (str) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i.test(
    str
  );
};

phoneCheck = function (str) {
  const mobilePhoneRus = /^(\+?7|8)?9\d{9}$/;
  //   const mobilePhoneCn = /^(\+?)[84]\d{11}$/;

  const removeNonDigits = (teststr) => teststr.replace(/\D+/g, "");
  const isMobilePhoneRus = (teststr) =>
    mobilePhoneRus.test(removeNonDigits(teststr));
  //   const isMobilePhoneCn = (teststr) =>
  //     mobilePhoneCn.test(removeNonDigits(teststr));
  console.log(isMobilePhoneRus(str));

  return isMobilePhoneRus(str);
};

function phoneValidate() {
  if (phoneCheck(this.value)) {
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  } else {
    this.classList.remove("is-valid");
    this.classList.add("is-invalid");
  }
  this.classList.remove("focused");
}

function emailValidate() {
  if (emailCheck(this.value)) {
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  } else {
    this.classList.remove("is-valid");
    this.classList.add("is-invalid");
  }
  this.classList.remove("focused");
}

function innValidate() {
  if (innCheck(this.value)) {
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  } else {
    this.classList.remove("is-valid");
    this.classList.add("is-invalid");
  }
  this.classList.remove("focused");
}

function requiredValidate() {
  if (this.value != "") {
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  } else {
    this.classList.remove("is-valid");
    this.classList.add("is-invalid");
  }
  this.classList.remove("focused");
}

function notrequiredValidate() {
  this.classList.add("is-valid");
}

["focusout", "input", "click"].forEach(function (eve) {
  document.querySelector("#callback-inn").addEventListener(eve, innValidate);
  document
    .querySelector("#callbackName")
    .addEventListener(eve, requiredValidate);
  document.querySelector("#callback-inn").addEventListener(eve, innValidate);
  document
    .querySelector("#callback-import")
    .addEventListener(eve, notrequiredValidate);
  document
    .querySelector("#callback-export")
    .addEventListener(eve, notrequiredValidate);
  document
    .querySelector("#callback-name")
    .addEventListener(eve, requiredValidate);
  document
    .querySelector("#callback-employee")
    .addEventListener(eve, requiredValidate);
  document
    .querySelector("#callback-comments")
    .addEventListener(eve, requiredValidate);
  document
    .querySelector("#callback-email")
    .addEventListener(eve, emailValidate);
  document.querySelector("#phone1").addEventListener(eve, phoneValidate);
});

// callback_form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const company = document.querySelector("#callbackName")
//   const inn =  document.querySelector("#callback-inn")
//   const imp =
//   const exp
//   const name
//   const job
//   const phone
//   const email
//   const comments

//   callback_form.submit();
// });

$("#registration-form").validate({
  rules: {
    // simple rule, converted to {required:true}
    company: "required",
    phoneNumber: "phone_number",
    city: "required",
    contactName: "required",
    job: "required",
    email: {
      required: true,
      email: true,
    },
    inn: {
      required: false,
      digits: true,
    },
    // compound rule
  },
  messages: {
    inn: {
      digits: "",
      required: "",
    },
    phone: {
      digits: "",
      required: "",
    },
    email: {
      required: "",
      email: "",
    },
    company: {
      required: "",
    },
  },
  errorClass: "is-invalid",
  validClass: "is-valid",
});
