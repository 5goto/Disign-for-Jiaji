import data from "./company-data.js";
import companies from "./main-company.js";

$("#expand").click(function () {
  const $text = $("#expandable");
  const $showMarker = $("#expand");
  const $hideMarker = $("#collapse");
  $text.show();
  $hideMarker.show();
  $showMarker.hide();
});

$("#collapse").click(function () {
  const $text = $("#expandable");
  const $showMarker = $("#expand");
  const $hideMarker = $("#collapse");
  $text.hide();
  $hideMarker.hide();
  $showMarker.show();
});

(function () {
  var logo = document.querySelectorAll(".content");
  var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      var entrySquare = entry.target.querySelector(".about-title");
      if (
        typeof getCurrentAnimationPreference === "function" &&
        !getCurrentAnimationPreference()
      ) {
        return;
      }

      if (entry.isIntersecting) {
        entrySquare.classList.add("title-animation");
        return;
      }
    });
  });
  logo.forEach((ent) => {
    observer.observe(ent);
  });
})();

//shedule-slider

$(document).ready(function () {
  initCustomSlider();
});

function initCustomSlider() {
  const slider = document.querySelector(".slider-items");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    e.stopPropagation();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });
}

// forum-registriation

$(".first-add-button").click(() => {
  $(".second-visiter").show();
  $(".first-add-button").hide();
});

$(".second-add-button").click(() => {
  $(".third-visiter").show();
  $(".second-add-button").hide();
});

$(".first-reset").click(() => {
  if ($(".third-reset").is(":visible")) {
    replaceSecondAndFirstData(false);
    replaceThirdAndSecondData();

    $(".first-add-button").hide();
    $(".second-add-button").show();
  } else if ($(".second-reset").is(":visible")) {
    replaceSecondAndFirstData();
  } else {
    resetFirstVisiterField();

    $(".second-visiter").hide();
    $(".first-add-button").show();
  }
});

$(".second-reset").click(() => {
  if ($(".third-reset").is(":visible")) {
    replaceThirdAndSecondData();
  } else {
    resetSecondVisiterField();

    $(".second-visiter").hide();
    $(".first-add-button").show();
  }
});

$(".third-reset").click(() => {
  resetThirdVisiterField();

  $(".third-visiter").hide();
  $(".second-add-button").show();
});

function resetThirdVisiterField() {
  $(".third-visiter-visa").prop("checked", false);
  $(".third-visiter-job").val("");
  $(".third-visiter-patronymic").val("");
  $(".third-visiter-name").val("");
  $(".third-visiter-lastname").val("");
}

function resetSecondVisiterField() {
  $(".second-visiter-visa").prop("checked", false);
  $(".second-visiter-job").val("");
  $(".second-visiter-patronymic").val("");
  $(".second-visiter-name").val("");
  $(".second-visiter-lastname").val("");
}

function resetFirstVisiterField() {
  $(".first-visiter-visa").prop("checked", false);
  $(".first-visiter-job").val("");
  $(".first-visiter-patronymic").val("");
  $(".first-visiter-name").val("");
  $(".first-visiter-lastname").val("");
}

function replaceThirdAndSecondData(resetNext = true) {
  $(".third-visiter-visa").is(":checked")
    ? $(".second-visiter-visa").prop("checked", true)
    : $(".second-visiter-visa").prop("checked", false);
  $(".second-visiter-job").val($(".third-visiter-job").val());
  $(".second-visiter-patronymic").val($(".third-visiter-patronymic").val());
  $(".second-visiter-name").val($(".third-visiter-name").val());
  $(".second-visiter-lastname").val($(".third-visiter-lastname").val());

  if (resetNext) {
    resetThirdVisiterField();
  }
  $(".third-visiter").hide();
  $(".second-add-button").show();
}

