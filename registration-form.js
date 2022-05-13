const RegistrationForm = {
    data() {
        return {
            addressSameChecked: true,
        }
    },
    props: ["items"],
    template: `
        <h3>Registration</h3>
        <hr>
        <form autocomplete="off" class="needs-validation" novalidate>
            <text-input label="First Name" name="first-name" required="true" type="text"></text-input>
            <text-input label="Last Name" name="last-name" required="true" type="text"></text-input>
            <text-input label="Email" name="email" required="true" type="email"></text-input>
            <text-input label="Password" name="password" required="true" type="password"></text-input>
            <select-input label="Favorite Color" name="color" :items="items"></select-input>
            
            <text-input label="Address" name="address" required="true" type="text"></text-input>
            <text-input label="City" name="city" required="true" type="text"></text-input>
            <text-input label="State" name="state" required="true" type="text"></text-input>
            <text-input label="Zip Code" name="zip" required="true" type="text"></text-input>
            
            <check-input v-on:click="addressSame" label="Mailing Address Same" checked="true" v-model="addressSameChecked"></check-input>

            <div class="mt-3">
                <div v-if="addressSameChecked === false">
                    <text-input label="Mailing Address" name="address2" type="text"></text-input>
                    <text-input label="Mailing City" name="city2" type="text"></text-input>
                    <text-input label="Mailing State" name="state2" type="text"></text-input>
                    <text-input label="Mailing Zip" name="zip2" type="text"></text-input>
                </div>
            </div>

            <check-input label="I agree to terms" required="true"></check-input>
            <hr>
            <input class="btn btn-outline-primary" type="submit" value="Register"></input>
        </form>
    `,
    methods: {
        addressSame() {
            console.log("Address same fired");
            if (this.addressSameChecked === true) {
                console.log("Was checked on click");
                this.addressSameChecked = false;
            } else {
                console.log("was not checked");
                this.addressSameChecked = true;
            }
        }
    },
    components: {
        'text-input': TextInput,
        'select-input': SelectInput,
        'check-input' : CheckInput,
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