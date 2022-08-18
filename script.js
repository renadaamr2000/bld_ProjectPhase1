let my = []
let courses = []
let chng = ""
fetch("http://localhost:3000/body")
  .then((res) => res.json())
  .then((data) => {
    courses = data.courses 
    addCourses()
})
  
let addCourses = () => {
    my = []
    chng = search_bar.value;
    courses.forEach((course) => {
        if (course.title.toLowerCase().includes(chng.toLocaleLowerCase())) {
            my.push(course);
        }
    });
    let container = document.querySelector(".courses-container")
    container.innerHTML = ''
    my.forEach((course) => {
        container.innerHTML += `
            <div class="fig-cont"><figure>
                <img class="course-img" src="${course.image}" alt="Course image">
                <figcaption class ="cap1">${course.title}</figcaption>
                <figcaption class ="cap2">${course.instructors[0].name}</figcaption>
                <i>${course.rating}</i>
                <i class="fas fa-star" style="color: #f4c150"></i>
                <i class="fas fa-star" style="color: #f4c150"></i>
                <i class="fas fa-star" style="color: #f4c150"></i>
                <i class="fas fa-star" style="color: #f4c150"></i>
                <i class="fas fa-star-half-alt" style="color: #f4c150"></i>
                <figcaption class ="cap1">E£${course.price}</figcaption></figure></div>
        `});};
let search_bar = document.querySelector("input");
search_bar.addEventListener("keyup", (e) => {
    chng = e.target.value;
    addCourses();
    e.preventDefault();
});