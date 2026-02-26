currentTab = 'all'
const btnActive = ['bg-blue-500', 'text-white'];
const btnInactive = ['bg-white', 'text-gray-700'];

const allContainer = document.getElementById('card-container');
const interviewSection = document.getElementById('interview-section')
const rejectedSection = document.getElementById('rejected-section') 

const emptySection = document.getElementById('empty-state')

function toggleTab (tab) {
 const tabs = ['all', 'interview', 'reject'];

//  allContainer.classList.add('hidden')
//  interviewSection.classList.add('hidden')
//  rejectedSection.classList.add('hidden')

 for( t of tabs) {
    const btnName = document.getElementById('btn-' + t);
     
     if(t === tab) {
        btnName.classList.remove(... btnInactive);
        btnName.classList.add(... btnActive)
     }
     else{
        btnName.classList.remove(... btnActive);
        btnName.classList.add(... btnInactive)
     }
    
 }

 const pages = [allContainer,interviewSection,rejectedSection,emptySection];


 for(const section of pages) {
    section.classList.add('hidden');
 }

 if(tab === 'all') {
    currentTab = 'all'
    allContainer.classList.remove('hidden')
    if(allContainer.children.length <1) {
      emptySection.classList.remove('hidden')
    }
 }
 else if( tab === 'interview') {
    currentTab = 'interview'
    interviewSection.classList.remove('hidden')
     if(interviewSection.children.length <1) {
      emptySection.classList.remove('hidden')
    }
 }
 else {
    currentTab = 'reject'
    rejectedSection.classList.remove('hidden')
     if(rejectedSection.children.length <1) {
      emptySection.classList.remove('hidden')
    }
 }
}


//total count

const totalCount = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectCount = document.getElementById('reject-count');
const jobCount = document.getElementById('job-count');



toggleTab(currentTab)

document.getElementById('main-container')
.addEventListener('click', function(event) {
    const card = event.target.closest('.card')
    const status = card.querySelector('.status')
    if(event.target.classList.contains('interviewed-btn')) {
         status.innerText = 'Interviewed'
     interviewSection.appendChild(card)
    }
    if(event.target.classList.contains('rejected-btn')) {
         status.innerText = 'Rejected'
     rejectedSection.appendChild(card)
    }
    if(event.target.classList.contains('dlt-btn')) {
     const parent= event.target.parentNode.parentNode.parentNode.parentNode
     parent.removeChild(card)
     toggleTab(currentTab)
    }
updateCount()
    



});

function updateCount() {
totalCount.innerText = allContainer.children.length;
interviewCount.innerText = interviewSection.children.length;
rejectCount.innerText = rejectedSection.children.length;
jobCount.innerText = `${allContainer.children.length} jobs`
}
updateCount()

