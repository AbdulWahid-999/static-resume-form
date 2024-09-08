const resumeForm = document.getElementById('resume-form') as HTMLFormElement;

resumeForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(resumeForm);
    const resumeData = Object.fromEntries(formData);

    // Process the resume data here (e.g., send it to a server)

    console.log(resumeData);
});