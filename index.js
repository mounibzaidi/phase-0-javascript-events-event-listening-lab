function addingEventListener() {
    const button = document.getElementById('button');

    if (button) {
        button.addEventListener('click', function () {
            alert('Button clicked!');
        });
    } else {
        console.error('Button element not found.');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    addingEventListener();
});
