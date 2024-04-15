document.getElementById('volunteerButton').addEventListener('click', function() {
    var form = document.getElementById('volunteerForm');
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
});

document.getElementById('charityLogo').addEventListener('mouseover', function() {
    document.getElementById('moreInfo').style.display = 'block';
});

document.getElementById('charityLogo').addEventListener('mouseout', function() {
    document.getElementById('moreInfo').style.display = 'none';
});
