const content = {
    answer1: "text1",
    answer2: "text2",
    answer3: "text3",
    answer4: "text4",
    answer5: "text5",
    answer6: "text6",
    answer7: "text7",
    answer8: "text8",
    answer9: "text9",
    answer10: "text10"
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('answer1').innerHTML = `<div class="card-body">${content.answer1}</div>`;
    document.getElementById('answer2').innerHTML = `<div class="card-body">${content.answer2}</div>`;
    document.getElementById('answer3').innerHTML = `<div class="card-body">${content.answer3}</div>`;
    document.getElementById('answer4').innerHTML = `<div class="card-body">${content.answer4}</div>`;
    document.getElementById('answer5').innerHTML = `<div class="card-body">${content.answer5}</div>`;
    document.getElementById('answer6').innerHTML = `<div class="card-body">${content.answer6}</div>`;
    document.getElementById('answer7').innerHTML = `<div class="card-body">${content.answer7}</div>`;
    document.getElementById('answer8').innerHTML = `<div class="card-body">${content.answer8}</div>`;
    document.getElementById('answer9').innerHTML = `<div class="card-body">${content.answer9}</div>`;
    document.getElementById('answer10').innerHTML = `<div class="card-body">${content.answer10}</div>`;
});



