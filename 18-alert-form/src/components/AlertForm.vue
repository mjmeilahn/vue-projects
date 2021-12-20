<template>
    <div class="alertForm">
        <h2 class="alertForm__heading">Email Alert</h2>
        <section class="alertForm__inputs">
            <label class="alertForm__label" for="alertForm__message">
                <span class="alertForm__label-text">Alert Message</span>
                <input
                class="alertForm__input"
                type="text"
                id="alertForm__message"
                ref="message"
                required="required"
                v-model.lazy="message"
                >
            </label>
            <p v-if="invalid.message" class="alertForm__invalid">Invalid message.</p>

            <section class="alertForm__radio-section">
                <div class="alertForm__radio-heading">Frequency</div>
                <div class="alertForm__radio-inputs">
                    <label v-for="(frequency, freqIndex) in frequencies" :key="'frequency__' + freqIndex" class="alertForm__label alertForm__label-radio" :for="'alertForm__frequency-' + frequency">
                        <input
                        :id="'alertForm__frequency-' + frequency"
                        type="radio"
                        name="frequency"
                        ref="frequency"
                        required="required"
                        :value="frequency"
                        v-model.lazy="selectedFrequency"
                        >
                        <span>{{ frequency }}</span>
                    </label>
                </div>
            </section>
            <p v-if="invalid.frequency" class="alertForm__invalid">Invalid frequency.</p>

            <label class="alertForm__label" for="alertForm__recipients-input">
                <span class="alertForm__label-text">Email Recipients</span>
                <input
                class="alertForm__input"
                type="email"
                ref="email"
                autocomplete="email"
                id="alertForm__recipients-input"
                @keyup.enter="addRecipient"
                >
            </label>
            <p v-if="invalid.email" class="alertForm__invalid">Invalid email.</p>
        </section>
        <section class="alertForm__recipients">
            <div v-for="(recipient, recipientIndex) in recipients" :key="'recipient__' + recipientIndex" class="alertForm__recipient">
                <div class="alertForm__recipient-email">{{ recipient }}</div>
                <div @click="removeRecipient(recipientIndex)" class="alertForm__recipient-remove">x</div>
            </div>
        </section>
        <section class="alertForm__buttons">
            <button @click="testRecipients" class="alertForm__button-test">Test Alert</button>
            <button @click="saveRecipients" class="alertForm__button-save">Save</button>
        </section>
        <p v-if="invalid.isInvalid" class="alertForm__invalid">Invalid Submission. Please review and correct your information.</p>
    </div>
</template>

<script>
export default {
    name: 'AlertForm',
    data() {
        return {
            message: '',
            selectedFrequency: '',
            frequencies: ['Hourly', 'Daily'],
            recipients: [], // String array of emails
            invalid: {
                isInvalid: false,
                message: false,
                frequency: false,
                email: false
            },
            endpoint: {
                message: '',
                frequency: '',
                recipients: []
            }
        }
    },
    methods: {
        validRecipientEmail(email) {
            return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
        },
        addRecipient() {
            this.invalid.email = false
            const email = this.$refs.email.value

            // VALIDATE EMAIL
            if (email.length > 0 && email !== undefined && email !== null && typeof email === 'string' && !this.recipients.includes(email) && this.validRecipientEmail(email) === true) {
                this.recipients.push(email)
                this.$refs.email.value = ''
            }
            else if (this.recipients.includes(email)) {
                console.error('Duplicate email.')
                this.$refs.email.value = ''
            }
            else {
                console.error('Invalid email.')
                this.invalid.isInvalid = true
                this.invalid.email = true
            }
        },
        removeRecipient(index) {
            this.recipients.splice(index, 1)
        },
        validate() {
            this.endpoint.message = ''
            this.endpoint.frequency = ''
            this.endpoint.recipients = []
            this.invalid.isInvalid = false
            this.invalid.message = false
            this.invalid.frequency = false
            this.invalid.email = false
            this.message = this.message.replace(/(['"<>])|(\/)|(\s+)/g, ' ').trim()
            const message = this.message
            const frequency = this.selectedFrequency
            const recipients = this.recipients
            const email = this.$refs.email.value

            // VALIDATE RECIPIENTS
            if (email.length > 0) {
                this.addRecipient()
            }
            if (recipients.length > 0 && Array.isArray(recipients)) {
                this.endpoint.recipients = recipients
            }
            else {
                console.error('Invalid recipient list.')
                this.invalid.isInvalid = true
                this.invalid.email = true
            }
            // VALIDATE MESSAGE
            if (message.length > 0 && message !== undefined && message !== null && typeof message === 'string') {
                this.endpoint.message = message
            }
            else {
                console.error('Invalid message.')
                this.invalid.isInvalid = true
                this.invalid.message = true
            }
            // VALIDATE FREQUENCY
            if (this.frequencies.includes(frequency) && frequency !== undefined && frequency !== null && typeof frequency === 'string') {
                this.endpoint.frequency = frequency
            }
            else {
                console.error('Invalid frequency.')
                this.invalid.isInvalid = true
                this.invalid.frequency = true
            }
            return this.invalid.isInvalid ? true : false
        },
        testRecipients() {
            // TEST RECIPIENTS
            const hasErrors = this.validate()

            if (!hasErrors) {
                console.log('Test Alert', this.endpoint)
            }
        },
        saveRecipients() {
            // SAVE RECIPIENTS
            const hasErrors = this.validate()

            if (!hasErrors) {
                console.log('Save', this.endpoint)

                // RESET FORM
                this.message = ''
                this.selectedFrequency = ''
                this.recipients = []
            }
        }
    }
}
</script>

<style scoped>
    /* UX BEHAVIOR */
    button,
    input[type="radio"],
    .alertForm__label-radio,
    .alertForm__recipient-remove {
        cursor: pointer;
    }

    /* ERROR MESSAGES */
    .alertForm__invalid {
        color: #ff0000;
    }

    .alertForm__inputs .alertForm__invalid {
        text-align: left;
    }

    /* CONTAINER */
    .alertForm {
        border: 5px solid #000000;
        margin: 50px auto;
        max-width: 580px;
        padding: 50px;
    }

    /* HEADING */
    .alertForm__heading {
        margin: 0;
        margin-bottom: 40px;
        text-align: left;
    }

    /* FORM WRAPPERS */
    .alertForm__inputs,
    .alertForm__recipients,
    .alertForm__buttons {
        margin: auto;
        max-width: 355px;
    }

    /* INPUTS */
    .alertForm__inputs {
        margin-bottom: 15px;
    }

    /* INPUT */
    .alertForm__input {
        height: 30px;
        padding: 0 10px;
    }

    /* LABELS */
    .alertForm__label {
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    /* LABEL TEXT */
    .alertForm__label-text {
        margin-bottom: 10px;
    }

    /* RADIO WRAPPERS */
    .alertForm__radio-section {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin: 40px 0;
    }

    .alertForm__radio-heading,
    .alertForm__radio-inputs .alertForm__label {
        margin-right: 30px;
    }

    .alertForm__radio-inputs,
    .alertForm__radio-inputs .alertForm__label {
        display: flex;
        flex-direction: row;
    }

    /* EMAIL RECIPIENTS */
    .alertForm__recipients {
        margin-bottom: 45px;
    }

    .alertForm__recipient {
        align-items: center;
        display: flex;
        justify-content: space-between;
    }

    /* SUBMIT BUTTONS */
    .alertForm__buttons {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    .alertForm__buttons button {
        border: 2px solid #000000;
        padding: 5px 30px;
    }

    .alertForm__button-save {
        margin-left: 15px;
    }
</style>
