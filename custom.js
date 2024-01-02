
// Testimonial start
const clinetImage = document.getElementById('clinetImage');
const clientReview = document.getElementById('clientReview');
const clientFrom = document.getElementById('clientFrom');
const clientName = document.getElementById('clientName');

const client = [
    {
        name: "Chris Tom",
        from: "User from UK",
        message: ' I have used them twice now. Good rates, very efficient service and priced simply dummy text of the printing and typesetting industry quidam interesset his et. Excellent.',
        image: './assets/client-sm-4.jpg'
    },
    {
        name: "Patrick Cary",
        from: "Freelancer from USA",
        message: ' I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.',
        image: './assets/client-sm-2.jpg'
    },
    {
        name: "Jay Shah",
        from: "Founder at Icomatic Pvt LTD",
        message: ' Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.',
        image: './assets/client-sm-1.jpg'
    },
    {
        name: "Sabiha Jannat Noor",
        from: "User from UK",
        message: ' I have used them twice now. Good rates, very efficient service and priced simply dummy text of the printing and typesetting industry quidam interesset his et. Excellent',
        image: './assets/client-sm-4.jpg'
    }
]

function test(first) {
    if (first === 1) {
        simple(0)
    } else if (first === 2) {
        simple(1)
    } else if (first === 3) {
        simple(2)
    } else {
        simple(3)
    }
}

function simple(i) {
    clientName.textContent = client[i].name;
    clientFrom.textContent = client[i].from;
    clientReview.textContent = client[i].message;
    clinetImage.src = client[i].image;
}


// testimonial End 