function replaceSecondAndFirstData(resetNext = true) {
  $(".second-visiter-visa").is(":checked")
    ? $(".first-visiter-visa").prop("checked", true)
    : $(".first-visiter-visa").prop("checked", false);
  $(".first-visiter-job").val($(".second-visiter-job").val());
  $(".first-visiter-patronymic").val($(".second-visiter-patronymic").val());
  $(".first-visiter-name").val($(".second-visiter-name").val());
  $(".first-visiter-lastname").val($(".second-visiter-lastname").val());

  if (resetNext) {
    resetSecondVisiterField();
    $(".second-visiter").hide();
    $(".first-add-button").show();
  }
}

$(".partner").hover(
  function () {
    const image = $(this).find("img");
    let image_src = $(image).attr("src");
    image_src = image_src.split(".");
    $(this)
      .find("img")
      .attr("src", `${image_src[0] + "-selected." + image_src[1]}`);
  },
  function () {
    const image = $(this).find("img");
    let image_src = $(image).attr("src");
    image_src = image_src.split("-");
    $(this)
      .find("img")
      .attr("src", `${image_src[0] + ".svg"}`);
  }
);

$(".member").hover(
  function () {
    const image = $(this).find("img");
    let image_src = $(image).attr("src");
    image_src = image_src.split(".");
    $(this)
      .find("img")
      .attr("src", `${image_src[0] + "_hover." + image_src[1]}`);
  },
  function () {
    const image = $(this).find("img");
    let image_src = $(image).attr("src");
    image_src = image_src.split("_");
    $(this)
      .find("img")
      .attr("src", `${image_src[0] + ".png"}`);
  }
);

$(".other-sum").hover(
  function () {
    const image = $(this).find("img");
    let image_src = $(image).attr("src");
    image_src = image_src.split(".");
    $(this)
      .find("img")
      .attr("src", `${image_src[0] + "_selected." + image_src[1]}`);
  },
  function () {
    const image = $(this).find("img");
    let image_src = $(image).attr("src");
    image_src = image_src.split("_");
    $(this)
      .find("img")
      .attr("src", `${image_src[0] + ".png"}`);
  }
);

$(".slider-item").hover(
  function () {
    const image = $(this).find("img");
    let image_src = $(image).attr("src");
    image_src = image_src.split(".");
    $(this)
      .find("img")
      .attr("src", `${image_src[0] + "_selected." + image_src[1]}`);
  },
  function () {
    const image = $(this).find("img");
    let image_src = $(image).attr("src");
    image_src = image_src.split("_");
    $(this)
      .find("img")
      .attr("src", `${image_src[0] + ".png"}`);
  }
);

const details = document.querySelectorAll("details");

// добавить к каждому клику события клика
[...details].forEach((targetDetail) => {
  targetDetail.addEventListener("click", (_) => {
    // закрывать всех кроме кликнутого
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

$(".slider-item").click(function () {
  const $modal = $("#main-comp");
  const index = Number($(this).attr("class").split(" ")[1]);

  const new_title = companies[index].name;
  const description = companies[index].description;
  const imgSrc_1 = companies[index].imgSrc[0];
  const imgSrc_2 = companies[index].imgSrc[1];
  $modal.find(".modal-title").text(new_title);
  $modal.find(".main-description").text(description);
  $modal.find(".main_src_1").attr("src", imgSrc_1);
  $modal.find(".main_src_2").attr("src", imgSrc_2);
});

$(".other-sum").click(function () {
  const $modal = $("#small-comp");
  let new_title = $(this).text();
  new_title = $.trim(new_title);

  const title = $modal.find(".modal-title").text(new_title);

  const index = Number($(this).attr("class").split(" ")[1]);
  const info = data[index];

  let content = '<div class="123">';
  content += "<ul>";

  for (let item of info) {
    content += "<li>";
    content += `${item}`;

    content += "</li>";
  }
  content += "</ul>";
  console.log(content);
  $("#small-comp-inner").append(content);
});

$("#small-comp").on("hide.bs.modal", function () {
  $("#small-comp-inner > *").remove();
});

// if (window.devicePixelRatio !== 1) {
//   let scaleValue = 1 / window.devicePixelRatio;
//   $("body").css("transform", "scale(" + scaleValue + ")");
// }
