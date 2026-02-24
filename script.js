let interviewList = [];
let rejectList = [];
let currentStatus = 'all-filter-btn';

let total = document.getElementById('total-count');
let interview = document.getElementById('interview-count');
let reject = document.getElementById('reject-count');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectBtn = document.getElementById('reject-btn');

const cardContainer = document.getElementById('card-container');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filter-section');


function calculateCount() {
    total.innerText = cardContainer.children.length;
    interview.innerText = interviewList.length;
    reject.innerText = rejectList.length;
}

calculateCount();


function toggleStyle(id) {

    allFilterBtn.classList.remove('bg-white','text-gray-500');
    interviewBtn.classList.remove('bg-white','text-gray-500');
    rejectBtn.classList.remove('bg-white','text-gray-500');

    allFilterBtn.classList.add('bg-blue-500','text-white');
    interviewBtn.classList.add('bg-blue-500','text-white');
    rejectBtn.classList.add('bg-blue-500','text-white');

    const selected = document.getElementById(id);
    selected.classList.remove('bg-blue-500','text-white');
    selected.classList.add('bg-white','text-gray-500');

    currentStatus = id;

    if(id === 'all-filter-btn') {
        cardContainer.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
    else if(id === 'interview-btn') {
        cardContainer.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    }
    else if(id === 'reject-btn') {
        cardContainer.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderReject();
    }
}


mainContainer.addEventListener('click', function(event) {

    const target = event.target;

    
    if (target.closest('.dlt-btn')) {
        const card = target.closest('.flex');
        const mobileFirst = card.querySelector('.mobile-first').innerText;

        interviewList = interviewList.filter(item => item.mobileFirst !== mobileFirst);
        rejectList = rejectList.filter(item => item.mobileFirst !== mobileFirst);

    
        card.remove();

        calculateCount();

        if(currentStatus === 'interview-btn') renderInterview();
        if(currentStatus === 'reject-btn') renderReject();
    }

    if(target.classList.contains('interviewed-btn')) {
        const parent = target.closest('.flex');
        const mobileFirst = parent.querySelector('.mobile-first').innerText;
        const posiTion = parent.querySelector('.position').innerText;
        const salaRy = parent.querySelector('.salary').innerText;
        const descRip = parent.querySelector('.descrip').innerText;

        parent.querySelector('.not-applied').innerText = 'INTERVIEW';

        const cardInfo = { mobileFirst, posiTion, salaRy, descRip };

        if(!interviewList.find(item => item.mobileFirst === mobileFirst)) {
            interviewList.push(cardInfo);
        }

        rejectList = rejectList.filter(item => item.mobileFirst !== mobileFirst);

        calculateCount();
        if(currentStatus === 'interview-btn') renderInterview();
        if(currentStatus === 'reject-btn') renderReject();
    }

    if(target.classList.contains('rejected-btn')) {
        const parent = target.closest('.flex');
        const mobileFirst = parent.querySelector('.mobile-first').innerText;
        const posiTion = parent.querySelector('.position').innerText;
        const salaRy = parent.querySelector('.salary').innerText;
        const descRip = parent.querySelector('.descrip').innerText;

        parent.querySelector('.not-applied').innerText = 'REJECTED';

        const cardInfo = { mobileFirst, posiTion, salaRy, descRip };

        if(!rejectList.find(item => item.mobileFirst === mobileFirst)) {
            rejectList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.mobileFirst !== mobileFirst);

        calculateCount();
        if(currentStatus === 'reject-btn') renderReject();
        if(currentStatus === 'interview-btn') renderInterview();
    }

});

function renderInterview() {
    filterSection.innerHTML = '';

    for (let item of interviewList) {
        const div = document.createElement('div');
        div.className = 'flex justify-between px-8 py-5 rounded-[5px] shadow-2xl';
        div.innerHTML = `
            <div class="space-y-6 py-5">
                <h2 class="text-xl font-bold mobile-first">${item.mobileFirst}</h2>
                <p class="position">${item.posiTion}</p>
                <p class="salary">${item.salaRy}</p>
                <button class="bg-green-500 text-white px-4 py-2 font-bold">INTERVIEW</button>
                <p class="descrip">${item.descRip}</p>
            </div>
        `;
        filterSection.appendChild(div);
    }
}

function renderReject() {
    filterSection.innerHTML = '';

    for (let item of rejectList) {
        const div = document.createElement('div');
        div.className = 'flex justify-between px-8 py-5 rounded-[5px] shadow-2xl';
        div.innerHTML = `
            <div class="space-y-6 py-5">
                <h2 class="text-xl font-bold mobile-first">${item.mobileFirst}</h2>
                <p class="position">${item.posiTion}</p>
                <p class="salary">${item.salaRy}</p>
                <button class="bg-red-500 text-white px-4 py-2 font-bold">REJECTED</button>
                <p class="descrip">${item.descRip}</p>
            </div>
        `;
        filterSection.appendChild(div);
    }
}