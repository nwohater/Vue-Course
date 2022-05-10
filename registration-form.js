const RegistrationForm = {
    props: [],
    template: `
        <h3>Registration</h3>
        <hr>
        <form autocomplete="off" class="needs-validation" novalidate>
            <text-input label="First Name" name="first-name" required="true" type="text"></text-input>
            <text-input label="Last Name" name="last-name" required="true" type="text"></text-input>
            <text-input label="Email" name="email" required="true" type="email"></text-input>
            <text-input label="Password" name="password" required="true" type="password"></text-input>
            <hr>
            <input class="btn btn-outline-primary" type="submit" value="Register">
        </form>
    `,
    components: {
        'text-input': TextInput,
    },
    mounted() {
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function () {
        'use strict';

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation');

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms).forEach(function (form) {
            form.addEventListener(
            'submit',
            function (event) {
                if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                }

                form.classList.add('was-validated');
            },
            false
            );
        });
        })();
    }
}